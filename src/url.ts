import { derived, writable } from "svelte/store"
// credit: https://svelte.dev/repl/5abaac000b164aa1aacc6051d5c4f584?version=3.46.6
export function createUrlStore(ssrUrl: string) {
  // Ideally a bundler constant so that it's tree-shakable
  if (typeof window === "undefined") {
    const { subscribe } = writable(ssrUrl)
    return { subscribe }
  }

  const href = writable(window.location.href)

  const originalPushState = history.pushState
  const originalReplaceState = history.replaceState

  const updateHref = () => href.set(window.location.href)

  history.pushState = function () {
    originalPushState.apply(this, arguments)
    updateHref()
  }

  history.replaceState = function () {
    originalReplaceState.apply(this, arguments)
    updateHref()
  }

  window.addEventListener("popstate", updateHref)
  window.addEventListener("hashchange", updateHref)

  return {
    subscribe: derived(href, $href => new URL($href)).subscribe,
  }
}

// If you're using in a pure SPA, you can return a store directly and share it everywhere
export default createUrlStore("/")
