<script lang="ts">
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

  function rgbToHsb(rgb: number[]) {
    const r = rgb[0] / 255
    const g = rgb[1] / 255
    const b = rgb[2] / 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h,
      s,
      v = max
    const d = max - min
    s = max === 0 ? 0 : d / max
    if (max === min) {
      h = 0
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }
    return [h * 360, s * 100, v * 100]
  }
  let h =
    rgbToHsb(
      document.documentElement.style
        .getPropertyValue("--accent")
        .split(",")
        .map(e => Number.parseInt(e))
    )[0] || 238
  let target: HTMLElement
  $: {
    if (target) {
      target.style.setProperty("--thumb-color", `hsla(${h}, 53%, 48%)`)
      document.documentElement.style.setProperty(
        "--accent",
        hslToRgb([h, 53, 48]).join(",")
      )
    }
    const metaThemeColor = document.querySelector("meta[name=theme-color]")
    metaThemeColor.setAttribute(
      "content",
      `rgb(${hslToRgb([h, 53, 48]).join(",")})`
    )
  }
</script>

<div>
  <input
    start="0"
    max="360"
    bind:value={h}
    bind:this={target}
    type="range"
    name="asdf"
    id="0"
  />
</div>

<style lang="scss">
  @mixin thumb {
    background-color: var(--thumb-color);
    border-radius: 50%;
    border: none;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    position: relative;
    top: -0.4rem;
  }

  @mixin track {
    width: 100%;
    height: 0.25rem;
    cursor: pointer;
    background: linear-gradient(
      to right,
      hsl(0, 53%, 48%) 0%,
      hsl(45, 53%, 48%) 12.5%,
      hsl(90, 53%, 48%) 25%,
      hsl(135, 53%, 48%) 37.5%,
      hsl(180, 53%, 48%) 50%,
      hsl(225, 53%, 48%) 62.5%,
      hsl(270, 53%, 48%) 75%,
      hsl(315, 53%, 48%) 87.5%,
      hsl(360, 53%, 48%) 100%
    );
    border-radius: 0.25rem;
    border: none;
  }

  [type="range"] {
    -webkit-appearance: none;
    background: transparent;
    border: none;
    --thumb-color: red;
    // style the thumb
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      @include thumb;
    }

    &::-moz-range-thumb {
      -moz-appearance: none;
      @include thumb;
    }

    &::-ms-thumb {
      -ms-appearance: none;
      @include thumb;
    }

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
</style>
