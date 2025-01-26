import { BrowserContext } from '@playwright/test';

export async function setupCookies(context: BrowserContext) {
  await context.addCookies([
    {
      name: 'interview',
      value: '7lBPV9iik6r9MNE5dKw9nzF9CstdlEJl',
      domain: '.tractive.com',
      path: '/',
    }
  ]);
}
