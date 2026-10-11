const PLUGIN_ID = "@fang2hou/dsh-locale-ja";
const TAG_ID = `${PLUGIN_ID}/japanese-font.css`;

// Latin faces first, then Japanese faces, so kana and kanji render with
// Japanese glyph shapes; every family is OS-bundled (Noto Sans CJK JP ships
// with common Linux distributions).
const FONT_STACK =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Hiragino Sans", ' +
  '"Hiragino Kaku Gothic ProN", "Yu Gothic UI", "Yu Gothic", "Meiryo", ' +
  '"Noto Sans CJK JP", "Noto Sans JP", sans-serif';

// Mirrors the shell's built-in code stack with its Chinese CJK tail replaced
// by Japanese faces; the Latin faces must stay first so code keeps monospace
// Latin rendering.
const CODE_STACK =
  "'SF Mono', 'JetBrains Mono', 'Fira Code', Consolas, 'Liberation Mono', " +
  "Menlo, Courier, 'Yu Gothic UI', 'Meiryo', 'Noto Sans CJK JP'";

// The shell redefines --dsw-font-family and --ds-font-family-code on `body`
// (ui-theme base.css), so overriding `:root` alone leaves the whole app
// subtree on the shipped Chinese-leaning stack; target both. The brand token
// keeps Montserrat ahead of the Japanese stack. `!important` stays ahead of
// shell stylesheets inserted after this tag and of inline theme writes.
const CSS =
  ":root,body{" +
  `--dsw-font-family:${FONT_STACK} !important;` +
  `--dsw-font-family-brand:'Montserrat',${FONT_STACK} !important;` +
  `--ds-font-family-code:${CODE_STACK} !important;` +
  "}";

export interface FontStylesheet {
  sync: (japanese: boolean) => void;
  dispose: () => void;
}

export function createFontStylesheet(): FontStylesheet {
  let tag: HTMLStyleElement | null = null;

  const remove = (): void => {
    tag?.remove();
    tag = null;
  };

  return {
    sync(japanese: boolean): void {
      if (!japanese) {
        remove();
        return;
      }
      // No document while the client tree boots outside a browser.
      if (tag !== null || typeof document === "undefined") return;
      tag = document.createElement("style");
      tag.dataset.plugin = PLUGIN_ID;
      tag.dataset.pluginCss = TAG_ID;
      tag.textContent = CSS;
      document.head.append(tag);
    },
    dispose: remove,
  };
}
