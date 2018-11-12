import Puppeteer from 'puppeteer';

import { TEST_BASE_URL } from '../config/test';

describe('H1 Text', () => {
  it(
    'h1 loads correctly',
    async () => {
      const browser = await Puppeteer.launch();
      const page = await browser.newPage();
    },
    16000
  );
});
