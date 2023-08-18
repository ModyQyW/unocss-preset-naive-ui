import { presetTheme } from 'unocss-preset-theme';
import type { Preset } from 'unocss';
import type { Theme } from 'unocss/preset-uno';
import { getTheme } from './utils';
import type { PresetNaiveUiUserOptions } from './types';

export function presetNaiveUi(userOptions: PresetNaiveUiUserOptions = {}): Preset<Theme> {
  const { prefix = '--un-preset-n', selectors } = userOptions;

  return presetTheme<Theme>({
    prefix,
    selectors,
    theme: {
      light: getTheme(userOptions, 'light'),
      dark: getTheme(userOptions, 'dark'),
    },
  });
}
