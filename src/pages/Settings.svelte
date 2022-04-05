<script lang="ts">
  import Task from "../lib/Task/Task.svelte"
  import TaskObject from "../lib/Task/Task"
  import Button from "../lib/Button.svelte"
  import defaultColors from "../defaultColors.json"

  let task = new TaskObject(
    "Yourself",
    "You can set a custom accent color using the sliders below." +
      "You can set a custom accent color for light mode, dark mode, and device mode." +
      " Device mode will use your device's dark mode toggle while light or dark will override your device's toggle.",
    3
  )

  let lightDark: string
  let resetButtonMessage: string = ""
  let localSettings = JSON.parse(localStorage.getItem("colors"))
  $: lightDark = localSettings.selected

  $: switch (localSettings.selected) {
    case "light":
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
      break
    case "dark":
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
      break
    case "device":
      document.documentElement.classList.remove("light")
      document.documentElement.classList.remove("dark")
      break
  }

  task.complete("boring completion message")

  document.title = "Tickets | Settings"
  function hslToRgb(hsl: number[]) {
    const h = hsl[0] / 360
    const s = hsl[1] / 100
    const l = hsl[2] / 100
    let r, g, b
    if (s === 0) {
      r = g = b = l
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
  }

  function rgbToHsl(rgb: number[]) {
    const r = rgb[0] / 255
    const g = rgb[1] / 255
    const b = rgb[2] / 255
    const min = Math.min(r, g, b)
    const max = Math.max(r, g, b)
    const delta = max - min
    let h, s, l
    if (max === min) {
      h = 0
    } else if (r === max) {
      h = (g - b) / delta
    } else if (g === max) {
      h = 2 + (b - r) / delta
    } else if (b === max) {
      h = 4 + (r - g) / delta
    }
    h = Math.min(h * 60, 360)
    if (h < 0) h += 360
    l = (min + max) / 2
    if (max === min) {
      s = 0
    } else if (l <= 0.5) {
      s = delta / (max + min)
    } else {
      s = delta / (2 - max - min)
    }
    return [Math.round(h), Math.round(s * 100), Math.round(l * 100)]
  }
  let hsl: { h: number; s: number; l: number }
  let h: number, s: number, l: number
  hsl = localSettings[localSettings.selected]
  h = hsl.h
  s = hsl.s
  l = hsl.l

  function onThemeChange(e: Event) {
    const target = e.target as HTMLSelectElement
    h = localSettings[target.value].h
    s = localSettings[target.value].s
    l = localSettings[target.value].l
    localSettings.selected = target.value
    setResetButtonMessage(localSettings)
  }

  $: {
    localSettings[localSettings.selected] = {
      accent: hslToRgb([h, s, l]).join(","),
      h: h,
      s: s,
      l: l,
    }
  }

  function deepEqual(object1, object2) {
    function isObject(object: any) {
      return object != null && typeof object === "object"
    }
    const keys1 = Object.keys(object1)
    const keys2 = Object.keys(object2)
    if (keys1.length !== keys2.length) {
      return false
    }
    for (const key of keys1) {
      const val1 = object1[key]
      const val2 = object2[key]
      const areObjects = isObject(val1) && isObject(val2)
      if (
        (areObjects && !deepEqual(val1, val2)) ||
        (!areObjects && val1 !== val2)
      ) {
        return false
      }
    }
    return true
  }

  function setResetButtonMessage(localSettings) {
    const tmp = deepEqual(
      localSettings[localSettings.selected],
      defaultColors[localSettings.selected]
    )
      ? `The ${localSettings.selected} mode accent color is the default.`
      : ""
    if (resetButtonMessage !== tmp) {
      resetButtonMessage = tmp
    }
  }
  setResetButtonMessage(localSettings)

  let timeout = null
  $: {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => setResetButtonMessage(localSettings), 300)
    localStorage.setItem("colors", JSON.stringify(localSettings))
  }

  let hueTarget: HTMLElement
  let satTarget: HTMLElement
  let ligTarget: HTMLElement
  let parent: HTMLElement

  // sets the thumb colors
  $: {
    if (hueTarget) {
      hueTarget.style.setProperty(
        "--thumb-color",
        `hsla(${h}deg, ${s}%, ${l}%)`
      )
      satTarget.style.setProperty(
        "--thumb-color",
        `hsla(${h}deg, ${s}%, ${l}%)`
      )
      ligTarget.style.setProperty(
        "--thumb-color",
        `hsla(${h}deg, ${s}%, ${l}%)`
      )
      document.documentElement.style.setProperty(
        "--accent",
        localSettings[localSettings.selected].accent
      )
    }
    const metaThemeColor = document.querySelector("meta[name=theme-color]")
    metaThemeColor.setAttribute(
      "content",
      `rgb(${hslToRgb([h, s, l]).join(",")})`
    )
  }

  function resetColors() {
    localSettings[localSettings.selected] = JSON.parse(
      JSON.stringify(defaultColors)
    )[localSettings.selected]
    h = localSettings[localSettings.selected].h
    s = localSettings[localSettings.selected].s
    l = localSettings[localSettings.selected].l
    setResetButtonMessage(localSettings)
  }

  // sets css variables
  // hue
  $: {
    if (hueTarget) {
      parent.style.setProperty("--hue", `${h}deg`)
    }
  }
  // saturation
  $: {
    if (satTarget) {
      parent.style.setProperty("--sat", `${s}%`)
    }
  }
  // lightness
  $: {
    if (ligTarget) {
      parent.style.setProperty("--lig", `${l}%`)
    }
  }
