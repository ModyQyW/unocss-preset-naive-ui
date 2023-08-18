import { type PresetThemeOptions } from 'unocss-preset-theme';
import { type ColorInput } from '@ctrl/tinycolor';
import type { Theme } from 'unocss/preset-mini';

export interface PresetNaiveUiUserThemeOptions {
  /**
   * Base primary color. Used when `preferCssVariables` is false.
   *
   * By default `#18a058` for light theme and `#63e2b7` for dark theme.
   */
  primary?: ColorInput;
  /**
   * Hover primary color. Used when `preferCssVariables` is false.
   *
   * By default `#36ad6a` for light theme and `#7fe7c4` for dark theme.
   */
  primaryHover?: ColorInput;
  /**
   * Pressed primary color. Used when `preferCssVariables` is false.
   *
   * By default `#0c7a43` for light theme and `#5acea7` for dark theme.
   */
  primaryPressed?: ColorInput;
  /**
   * Supplement(?) primary color. Used when `preferCssVariables` is false.
   *
   * By default `#36ad6a` for light theme and `rgb(42, 148, 125)` for dark theme.
   */
  primarySuppl?: ColorInput;
  /**
   * Base info color. Used when `preferCssVariables` is false.
   *
   * By default `#2080f0` for light theme and `#70c0e8` for dark theme.
   */
  info?: ColorInput;
  /**
   * Hover info color. Used when `preferCssVariables` is false.
   *
   * By default `#4098fc` for light theme and `#8acbec` for dark theme.
   */
  infoHover?: ColorInput;
  /**
   * Pressed info color. Used when `preferCssVariables` is false.
   *
   * By default `#1060c9` for light theme and `#66afd3` for dark theme.
   */
  infoPressed?: ColorInput;
  /**
   * Supplement(?) info color. Used when `preferCssVariables` is false.
   *
   * By default `#4098fc` for light theme and `rgb(56, 137, 197)` for dark theme.
   */
  infoSuppl?: ColorInput;
  /**
   * Base success color. Used when `preferCssVariables` is false.
   *
   * By default `#18a058` for light theme and `#63e2b7` for dark theme.
   */
  success?: ColorInput;
  /**
   * Hover success color. Used when `preferCssVariables` is false.
   *
   * By default `#36ad6a` for light theme and `#7fe7c4` for dark theme.
   */
  successHover?: ColorInput;
  /**
   * Pressed success color. Used when `preferCssVariables` is false.
   *
   * By default `#0c7a43` for light theme and `#5acea7` for dark theme.
   */
  successPressed?: ColorInput;
  /**
   * Supplement(?) success color. Used when `preferCssVariables` is false.
   *
   * By default `#36ad6a` for light theme and `rgb(42, 148, 125)` for dark theme.
   */
  successSuppl?: ColorInput;
  /**
   * Base warning color. Used when `preferCssVariables` is false.
   *
   * By default `#f0a020` for light theme and `#f2c97d` for dark theme.
   */
  warning?: ColorInput;
  /**
   * Hover warning color. Used when `preferCssVariables` is false.
   *
   * By default `#fcb040` for light theme and `#f5d599` for dark theme.
   */
  warningHover?: ColorInput;
  /**
   * Pressed warning color. Used when `preferCssVariables` is false.
   *
   * By default `#c97c10` for light theme and `#e6c260` for dark theme.
   */
  warningPressed?: ColorInput;
  /**
   * Supplement(?) warning color. Used when `preferCssVariables` is false.
   *
   * By default `#fcb040` for light theme and `rgb(240, 138, 0)` for dark theme.
   */
  warningSuppl?: ColorInput;
  /**
   * Base error color. Used when `preferCssVariables` is false.
   *
   * By default `#d03050` for light theme and `#e88080` for dark theme.
   */
  error?: ColorInput;
  /**
   * Hover error color. Used when `preferCssVariables` is false.
   *
   * By default `#de576d` for light theme and `#e98b8b` for dark theme.
   */
  errorHover?: ColorInput;
  /**
   * Pressed error color. Used when `preferCssVariables` is false.
   *
   * By default `#ab1f3f` for light theme and `#e57272` for dark theme.
   */
  errorPressed?: ColorInput;
  /**
   * Supplement(?) error color. Used when `preferCssVariables` is false.
   *
   * By default `#de576d` for light theme and `rgb(208, 58, 82)` for dark theme.
   */
  errorSuppl?: ColorInput;
  /**
   * Base danger color. Used when `preferCssVariables` is false.
   *
   * By default `#d03050` for light theme and `#e88080` for dark theme.
   */
  danger?: ColorInput;
  /**
   * Hover danger color. Used when `preferCssVariables` is false.
   *
   * By default `#de576d` for light theme and `#e98b8b` for dark theme.
   */
  dangerHover?: ColorInput;
  /**
   * Pressed danger color. Used when `preferCssVariables` is false.
   *
   * By default `#ab1f3f` for light theme and `#e57272` for dark theme.
   */
  dangerPressed?: ColorInput;
  /**
   * Supplement(?) danger color. Used when `preferCssVariables` is false.
   *
   * By default `#de576d` for light theme and `rgb(208, 58, 82)` for dark theme.
   */
  dangerSuppl?: ColorInput;
}

export interface PresetNaiveUiUserCommonOptions
  extends Omit<PresetThemeOptions<Theme>, 'theme'>,
    PresetNaiveUiUserThemeOptions {
  /**
   * Prefer existed css variables or not.
   *
   * If true, use naive-ui css variables and you have to follow naive-ui design standards.
   *
   * If false, use generated variables and you can use more variables away from naive-ui design
   * standards.
   *
   * You may need to set this field to `false` when you are developing with `uni-app`, `taro`, etc.
   *
   * @default true
   */
  preferCssVariables?: boolean;
  /**
   * The namespace used to find css variables. Used when `preferCssVariables` is true.
   *
   * @default '''
   */
  namespace?: string;
}

export interface PresetNaiveUiUserOptions extends PresetNaiveUiUserCommonOptions {
  /** Light theme */
  light?: PresetNaiveUiUserThemeOptions;
  /** Dark theme */
  dark?: PresetNaiveUiUserThemeOptions;
}

export type PresetNaiveUiThemeOptions = Required<PresetNaiveUiUserThemeOptions>;

export type PresetNaiveUiCommonOptions = Required<PresetNaiveUiUserCommonOptions>;

export type PresetNaiveUiOptions = Required<PresetNaiveUiUserOptions>;

export type PresetNaiveUiThemeName = 'light' | 'dark';
