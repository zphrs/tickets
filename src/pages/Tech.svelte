<script>
  import Task from "../lib/Task/Task.svelte"
  import TaskObject from "../lib/Task/Task"
</script>

<Task
  task={new TaskObject("name", "longer description", TaskObject.LOW_PRIORITY)}
/>
