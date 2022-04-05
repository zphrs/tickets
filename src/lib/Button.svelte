<script lang="ts">
  export let active = true
  export let error = ""
  let button = null
  const blur = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const duration =
      Number.parseFloat(
        getComputedStyle(target).transitionDuration.replace("s", "")
      ) * 1000
    target.style.animationDuration = `${duration * 2}ms`
    target.style.setProperty("--transition-delay", `${duration * 2}ms`)
  }
  $: button?.style?.setProperty("--error", `"${error}"`)
  $: active = !error
</script>

<button
  tabindex="0"
  bind:this={button}
  class:active={!active}
  on:click
  on:click={e => blur(e)}
  disabled={!active}><slot /></button
>

<style lang="scss">
  button {
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: 2px solid var(--thick-glass-color);
    outline: none;
    color: rgba(var(--text), 0.7);
    box-sizing: border-box;
    &:focus {
      border-color: var(--accent-color);
    }
    &:hover {
      background-color: var(--glass-color);
      color: var(--text-color);
    }

    &.active {
      cursor: default;
      border-color: var(--accent-color);
      &::after {
        animation-name: slideleft;
        animation-fill-mode: forwards;
      }
    }

    &::after {
      animation-fill-mode: forwards;
      animation-duration: inherit;
      animation-name: slideout;
    }

    position: relative;
    overflow: hidden;

    &::after {
      content: var(--error);
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--accent-color);
      transform-origin: bottom left;
      transform: scaleX(0);
      color: var(--text-color);
    }
  }
  @keyframes slideleft {
    0% {
      transform: scaleX(0);
      transform-origin: bottom left;
    }
    99% {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    100% {
      transform: scaleX(1);
      transform-origin: top right;
    }
  }
  @keyframes slideout {
    0% {
      transform: scaleX(1);
      transform-origin: top right;
    }
    100% {
      transform: scaleX(0);
      transform-origin: top right;
    }
  }
</style>
