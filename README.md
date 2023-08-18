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
