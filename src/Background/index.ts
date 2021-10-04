import 'emoji-log';

import { browser } from 'webextension-polyfill-ts';

browser.runtime.onInstalled.addListener((): void => {
  // eslint-disable-next-line no-console
  console.emoji('🦄', 'extension installed');
});
