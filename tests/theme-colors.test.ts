import { createGenerator, presetUno } from 'unocss';
import { describe, expect, test } from 'vitest';
import { presetNaiveUi } from '../src';

describe('theme', () => {
  test('theme colors with css variables', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetNaiveUi()],
    });
    const themeColors = ['primary', 'info', 'success', 'warning', 'error', 'danger'];
    const steps = ['', 'hover', 'pressed', 'suppl'];
    const targets = themeColors.flatMap((color) =>
      steps.flatMap((step) => (step ? `text-${color}-${step}` : `text-${color}`)),
    );
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      .dark,:root{--un-preset-n-colors-primary-DEFAULT:var(--primary-color);--un-preset-n-colors-primary-hover:var(--primary-color-hover);--un-preset-n-colors-primary-pressed:var(--primary-color-pressed);--un-preset-n-colors-primary-suppl:var(--primary-color-suppl);--un-preset-n-colors-info-DEFAULT:var(--info-color);--un-preset-n-colors-info-hover:var(--info-color-hover);--un-preset-n-colors-info-pressed:var(--info-color-pressed);--un-preset-n-colors-info-suppl:var(--info-color-suppl);--un-preset-n-colors-success-DEFAULT:var(--success-color);--un-preset-n-colors-success-hover:var(--success-color-hover);--un-preset-n-colors-success-pressed:var(--success-color-pressed);--un-preset-n-colors-success-suppl:var(--success-color-suppl);--un-preset-n-colors-warning-DEFAULT:var(--warning-color);--un-preset-n-colors-warning-hover:var(--warning-color-hover);--un-preset-n-colors-warning-pressed:var(--warning-color-pressed);--un-preset-n-colors-warning-suppl:var(--warning-color-suppl);--un-preset-n-colors-error-DEFAULT:var(--error-color);--un-preset-n-colors-error-hover:var(--error-color-hover);--un-preset-n-colors-error-pressed:var(--error-color-pressed);--un-preset-n-colors-error-suppl:var(--error-color-suppl);--un-preset-n-colors-danger-DEFAULT:var(--danger-color);--un-preset-n-colors-danger-hover:var(--danger-color-hover);--un-preset-n-colors-danger-pressed:var(--danger-color-pressed);--un-preset-n-colors-danger-suppl:var(--danger-color-suppl);}
      /* layer: default */
      .text-danger{color:var(--un-preset-n-colors-danger-DEFAULT);}
      .text-danger-hover{color:var(--un-preset-n-colors-danger-hover);}
      .text-danger-pressed{color:var(--un-preset-n-colors-danger-pressed);}
      .text-danger-suppl{color:var(--un-preset-n-colors-danger-suppl);}
      .text-error{color:var(--un-preset-n-colors-error-DEFAULT);}
      .text-error-hover{color:var(--un-preset-n-colors-error-hover);}
      .text-error-pressed{color:var(--un-preset-n-colors-error-pressed);}
      .text-error-suppl{color:var(--un-preset-n-colors-error-suppl);}
      .text-info{color:var(--un-preset-n-colors-info-DEFAULT);}
      .text-info-hover{color:var(--un-preset-n-colors-info-hover);}
      .text-info-pressed{color:var(--un-preset-n-colors-info-pressed);}
      .text-info-suppl{color:var(--un-preset-n-colors-info-suppl);}
      .text-primary{color:var(--un-preset-n-colors-primary-DEFAULT);}
      .text-primary-hover{color:var(--un-preset-n-colors-primary-hover);}
      .text-primary-pressed{color:var(--un-preset-n-colors-primary-pressed);}
      .text-primary-suppl{color:var(--un-preset-n-colors-primary-suppl);}
      .text-success{color:var(--un-preset-n-colors-success-DEFAULT);}
      .text-success-hover{color:var(--un-preset-n-colors-success-hover);}
      .text-success-pressed{color:var(--un-preset-n-colors-success-pressed);}
      .text-success-suppl{color:var(--un-preset-n-colors-success-suppl);}
      .text-warning{color:var(--un-preset-n-colors-warning-DEFAULT);}
      .text-warning-hover{color:var(--un-preset-n-colors-warning-hover);}
      .text-warning-pressed{color:var(--un-preset-n-colors-warning-pressed);}
      .text-warning-suppl{color:var(--un-preset-n-colors-warning-suppl);}"
    `);
  });

  test('theme colors with colors', async () => {
    const uno = createGenerator({
      presets: [presetUno({ preflight: false }), presetNaiveUi({ preferCssVariables: false })],
    });
    const themeColors = ['primary', 'info', 'success', 'warning', 'error', 'danger'];
    const steps = ['', 'hover', 'pressed', 'suppl'];
    const targets = themeColors.flatMap((color) =>
      steps.flatMap((step) => (step ? `text-${color}-${step}` : `text-${color}`)),
    );
    const { css } = await uno.generate(targets.join('\n'));
    expect(css).toMatchInlineSnapshot(`
      "/* layer: theme */
      :root{--un-preset-n-colors-primary-DEFAULT:24 160 88;--un-preset-n-colors-primary-hover:54 173 106;--un-preset-n-colors-primary-pressed:12 122 67;--un-preset-n-colors-primary-suppl:54 173 106;--un-preset-n-colors-info-DEFAULT:32 128 240;--un-preset-n-colors-info-hover:64 152 252;--un-preset-n-colors-info-pressed:16 96 201;--un-preset-n-colors-info-suppl:64 152 252;--un-preset-n-colors-success-DEFAULT:24 160 88;--un-preset-n-colors-success-hover:54 173 106;--un-preset-n-colors-success-pressed:12 122 67;--un-preset-n-colors-success-suppl:54 173 106;--un-preset-n-colors-warning-DEFAULT:240 160 32;--un-preset-n-colors-warning-hover:252 176 64;--un-preset-n-colors-warning-pressed:201 124 16;--un-preset-n-colors-warning-suppl:252 176 64;--un-preset-n-colors-error-DEFAULT:208 48 80;--un-preset-n-colors-error-hover:222 87 109;--un-preset-n-colors-error-pressed:171 31 63;--un-preset-n-colors-error-suppl:222 87 109;--un-preset-n-colors-danger-DEFAULT:208 48 80;--un-preset-n-colors-danger-hover:222 87 109;--un-preset-n-colors-danger-pressed:171 31 63;--un-preset-n-colors-danger-suppl:222 87 109;}
      .dark{--un-preset-n-colors-primary-DEFAULT:99 226 183;--un-preset-n-colors-primary-hover:127 231 196;--un-preset-n-colors-primary-pressed:90 206 167;--un-preset-n-colors-primary-suppl:42 148 125;--un-preset-n-colors-info-DEFAULT:112 192 232;--un-preset-n-colors-info-hover:138 203 236;--un-preset-n-colors-info-pressed:102 175 211;--un-preset-n-colors-info-suppl:56 137 197;--un-preset-n-colors-success-DEFAULT:99 226 183;--un-preset-n-colors-success-hover:127 231 196;--un-preset-n-colors-success-pressed:90 206 167;--un-preset-n-colors-success-suppl:42 148 125;--un-preset-n-colors-warning-DEFAULT:242 201 125;--un-preset-n-colors-warning-hover:245 213 153;--un-preset-n-colors-warning-pressed:230 194 96;--un-preset-n-colors-warning-suppl:240 138 0;--un-preset-n-colors-error-DEFAULT:232 128 128;--un-preset-n-colors-error-hover:233 139 139;--un-preset-n-colors-error-pressed:229 114 114;--un-preset-n-colors-error-suppl:208 58 82;--un-preset-n-colors-danger-DEFAULT:232 128 128;--un-preset-n-colors-danger-hover:233 139 139;--un-preset-n-colors-danger-pressed:229 114 114;--un-preset-n-colors-danger-suppl:208 58 82;}
      /* layer: default */
      .text-danger{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-danger-DEFAULT) / var(--un-text-opacity));}
      .text-danger-hover{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-danger-hover) / var(--un-text-opacity));}
      .text-danger-pressed{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-danger-pressed) / var(--un-text-opacity));}
      .text-danger-suppl{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-danger-suppl) / var(--un-text-opacity));}
      .text-error{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-error-DEFAULT) / var(--un-text-opacity));}
      .text-error-hover{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-error-hover) / var(--un-text-opacity));}
      .text-error-pressed{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-error-pressed) / var(--un-text-opacity));}
      .text-error-suppl{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-error-suppl) / var(--un-text-opacity));}
      .text-info{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-info-DEFAULT) / var(--un-text-opacity));}
      .text-info-hover{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-info-hover) / var(--un-text-opacity));}
      .text-info-pressed{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-info-pressed) / var(--un-text-opacity));}
      .text-info-suppl{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-info-suppl) / var(--un-text-opacity));}
      .text-primary{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-primary-DEFAULT) / var(--un-text-opacity));}
      .text-primary-hover{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-primary-hover) / var(--un-text-opacity));}
      .text-primary-pressed{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-primary-pressed) / var(--un-text-opacity));}
      .text-primary-suppl{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-primary-suppl) / var(--un-text-opacity));}
      .text-success{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-success-DEFAULT) / var(--un-text-opacity));}
      .text-success-hover{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-success-hover) / var(--un-text-opacity));}
      .text-success-pressed{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-success-pressed) / var(--un-text-opacity));}
      .text-success-suppl{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-success-suppl) / var(--un-text-opacity));}
      .text-warning{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-warning-DEFAULT) / var(--un-text-opacity));}
      .text-warning-hover{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-warning-hover) / var(--un-text-opacity));}
      .text-warning-pressed{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-warning-pressed) / var(--un-text-opacity));}
      .text-warning-suppl{--un-text-opacity:1;color:rgb(var(--un-preset-n-colors-warning-suppl) / var(--un-text-opacity));}"
    `);
  });
});
