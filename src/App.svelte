<script lang="ts">
  import Client from "./pages/Client.svelte"
  import Tech from "./pages/Tech.svelte"
  import Home from "./pages/Home.svelte"
  import url from "./url"
  import Topbar from "./lib/Topbar.svelte"
  import MinHeap from "./MinHeap/MinHeap"
  import TaskObject from "./lib/Task/Task"
  import { DLList } from "./lib/DLList"
  import { tick } from "svelte"
  import Settings from "./pages/Settings.svelte"
  let urlHash: string
  let tickets: MinHeap<TaskObject>
  let completed: DLList<TaskObject>
  $: {
    urlHash = new URL($url).hash
    window.location.hash = urlHash || "#/"
  }

  $: {
    function loadTickets() {
      // convert tickets to json
      // convert json to minheap
      if (localStorage.getItem("tickets")) {
        const parsed = JSON.parse(localStorage.getItem("tickets") || "[]")
        tickets = new MinHeap<TaskObject>(
          parsed.map((task: any) => TaskObject.fromJSON(task))
        )
      } else {
        tickets = new MinHeap<TaskObject>()
        tickets.add(
          new TaskObject(
            "Computer Science",
            "The Heaps lab (aka this website) including the client page, technician page, and home page",
            TaskObject.LOW_PRIORITY
          )
        )
        tickets.add(
          new TaskObject(
            "Yourself",
            "Try other <a href='#/settings'>colors</a>!",
            TaskObject.HIGH_PRIORITY
          )
        )
        tickets.add(
          new TaskObject(
            "Yourself",
            "Try resizing the window!",
            TaskObject.HIGH_PRIORITY
          )
        )
      }
    }

    if (tickets === undefined) {
      loadTickets()
    }
    console.log(tickets)
    localStorage.setItem("tickets", JSON.stringify(tickets.toArray()))
  }

  $: {
    if (completed === undefined) {
      loadCompleted()
    }
    localStorage.setItem("completed", JSON.stringify([...completed]))

    function loadCompleted() {
      if (localStorage.getItem("completed")) {
        const parsed = JSON.parse(localStorage.getItem("completed") || "[]")
        completed = new DLList(
          parsed.map((task: any) => TaskObject.fromJSON(task))
        )
      } else {
        completed = new DLList()
      }
    }
  }
  const metaThemeColor = document.querySelector("meta[name=theme-color]")
  $: metaThemeColor.setAttribute("content", "rgb(111, 117, 255)")

  function oncomplete() {
    tickets.poll()
    tickets = tickets
    completed = completed
  }
</script>

<Topbar
  tabs={[
    {
      href: "#/",
      active: urlHash === "#/",
      title: "home",
    },
    {
      href: "#/client",
      active: urlHash === "#/client",
      title: "client",
    },
    {
      href: "#/tech",
      active: urlHash === "#/tech",
      title: "technician",
    },
    {
      href: "#/settings",
      active: urlHash === "#/settings",
      title: "settings",
    },
  ]}
/>
<main>
  {#if urlHash === "" || urlHash === "#/"}
    <Home />
  {:else if urlHash === "#/client"}
    <Client
      on:submit={e => {
        tickets.add(e.detail.task)
        tickets = tickets
      }}
    />
  {:else if urlHash === "#/tech"}
    <Tech
      topTask={tickets.peek()}
      on:taskcomplete={oncomplete}
      lastUncompletedTask={tickets.size() < 2}
      completedTasks={completed}
    />
  {:else if urlHash === "#/settings"}
    <Settings />
  {:else}
    <h1>404 - try one of the links above</h1>
  {/if}
</main>

<style lang="scss">
  :root {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  :global {
    * {
      -webkit-tap-highlight-color: transparent;
    }
    main div {
      display: flex;
      flex-direction: column;
      align-items: left;
      text-align: left;
      background-color: var(--glass-color);
      border: 2px solid rgba(var(--accent), 0.5);
      box-sizing: border-box;
      padding: 0.5rem;
      border-radius: 0.5rem;
    }

    .noborder {
      background-color: transparent;
      border: none;
    }
    body {
      margin: 0;
      margin-top: 7vh;
      background-color: var(--background-color);
      border-radius: 0.5rem;
      max-width: 600px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-content: stretch;
    }
    @media screen and (max-width: 600px) {
      body {
        margin: 0;
        border-radius: 0;
        height: 100%;
      }
      html {
        padding: 0;
        box-sizing: border-box;
      }
      main {
        background: var(--background-color);
      }
    }

    html {
      display: flex;
      flex-direction: column;
      align-items: center;
      --text: 0, 0, 0;
      --background: 200, 200, 255;
      --accent: 58, 62, 187;
      @media (prefers-color-scheme: dark) {
        --text: 255, 255, 255;
        --background: 0, 0, 0;
      }
      --text-color: rgb(var(--text));
      --background-color: rgb(var(--background));
      --accent-color: rgb(var(--accent));
      --glass-color: rgba(var(--accent), 0.15);
      --thick-glass-color: rgba(var(--accent), 0.3);

      background: var(--accent-color);
      color: var(--text-color);
      height: 100%;
    }
    body {
      touch-action: pan-x pan-y;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin: 0;
    }

    a {
      color: rgba(var(--text), 0.8);
      &:hover {
        color: var(--text-color);
      }
    }
    // custom text select background
    *::selection {
      background: var(--accent-color);
      color: var(--text-color);
    }

    input,
    textarea,
    select {
      max-width: 100%;
      box-sizing: border-box;
      background-color: rgba(var(--background), 0.8);
      border: 2px solid var(--thick-glass-color);
      border-radius: 0.5rem;
      font: inherit;
      color: var(--text-color);
      outline: none;
      padding: 0.5rem 1rem;
      margin-bottom: 0.5rem;
      &:focus {
        border-color: var(--accent-color);
      }
      // style placeholder
      &::-webkit-input-placeholder {
        color: rgba(var(--accent), 0.5);
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
      color: rgba(var(--accent), 0.5);
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
    p {
      white-space: pre-wrap;
    }
  }
  main {
    color: var(--text-color);
  }
</style>
