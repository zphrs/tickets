<script lang="ts">
  import Client from "./pages/Client.svelte"
  import Tech from "./pages/Tech.svelte"
  import Home from "./pages/Home.svelte"
  import url from "./url"
  import Topbar from "./lib/Topbar.svelte"
  let urlHash: string
  $: {
    urlHash = new URL($url).hash
    window.location.hash = urlHash || "#/"
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
  ]}
/>
<main>
  {#if urlHash === "#/client"}
    <Client />
  {:else if urlHash === "#/tech"}
    <Tech />
  {:else if urlHash === "" || urlHash === "#/"}
    <Home />
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
    body {
      margin: 0;
      background-color: var(--background-color);
    }

    html {
      --text: 0, 0, 0;
      --background: 255, 255, 255;
      --accent: 80, 182, 132;
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
  }
  main {
    color: var(--text-color);
  }
</style>
