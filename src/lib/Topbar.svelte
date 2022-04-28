<script lang="ts">
  import { onMount } from "svelte"
  let parent: HTMLElement
  let current: HTMLElement
  let prev: HTMLElement
  function goTo(event: MouseEvent) {
    const target = event.target as HTMLLinkElement
    prev = current
    current = target
    const selectedIndex = Number.parseInt(target.getAttribute("data-index"))
    const prevIndex = Number.parseInt(prev.getAttribute("data-index"))
    const parentStyle = parent.style
    const children = parent.children
    history.replaceState({}, null, target.href)
    if (prevIndex < selectedIndex) {
      parentStyle.setProperty(
        "--underline-start",
        prevIndex / children.length + ""
      )
      parentStyle.setProperty(
        "--underline-width",
        (selectedIndex - prevIndex + 1) / children.length + ""
      )
    } else {
      parentStyle.setProperty(
        "--underline-start",
        selectedIndex / children.length + ""
      )
      parentStyle.setProperty(
        "--underline-width",
        (prevIndex - selectedIndex + 1) / children.length + ""
      )
    }
    const afterTransitionDuration = window
      .getComputedStyle(parent, ":after")
      .getPropertyValue("transition-duration")
    console.log(afterTransitionDuration)
    setTimeout(() => {
      parentStyle.setProperty(
        "--underline-start",
        selectedIndex / children.length + ""
      )
      parentStyle.setProperty("--underline-width", 1 / children.length + "")
    }, Number.parseFloat(afterTransitionDuration) * 1000)
  }

  export let tabs: Array<any>
  function getLink(tab) {
    return tab.href ?? "#/" + tab.title.replace(/\s/g, "-").toLowerCase()
  }

  onMount(() => {
    for (let i = 0; i < tabs.length; i++) {
      if (tabs[i].active) {
        current = parent.children[i] as HTMLElement
        prev = parent.children[0] as HTMLElement
        const children = parent.children
        const parentStyle = parent.style
        const selectedIndex = i
        parentStyle.setProperty(
          "--underline-start",
          selectedIndex / children.length + ""
        )
        parentStyle.setProperty("--underline-width", 1 / children.length + "")
        break
      }
    }

    // add listener to bookmark changes

    window.addEventListener("hashchange", () => {
      for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].active) {
          if (!prev) {
            current = parent.children[i] as HTMLElement
            prev = parent.children[0] as HTMLElement
            const children = parent.children
            const parentStyle = parent.style
            const selectedIndex = i
            parentStyle.setProperty(
              "--underline-start",
              selectedIndex / children.length + ""
            )
            parentStyle.setProperty(
              "--underline-width",
              1 / children.length + ""
            )
            break
          }
          goTo({
            target: parent.children[i] as HTMLElement,
          } as unknown as MouseEvent)
          break
        }
      }
    })
  })
</script>

<nav bind:this={parent} class="choose-dash">
  {#each tabs as tab, i}
    <a
      href={getLink(tab)}
      data-index={i}
      on:click={goTo}
      class="clear-btn"
      class:active={tab.active}
    >
      {tab.title}
    </a>
  {/each}
</nav>

<style scoped lang="scss">
  .choose-dash {
    display: flex;
    height: 3em;
  }
  .choose-dash {
    a {
      width: 100%;
      border-radius: 0;
      outline: none;
      color: inherit;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: rgba(var(--text), 0.7);
      &:hover {
        background-color: var(--glass-color);
        color: var(--text-color);
      }
      &:focus {
        background-color: var(--thick-glass-color);
      }
      &:first-child {
        border-top-left-radius: 0.5rem;
      }
      &:last-child {
        border-top-right-radius: 0.5rem;
      }
      border-bottom: 1px solid var(--thick-glass-color);
    }
    --underline-start: 0;
    --underline-end: 0;
  }
  .choose-dash > a.active {
    transition-duration: 0s;
    color: var(--text-color);
  }

  .choose-dash::after {
    content: "";
    display: block;
    height: 2px;
    background-color: var(--accent-color);
    left: 0;
    width: 100%;
    bottom: 0;
    transform-origin: 0;
    transform: translateX(calc(var(--underline-start) * 100%))
      scaleX(var(--underline-width));
    position: absolute;
    transition-property: transform, left;
    transition-duration: 0.15s;
    transition-timing-function: ease-out;
  }

  @media screen and (max-width: 600px) {
    .choose-dash {
      height: 3.5rem;
      a {
        border: none;
        border-radius: 0;
        &:first-child {
          border-top-left-radius: 0;
        }
        &:last-child {
          border-top-right-radius: 0;
        }
        border-top: 1px solid var(--thick-glass-color);
      }
    }
    .choose-dash::after {
      content: "";
      display: block;
      height: 2px;
      background-color: var(--accent-color);
      left: 0;
      width: 100%;
      top: 0;
      transform-origin: 0;
      transform: translateX(calc(var(--underline-start) * 100%))
        scaleX(var(--underline-width));
      position: absolute;
      transition-property: transform, left;
      transition-duration: 0.15s;
      transition-timing-function: ease-out;
    }
  }
</style>
