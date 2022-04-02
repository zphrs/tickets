<script lang="ts">
  import type TaskObject from "./Task"
  import Button from "../Button.svelte"
  export let task: TaskObject
  let buttonActive = true
  let buttonError = ""
  function complete(e) {
    const target = e.target as HTMLElement
    const input = target.parentElement.querySelector(
      "input"
    ) as HTMLInputElement
    if (input.value) {
      task.complete(input.value)
    } else {
      buttonError = "Please enter a completion message"
    }
    input.value = ""
    task = task
  }
</script>

<div>
  <h1>{task.client}</h1>
  <p>{task.description}</p>
  {#if !task.completed}
    <input
      placeholder="completion message"
      on:input={() => {
        buttonError = ""
      }}
    />
  {/if}
  <Button
    on:click
    on:click={complete}
    active={buttonActive}
    error={buttonError || task.completionNote}>Complete</Button
  >
</div>

<style lang="scss">
  input {
    background-color: var(--glass-color);
    border: none;
    border-bottom: 2px solid var(--thick-glass-color);
    font: inherit;
    color: var(--accent-color);
    outline: none;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    &:focus {
      border-color: var(--accent-color);
    }
    // style placeholder
    &::-webkit-input-placeholder {
      color: var(--thick-glass-color);
    }
  }
</style>
