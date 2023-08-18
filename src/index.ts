import { presetTheme } from 'unocss-preset-theme';
import type { Preset } from 'unocss';
import type { Theme } from 'unocss/preset-uno';
import { getTheme } from './utils';
import type { PresetNaiveUiUserOptions } from './types';

export function presetNaiveUi(userOptions: PresetNaiveUiUserOptions = {}): Preset<Theme> {
  const {
    prefix = '--un-preset-n',
    selectors,
    breakpoints = { xs: '0px', s: '640px', m: '1024px', l: '1280px', xl: '1536px', xxl: '1920px' },
  } = userOptions;

  const preset = presetTheme<Theme>({
    prefix,
    selectors,
    theme: {
      light: getTheme(userOptions, 'light'),
      dark: getTheme(userOptions, 'dark'),
    },
  });
  const theme: Preset<Theme> = {
    ...preset,
    theme: {
      ...preset.theme,
      breakpoints,
    },
  };
  return theme;
}
