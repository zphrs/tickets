<script>
  import EditableTask from "../lib/Task/EditableTask.svelte"
  window.document.title = "Tickets | Client"
  import { fade } from "svelte/transition"
</script>

<div class="noborder" in:fade>
  <EditableTask on:submit />
</div>

<style>
  div {
    padding: 0;
  }
</style>
