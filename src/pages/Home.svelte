<script>
  window.document.title = "Tickets | Home"
  import { fade } from "svelte/transition"
  import { onMount } from "svelte"
  let render = false
  onMount(() => {
    render = true
  })
</script>

{#if render}
  <div class="noborder" in:fade>
    <h1>Heaps Lab</h1>
    <h2>An in-browser heap-based ticketing system.</h2>

    <table>
      <tr>
        <th><a href="/#/client">client</a> view</th>
        <th> <a href="#/tech">technician</a> view</th>
      </tr>
      <tr>
        <td>
          For entering new tickets with the name of the client, the description
          of the task, and the priority (low, medium, high).
        </td>
        <td>
          For viewing the topmost ticket in the queue and marking it as
          completed. You can also view completed tickets including the client
          name, description, and completion note.
        </td>
      </tr>
    </table>
  </div>
{/if}

<style lang="scss">
  table {
    border-collapse: collapse;
    margin: 1rem;
    box-sizing: border-box;
  }
  tr {
    border-radius: 0.5rem;
    overflow: hidden;
  }
  th,
  td {
    padding: 0.5rem;
    background: var(--glass-color);
    border-right: 1px solid var(--thick-glass-color);
    &:last-child {
      border-right: none;
    }
  }
  tr:first-child {
    & > :last-child {
      border-top-right-radius: 0.5rem;
    }
    & > :first-child {
      border-top-left-radius: 0.5rem;
    }
  }
  tr:last-child {
    & > :last-child {
      border-bottom-right-radius: 0.5rem;
    }
    & > :first-child {
      border-bottom-left-radius: 0.5rem;
    }
  }
  td {
    text-align: left;
  }
  th {
    background: var(--thick-glass-color);
  }
</style>