</script>

<div bind:this={parent} class="noborder">
  <div>
    <Task {task} inCompletedList={true} />
    <input
      class="rainbow color-picker"
      start="0"
      max="360"
      bind:value={h}
      bind:this={hueTarget}
      type="range"
      name="hue"
      id="0"
    />
    <input
      class="saturation color-picker"
      start="0"
      max="100"
      bind:value={s}
      bind:this={satTarget}
      type="range"
      name="sat"
      id="1"
    />
    <input
      class="lightness color-picker"
      start="0"
      max="100"
      bind:value={l}
      bind:this={ligTarget}
      type="range"
      name="lig"
      id="2"
    />
    <select bind:value={lightDark} on:input={onThemeChange}>
      <option value="device" default>Device</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
    <Button error={resetButtonMessage} on:click={resetColors}
      >Reset {lightDark} mode accent color</Button
    >
  </div>
  <!-- add a dark mode toggle switch -->
</div>

<style lang="scss">
  @mixin thumb {
    background-color: var(--accent-color);
    opacity: 0.8;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    top: -0.65rem;
    transition: transform 0.3s linear, opacity 0.3s linear;
    &:hover {
      opacity: 1;
      background-color: rgba(var(--accent), 1);
      transform: scale(1.1);
    }
    backdrop-filter: blur(1.5em);
    -webkit-backdrop-filter: blur(1.5em);
  }

  @mixin track {
    width: 100%;
    height: 0.25rem;
    cursor: pointer;
    border-radius: 0.25rem;
    border: none;
  }

  @mixin rainbow {
    background: linear-gradient(
      to right,
      hsl(0, 100%, 50%) 0%,
      hsl(45, 100%, 50%) 12.5%,
      hsl(90, 100%, 50%) 25%,
      hsl(135, 100%, 50%) 37.5%,
      hsl(180, 100%, 50%) 50%,
      hsl(225, 100%, 50%) 62.5%,
      hsl(270, 100%, 50%) 75%,
      hsl(315, 100%, 50%) 87.5%,
      hsl(360, 100%, 50%) 100%
    );
  }
  @mixin saturation {
    background: linear-gradient(
      to right,
      hsl(0, 0%, 50%) 0%,
      hsl(var(--hue), 100%, 50%) 100%
    );
  }

  @mixin lightness {
    background: linear-gradient(
      to right,
      hsl(var(--hue), var(--sat), 0%) 0%,
      hsl(var(--hue), var(--sat), 25%) 25%,
      hsl(var(--hue), var(--sat), 50%) 50%,
      hsl(var(--hue), var(--sat), 75%) 75%,
      hsl(var(--hue), var(--sat), 100%) 100%
    );
  }

  .color-picker[type="range"] {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    padding: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    --thumb-color: red;

    &::-webkit-slider-runnable-track {
      @include track;
    }

    &::-moz-range-track {
      @include track;
    }

    &::-ms-track {
      @include track;
    }

    &::-ms-fill-lower {
      background: transparent;
    }

    &::-ms-fill-upper {
      background: transparent;
    }
  }
  .rainbow {
    &::-webkit-slider-runnable-track {
      @include rainbow;
    }

    &::-moz-range-track {
      @include rainbow;
    }

    &::-ms-track {
      @include rainbow;
    }
  }

  .saturation {
    &::-webkit-slider-runnable-track {
      @include saturation;
    }

    &::-moz-range-track {
      @include saturation;
    }

    &::-ms-track {
      @include saturation;
    }
  }
  .lightness {
    &::-webkit-slider-runnable-track {
      @include lightness;
    }

    &::-moz-range-track {
      @include lightness;
    }

    &::-ms-track {
      @include lightness;
    }
  }
  // style the thumb
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    @include thumb;
  }

  ::-moz-range-thumb {
    -moz-appearance: none;
    @include thumb;
  }

  ::-ms-thumb {
    -ms-appearance: none;
    @include thumb;
  }

  :focus::-webkit-slider-thumb {
    opacity: 1;
    transform: scale(1.2);
  }
  :focus:hover::-webkit-slider-thumb {
    opacity: 1;
    transform: scale(1.3);
  }

  :focus::-moz-range-thumb {
    opacity: 1;
    transform: scale(1.2);
  }
  :focus:hover::-moz-range-thumb {
    opacity: 1;
    transform: scale(1.3);
  }

  :focus::-ms-thumb {
    opacity: 1;
    transform: scale(1.2);
  }
  :focus:hover::-ms-thumb {
    opacity: 1;
    transform: scale(1.3);
  }

  .noborder {
    overflow: hidden;
  }
</style>
