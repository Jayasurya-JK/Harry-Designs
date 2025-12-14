import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:5173');
  await page.waitForTimeout(3000);
  
  await page.evaluate(() => document.querySelector('#about').scrollIntoView());
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/mobile-about-side-by-side.png' });
  
  await page.evaluate(() => document.querySelector('#portfolio').scrollIntoView());
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/mobile-portfolio-2featured.png' });
  
  await browser.close();
  console.log('Mobile screenshots saved!');
})();
