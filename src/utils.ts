import { TinyColor, type ColorInput } from '@ctrl/tinycolor';
import type { Theme } from 'unocss/preset-mini';
import type {
  PresetNaiveUiUserOptions,
  PresetNaiveUiThemeOptions,
  PresetNaiveUiThemeName,
} from './types';
import { defaults } from './defaults';

export const getOptionValue = <T = string | number | boolean | string[] | ColorInput>(
  userOptions: PresetNaiveUiUserOptions,
  themeName: PresetNaiveUiThemeName,
  key: keyof PresetNaiveUiThemeOptions,
) => (userOptions[themeName]?.[key] ?? userOptions[key] ?? defaults[themeName][key]) as T;

export const getCssValue = (namespace: string, name: string) =>
  namespace ? `var(--${namespace}-${name})` : `var(--${name})`;

export const getHexColor = (color: ColorInput) => new TinyColor(color).toHexString();

export const getThemeColorsWithCssVariables = (namespace: string, name: string) => {
  return {
    DEFAULT: getCssValue(namespace, `${name}-color`),
    hover: getCssValue(namespace, `${name}-color-hover`),
    pressed: getCssValue(namespace, `${name}-color-pressed`),
    suppl: getCssValue(namespace, `${name}-color-suppl`),
  };
};

export const getThemeColorsWithColor = (
  color: ColorInput,
  hoverColor: ColorInput,
  pressedColor: ColorInput,
  supplColor: ColorInput,
) => {
  return {
    DEFAULT: new TinyColor(color).toHexString(),
    hover: new TinyColor(hoverColor).toHexString(),
    pressed: new TinyColor(pressedColor).toHexString(),
    suppl: new TinyColor(supplColor).toHexString(),
  };
};

export const getTheme = (
  userOptions: PresetNaiveUiUserOptions,
  themeName: PresetNaiveUiThemeName,
): Theme => {
  const { preferCssVariables = true, namespace = '' } = userOptions;

  const primary = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'primary')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'primary'),
        getOptionValue(userOptions, themeName, 'primaryHover'),
        getOptionValue(userOptions, themeName, 'primaryPressed'),
        getOptionValue(userOptions, themeName, 'primarySuppl'),
      );
  const info = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'info')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'info'),
        getOptionValue(userOptions, themeName, 'infoHover'),
        getOptionValue(userOptions, themeName, 'infoPressed'),
        getOptionValue(userOptions, themeName, 'infoSuppl'),
      );
  const success = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'success')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'success'),
        getOptionValue(userOptions, themeName, 'successHover'),
        getOptionValue(userOptions, themeName, 'successPressed'),
        getOptionValue(userOptions, themeName, 'successSuppl'),
      );
  const warning = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'warning')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'warning'),
        getOptionValue(userOptions, themeName, 'warningHover'),
        getOptionValue(userOptions, themeName, 'warningPressed'),
        getOptionValue(userOptions, themeName, 'warningSuppl'),
      );
  const error = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'error')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'error'),
        getOptionValue(userOptions, themeName, 'errorHover'),
        getOptionValue(userOptions, themeName, 'errorPressed'),
        getOptionValue(userOptions, themeName, 'errorSuppl'),
      );
  const danger = preferCssVariables
    ? getThemeColorsWithCssVariables(namespace, 'danger')
    : getThemeColorsWithColor(
        getOptionValue(userOptions, themeName, 'danger'),
        getOptionValue(userOptions, themeName, 'dangerHover'),
        getOptionValue(userOptions, themeName, 'dangerPressed'),
        getOptionValue(userOptions, themeName, 'dangerSuppl'),
      );

  return {
    colors: {
      primary,
      info,
      success,
      warning,
      error,
      danger,
    },
  };
};
