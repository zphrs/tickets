<script lang="ts">
  import TaskObject from "./Task"
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
        task: new TaskObject(
          titleElement.value,
          descriptionElement.value,
          parseInt(priorityElement.value)
        ),
      })
      titleElement.removeEventListener("input", clearError)
      descriptionElement.removeEventListener("input", clearError)
      priorityElement.removeEventListener("input", clearError)
      titleElement.value = ""
      descriptionElement.value = ""
      priorityElement.value = "-1"
    }
  }

  function setDataValue(e) {
    const target = e.target as HTMLElement
    e.target.setAttribute("data-value", e.target.value)
  }
</script>

<div>
  <h1>For <input placeholder="client name" bind:this={titleElement} /></h1>
  <p>
    <textarea placeholder="task description" bind:this={descriptionElement} />
  </p>
  <select data-value="-1" on:change={setDataValue} bind:this={priorityElement}>
    <option disabled value="-1" selected>select priority</option>
    <option value="3">!</option>
    <option value="2">!!</option>
    <option value="1">!!!</option>
  </select>
  <Button on:click on:click={submit} active={buttonActive} error={buttonError}
    >Submit</Button
  >
</div>

<style>
  h1 {
    display: flex;
    width: 100%;
    align-items: baseline;
  }
  h1 > input {
    flex: 1;
    width: 100%;
    margin-left: 0.75rem;
    max-width: 20rem;
  }
</style>
