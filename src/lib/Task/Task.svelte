<script lang="ts">
  import type TaskObject from "./Task"
  import Button from "../Button.svelte"
  import { fade } from "svelte/transition"
  import { quadOut } from "svelte/easing"
  import { createEventDispatcher } from "svelte"
  export let task: TaskObject
  export let inCompletedList = false
  export let firstInCompletedList = false

  export let lastUncompletedTask = false

  const dispatch = createEventDispatcher()

  let buttonActive = true
  let buttonError = ""

  function complete(e: MouseEvent) {
    const target = e.target as HTMLElement
    const input = target.parentElement.querySelector(
      "input"
    ) as HTMLInputElement
    if (input.value) {
      task.complete(input.value)
      input.value = ""
      buttonError = input.value
      const lastTask = task
      window.setTimeout(() => {
        dispatch("taskcomplete", {
          task: lastTask,
        })
      }, 300)
      task = task
    } else {
      buttonError = "Please enter a completion message"
      input.focus()
    }
  }

  function spin(node: HTMLElement, { delay = 0, duration = 500 }) {
    if (inCompletedList && !firstInCompletedList) {
      return {
        delay,
        duration,
        easing: quadOut,
        css: (t: number) => `transform: translateY(${(1 - t) * -100}%)`,
      }
    }
    if (firstInCompletedList) {
      const from = document.querySelector(".tippytop")
      if (!from) {
        return {
          delay: 0,
          duration,
          easing: quadOut,
          css: (t: number) => `transform: translateY(${(1 - t) * -100}%)`,
        }
      }
      const to = node.parentElement
      // get bounding box of from
      const fromRect = from.getBoundingClientRect()
      // get bounding box of to
      const toRect = to.getBoundingClientRect()
      const yDiff = fromRect.y - toRect.y
      console.log(fromRect, toRect, yDiff)
      return {
        delay: 0,
        duration: 500,
        css: (t: number) => `transform: translateY(${(1 - t) * yDiff}px)`,
        easing: quadOut,
      }
    }
    return {
      delay: 0,
      duration: 500,
      css: (t: number) => `
        transform: rotate(${(1 - t) * 5}deg);
        background-color: rgba(var(--accent), ${0.1 + t * 0.2});
        opacity: ${t};
      `,
      easing: quadOut,
    }
  }

  function fadein(node, { delay = 0, duration = 500 }) {
    if (inCompletedList) {
      return {
        delay: 0,
        duration: 0,
      }
    }
    return {
      delay: 0,
      duration: 1000,
      css: t => `
        opacity: ${t};
      `,
      easing: quadOut,
    }
  }
</script>

<div class="parent noborder">
  <div class="top" in:spin>
    <div class="noborder" in:fadein class:tippytop={!inCompletedList}>
      <h1>
        For {task.client}
        {#if !task.completed}
          <span class="priority">{"!".repeat(4 - task.priority)}</span>
        {/if}
      </h1>
      <p>{@html task.description}</p>
      {#if !task.completed}
        <input
          placeholder="completion message"
          on:input={() => {
            buttonError = ""
          }}
        />
      {:else if !inCompletedList}
        <span class="input-height" />
      {/if}
      <Button
        on:click
        on:click={complete}
        active={buttonActive}
        error={buttonError || task.completionNote}
      >
        Complete
      </Button>
    </div>
  </div>
  {#if !inCompletedList && !lastUncompletedTask}
    <div class="alt" in:fade />
  {/if}
</div>

<style lang="scss">
  .parent {
    position: relative;
    border: none;
    margin: 0;
    padding: 0;
  }

  .priority {
    padding: none;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
    position: absolute;
    box-sizing: unset;
    top: -0.25em;
    right: -0.25em;
    border: 2px solid rgba(var(--accent), 0.7);
    font-size: 1.25rem;
    border-radius: 0.5rem;
    border-bottom-left-radius: 0;
    // background-color: rgba(var(--background), 0.5);
    background-color: var(--thick-glass-color);
    animation: fadein 0.3s ease;
    animation-delay: 0.5s;
    animation-fill-mode: both;
    backdrop-filter: blur(0.5rem);
    -webkit-backdrop-filter: blur(0.5rem);
  }
  @keyframes fadein {
    from {
      transform: scale(0.5);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
  .alt {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: rotate(5deg) scale(1);
    background-color: none;
    opacity: 0.5;
  }
  .top {
    background-color: var(--thick-glass-color);
    z-index: 2;
  }

  .input-height {
    height: 0.7rem;
  }
</style>
