# unocss-preset-naive-ui

**WIP**

This preset will help you make [naive-ui](https://www.naiveui.com/) and [unocss](https://unocss.dev/) work together. Based on [unocss-preset-theme](https://github.com/Dunqing/unocss-preset-theme).

## Installation

```bash
npm i -D unocss-preset-naive-ui
```

## Usages

We use `uno.config.ts` as an example below.

```typescript
import { defineConfig, presetUno } from 'unocss';
import { presetNaiveUi } from 'unocss-preset-naive-ui';

export default defineConfig({
  presets: [
    presetUno(),
     // place after other presets, since it overrides some values by default
    presetNaiveUi({ ... }),
  ],
});
```

We recommend you to use [tailwind compat reset](https://unocss.dev/guide/style-reset#tailwind-compat) if you are facing style conflicts.

## Options

You can a options object to the preset.

```typescript
import { defineConfig, presetUno } from 'unocss';
import { presetNaiveUi } from 'unocss-preset-naive-ui';

export default defineConfig({
  presets: [
    presetUno(),
    presetNaiveUi({
      // top-level options
      prefix: '--un-preset-n',
      preferCssVariables: true,
      namespace: '',

      // theme options
      primary: '#18a058',
      light: {
        primary: '#18a058',
      },
      dark: {
        primary: '#63e2b7',
      },
    }),
  ],
});
```

### prefix

_Top-level Option_

This option is extended from [unocss-preset-theme](https://github.com/Dunqing/unocss-preset-theme). Defaults to `--un-preset-n`.

### selectors

_Top-level Option_

This option is extended from [unocss-preset-theme](https://github.com/Dunqing/unocss-preset-theme) and use its default value.

You may need to update this field when you are developing with `uni-app`, `taro`, etc.

### preferCssVariables

_Top-level Option_

Prefer existed css variables or not. Defaults to `true`.

If true, use `naive-ui` css variables and you have to follow `naive-ui` design standards.

If false, use generated variables and you can use more variables away from `naive-ui` design standards.

You may need to set this field to `false` when you are developing with `uni-app`, `taro`, etc.

### namespace

_Top-level Option_

The namespace used to find css variables. Used when preferCssVariables is true. Defaults to ``.

### breakpoints

_Top-level Option_

Breakpoints. Defaults to `{ xs: '0px', s: '640px', m: '1024px', l: '1280px', xl: '1536px', xxl: '1920px' }`.

### primary

Base primary color. Used when `preferCssVariables` is false.

By default `#18a058` for light theme and `#63e2b7` for dark theme.

### primaryHover

Hover primary color. Used when `preferCssVariables` is false.

By default `#36ad6a` for light theme and `#7fe7c4` for dark theme.

### primaryPressed

Pressed primary color. Used when `preferCssVariables` is false.

By default `#0c7a43` for light theme and `#5acea7` for dark theme.

### primarySuppl

Supplement(?) primary color. Used when `preferCssVariables` is false.

By default `#36ad6a` for light theme and `rgb(42, 148, 125)` for dark theme.

### info

Base info color. Used when `preferCssVariables` is false.

By default `#2080f0` for light theme and `#70c0e8` for dark theme.

### infoHover

Hover info color. Used when `preferCssVariables` is false.

By default `#4098fc` for light theme and `#8acbec` for dark theme.

### infoPressed

Pressed info color. Used when `preferCssVariables` is false.

By default `#1060c9` for light theme and `#66afd3` for dark theme.

### infoSuppl

Supplement(?) info color. Used when `preferCssVariables` is false.

By default `#4098fc` for light theme and `rgb(56, 137, 197)` for dark theme.

### success

Base success color. Used when `preferCssVariables` is false.

By default `#18a058` for light theme and `#63e2b7` for dark theme.

### successHover

Hover success color. Used when `preferCssVariables` is false.

By default `#36ad6a` for light theme and `#7fe7c4` for dark theme.

### successPressed

Pressed success color. Used when `preferCssVariables` is false.

By default `#0c7a43` for light theme and `#5acea7` for dark theme.

### successSuppl

Supplement(?) success color. Used when `preferCssVariables` is false.

By default `#36ad6a` for light theme and `rgb(42, 148, 125)` for dark theme.

### warning

Base warning color. Used when `preferCssVariables` is false.

By default `#f0a020` for light theme and `#f2c97d` for dark theme.

### warningHover

Hover warning color. Used when `preferCssVariables` is false.

By default `#fcb040` for light theme and `#f5d599` for dark theme.

### warningPressed

Pressed warning color. Used when `preferCssVariables` is false.

By default `#c97c10` for light theme and `#e6c260` for dark theme.

### warningSuppl

Supplement(?) warning color. Used when `preferCssVariables` is false.

By default `#fcb040` for light theme and `rgb(240, 138, 0)` for dark theme.

### error

Base error color. Used when `preferCssVariables` is false.

By default `#d03050` for light theme and `#e88080` for dark theme.

### errorHover

Hover error color. Used when `preferCssVariables` is false.

By default `#de576d` for light theme and `#e98b8b` for dark theme.

### errorPressed

Pressed error color. Used when `preferCssVariables` is false.

By default `#ab1f3f` for light theme and `#e57272` for dark theme.

### errorSuppl

Supplement(?) error color. Used when `preferCssVariables` is false.

By default `#de576d` for light theme and `rgb(208, 58, 82)` for dark theme.

### danger

Base danger color. Used when `preferCssVariables` is false.

By default `#d03050` for light theme and `#e88080` for dark theme.

### dangerHover

Hover danger color. Used when `preferCssVariables` is false.

By default `#de576d` for light theme and `#e98b8b` for dark theme.

### dangerPressed

Pressed danger color. Used when `preferCssVariables` is false.

By default `#ab1f3f` for light theme and `#e57272` for dark theme.

### dangerSuppl

Supplement(?) danger color. Used when `preferCssVariables` is false.

By default `#de576d` for light theme and `rgb(208, 58, 82)` for dark theme.
