<script lang="ts">
  import type TaskObject from "./Task"
  import Button from "../Button.svelte"
  import { createEventDispatcher } from "svelte"
  let buttonActive = true
  let buttonError = ""
  let titleElement: HTMLInputElement
  let descriptionElement: HTMLTextAreaElement
  let priorityElement: HTMLSelectElement
  const dispatch = createEventDispatcher()
  function clearError() {
    buttonError = ""
    titleElement.removeEventListener("input", clearError)
    descriptionElement.removeEventListener("input", clearError)
    priorityElement.removeEventListener("input", clearError)
  }
  function submit() {
    if (!titleElement.value) {
      titleElement.focus()
      buttonError = "Please enter a client name"
      // add event listener to remove error message
      titleElement.addEventListener("input", clearError)
    } else if (!descriptionElement.value) {
      descriptionElement.focus()
      buttonError = "Please enter a description"
      // add event listener to remove error message
      descriptionElement.addEventListener("input", clearError)
    } else if (priorityElement.value === "-1") {
      priorityElement.focus()
      buttonError = "Please select a priority"
      // add event listener to remove error message
      priorityElement.addEventListener("input", clearError)
    } else {
      dispatch("submit", {
        title: titleElement.value,
        description: descriptionElement.value,
        priority: parseInt(priorityElement.value),
      })
      titleElement.removeEventListener("input", clearError)
      descriptionElement.removeEventListener("input", clearError)
      priorityElement.removeEventListener("input", clearError)
    }
  }

  function setDataValue(e) {
    const target = e.target as HTMLElement
    e.target.setAttribute("data-value", e.target.value)
  }
</script>

<div>
  <h1><input placeholder="client name" bind:this={titleElement} /></h1>
  <p>
    <textarea placeholder="task description" bind:this={descriptionElement} />
  </p>
  <select data-value="-1" on:change={setDataValue} bind:this={priorityElement}>
    <option value="-1" default>select priority</option>
    <option value="0">Low</option>
    <option value="1">Medium</option>
    <option value="2">High</option>
  </select>
  <Button on:click on:click={submit} active={buttonActive} error={buttonError}
    >Submit</Button
  >
</div>

<style lang="scss">
  input,
  textarea,
  select {
    max-width: 100%;
    box-sizing: border-box;
    background-color: var(--glass-color);
    border: 2px solid var(--thick-glass-color);
    border-radius: 0.5rem;
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
  input {
    border-radius: 0;
    border: none;
    border-bottom: 2px solid var(--thick-glass-color);
  }
  select {
    appearance: none;
  }
  select[data-value="-1"] {
    color: var(--thick-glass-color);
  }
  textarea {
    width: 100%;
    resize: none;
    height: min(8em, 50vh);
    box-sizing: border-box;
    // custom scrollbar
    &::-webkit-scrollbar {
      width: 0.6rem;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--glass-color);
      border-radius: 0 0.4rem 0.4rem 0;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--thick-glass-color);
      border-radius: 0 0.4rem 0.4rem 0;
      &:hover {
        background-color: var(--accent-color);
      }
    }
  }
</style>
