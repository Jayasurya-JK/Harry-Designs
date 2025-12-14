import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  
  // Desktop view
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1920, height: 1080 });
  await desktopPage.goto('http://localhost:5173');
  await desktopPage.waitForTimeout(3000);
  
  // Screenshot About section (desktop)
  await desktopPage.evaluate(() => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
  await desktopPage.waitForTimeout(2000);
  await desktopPage.screenshot({ path: '/tmp/about-desktop.png', fullPage: false });
  
  // Screenshot Portfolio section (desktop) - Featured
  await desktopPage.evaluate(() => {
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
  });
  await desktopPage.waitForTimeout(2000);
  await desktopPage.screenshot({ path: '/tmp/portfolio-featured-desktop.png', fullPage: false });
  
  // Click View All button
  await desktopPage.click('button:has-text("View All Projects")');
  await desktopPage.waitForTimeout(1500);
  await desktopPage.screenshot({ path: '/tmp/portfolio-all-desktop.png', fullPage: false });
  
  await desktopPage.close();
  
  // Mobile view
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 812 }); // iPhone X
  await mobilePage.goto('http://localhost:5173');
  await mobilePage.waitForTimeout(3000);
  
  // Screenshot About section (mobile)
  await mobilePage.evaluate(() => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: '/tmp/about-mobile.png', fullPage: false });
  
  // Screenshot Portfolio section (mobile) - Featured
  await mobilePage.evaluate(() => {
    document.querySelector('#portfolio').scrollIntoView({ behavior: 'smooth' });
  });
  await mobilePage.waitForTimeout(2000);
  await mobilePage.screenshot({ path: '/tmp/portfolio-featured-mobile.png', fullPage: false });
  
  // Scroll down to see the second featured item
  await mobilePage.evaluate(() => {
    window.scrollBy(0, 400);
  });
  await mobilePage.waitForTimeout(1000);
  await mobilePage.screenshot({ path: '/tmp/portfolio-featured-mobile-2.png', fullPage: false });
  
  await mobilePage.close();
  
  await browser.close();
  console.log('Screenshots saved successfully!');
})();
