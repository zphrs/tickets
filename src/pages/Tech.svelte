<script lang="ts">
  import Task from "../lib/Task/Task.svelte"
  import type TaskObject from "../lib/Task/Task"
  import { DLList } from "../lib/DLList"
  import { fade } from "svelte/transition"
  document.title = "Tickets | Technician"

  export let completedTasks: DLList<TaskObject> = new DLList()
  export let topTask: TaskObject | null = null
  export let lastUncompletedTask: boolean = false
  let completedTasksArray = []
  $: {
    completedTasksArray = [...completedTasks]
  }
  completedTasks = completedTasks

  function appear(target, { delay = 2000, duration = 1000 }) {
    return {
      delay: 10000,
      duration,
      css: t => `
        opacity: ${t},
      `,
    }
  }
</script>

<div class="noborder" in:fade>
  {#if topTask}
    {#key topTask}
      <Task
        on:taskcomplete
        on:taskcomplete={e => {
          completedTasks.insert(0, e.detail.task)
          console.log(e.detail.task)
          completedTasks = completedTasks
          topTask = null
        }}
        task={topTask}
        {lastUncompletedTask}
      />
    {/key}
  {:else}
    <div in:appear>
      <h2>You're all caught up!</h2>
      <p>
        Tickets will display here once added. You can add some more tickets by
        going to <a href="#/client">the client page</a>.
      </p>
    </div>
  {/if}
  {#if completedTasksArray.length > 0}
    <br />
    <details open>
      <br />
      <summary> Completed </summary>
      <br />
      {#each completedTasksArray as task}
        {#key task}
          <Task
            {task}
            inCompletedList={true}
            firstInCompletedList={completedTasksArray[0] === task}
          />
        {/key}
        <br />
      {/each}
    </details>
  {/if}
</div>

<style>
  summary {
    z-index: 5;
    font-weight: bold;
    font-size: 1.5em;
  }
  p {
    white-space: normal;
  }
</style>
