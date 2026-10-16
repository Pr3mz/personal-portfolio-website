import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const ARTIFACT_DIR = "C:/Users/User/.gemini/antigravity/brain/95bd4067-da8a-4bc0-a4d3-42e6df90662f";
const PUBLIC_DIR = "C:/Users/User/Desktop/myportfolioweb/public/screenshots";

[ARTIFACT_DIR, PUBLIC_DIR].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

async function run() {
  console.log("Launching browser via Playwright...");
  const browser = await chromium.launch({
    channel: "chrome",
    headless: true,
  });

  // --- 1. DESKTOP VIEWPORT (BRIGHT / WHITE THEME DEFAULT) ---
  console.log("Testing Desktop Viewport (1280x800) - Bright Theme...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await desktopPage.waitForTimeout(800);

  // Desktop Hero (Bright Theme)
  const desktopHeroPath1 = path.join(ARTIFACT_DIR, "desktop_hero_bright.png");
  const desktopHeroPath2 = path.join(PUBLIC_DIR, "desktop_hero.png");
  await desktopPage.screenshot({ path: desktopHeroPath1 });
  fs.copyFileSync(desktopHeroPath1, desktopHeroPath2);
  console.log("Captured: desktop_hero_bright.png");

  // Desktop Full Page (Bright Theme)
  const desktopScrollHeight = await desktopPage.evaluate(() =>
    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  );
  await desktopPage.setViewportSize({ width: 1280, height: desktopScrollHeight });
  await desktopPage.waitForTimeout(500);
  const desktopFullPath1 = path.join(ARTIFACT_DIR, "desktop_fullpage_bright.png");
  const desktopFullPath2 = path.join(PUBLIC_DIR, "desktop_fullpage.png");
  await desktopPage.screenshot({ path: desktopFullPath1 });
  fs.copyFileSync(desktopFullPath1, desktopFullPath2);
  console.log("Captured: desktop_fullpage_bright.png");

  // Restore viewport and toggle to Dark Mode
  await desktopPage.setViewportSize({ width: 1280, height: 800 });
  await desktopPage.waitForTimeout(300);

  const themeToggle = desktopPage.locator("[data-testid='theme-toggle']");
  await themeToggle.click();
  await desktopPage.waitForTimeout(500);

  // Desktop Hero (Dark Theme)
  const desktopDarkHeroPath = path.join(ARTIFACT_DIR, "desktop_hero_dark.png");
  await desktopPage.screenshot({ path: desktopDarkHeroPath });
  console.log("Captured: desktop_hero_dark.png");

  // Toggle back to Bright Mode and test Project Modal
  await themeToggle.click();
  await desktopPage.waitForTimeout(400);

  const inspectBtn = desktopPage.locator("button:has-text('Inspect Architecture')").first();
  if (await inspectBtn.isVisible()) {
    await inspectBtn.click();
    await desktopPage.waitForTimeout(600);
    const modalPath1 = path.join(ARTIFACT_DIR, "desktop_project_modal.png");
    const modalPath2 = path.join(PUBLIC_DIR, "desktop_project_modal.png");
    await desktopPage.screenshot({ path: modalPath1 });
    fs.copyFileSync(modalPath1, modalPath2);
    console.log("Captured: desktop_project_modal.png");

    await desktopPage.keyboard.press("Escape");
    await desktopPage.waitForTimeout(400);
  }
  await desktopContext.close();

  // --- 2. MOBILE VIEWPORT ---
  console.log("Testing Mobile Viewport (375x667) - Bright Theme...");
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 667 },
    deviceScaleFactor: 2,
    isMobile: true,
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await mobilePage.waitForTimeout(800);

  // Mobile Hero
  const mobileHeroPath1 = path.join(ARTIFACT_DIR, "mobile_hero.png");
  const mobileHeroPath2 = path.join(PUBLIC_DIR, "mobile_hero.png");
  await mobilePage.screenshot({ path: mobileHeroPath1 });
  fs.copyFileSync(mobileHeroPath1, mobileHeroPath2);
  console.log("Captured: mobile_hero.png");

  await mobileContext.close();
  await browser.close();
  console.log("All Playwright Bright & Dark verification tests completed successfully!");
}

run().catch((err) => {
  console.error("Playwright script failed:", err);
  process.exit(1);
});
