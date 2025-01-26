import { chromium } from '@playwright/test';
import { setupCookies } from './utility/setup.cookies';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  await setupCookies(context);
  await context.storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;
