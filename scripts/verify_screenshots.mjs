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

  // --- 1. DESKTOP VIEWPORT ---
  console.log("Testing Desktop Viewport (1280x800)...");
  const desktopContext = await browser.newContext({
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 2,
  });
  const desktopPage = await desktopContext.newPage();
  await desktopPage.goto("http://localhost:3000", { waitUntil: "networkidle" });
  await desktopPage.waitForTimeout(800);

  // Desktop Hero
  const desktopHeroPath1 = path.join(ARTIFACT_DIR, "desktop_hero.png");
  const desktopHeroPath2 = path.join(PUBLIC_DIR, "desktop_hero.png");
  await desktopPage.screenshot({ path: desktopHeroPath1 });
  fs.copyFileSync(desktopHeroPath1, desktopHeroPath2);
  console.log("Captured: desktop_hero.png");

  // Scroll down to ensure all lazy elements/animations complete
  await desktopPage.evaluate(async () => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await desktopPage.waitForTimeout(600);
  await desktopPage.evaluate(async () => {
    window.scrollTo(0, 0);
  });
  await desktopPage.waitForTimeout(400);

  // Desktop Full Page (single-frame unstitched capture)
  const desktopScrollHeight = await desktopPage.evaluate(() =>
    Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  );
  await desktopPage.setViewportSize({ width: 1280, height: desktopScrollHeight });
  await desktopPage.waitForTimeout(400);
  const desktopFullPath1 = path.join(ARTIFACT_DIR, "desktop_fullpage.png");
  const desktopFullPath2 = path.join(PUBLIC_DIR, "desktop_fullpage.png");
  await desktopPage.screenshot({ path: desktopFullPath1 });
  fs.copyFileSync(desktopFullPath1, desktopFullPath2);
  console.log("Captured: desktop_fullpage.png");

  // Restore desktop viewport
  await desktopPage.setViewportSize({ width: 1280, height: 800 });

  // Test Modal Interaction on Desktop
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
  console.log("Testing Mobile Viewport (375x667)...");
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

  // Mobile Sections
  const sections = [
    { id: "about", name: "mobile_about.png" },
    { id: "projects", name: "mobile_projects.png" },
    { id: "skills", name: "mobile_skills.png" },
    { id: "milestones", name: "mobile_milestones.png" },
    { id: "contact", name: "mobile_contact.png" },
  ];

  for (const sec of sections) {
    const el = mobilePage.locator(`#${sec.id}`);
    if (await el.isVisible()) {
      await el.scrollIntoViewIfNeeded();
      await mobilePage.waitForTimeout(400);
      const secPath1 = path.join(ARTIFACT_DIR, sec.name);
      const secPath2 = path.join(PUBLIC_DIR, sec.name);
      await mobilePage.screenshot({ path: secPath1 });
      fs.copyFileSync(secPath1, secPath2);
      console.log(`Captured: ${sec.name}`);
    }
  }

  await mobileContext.close();
  await browser.close();
  console.log("All Playwright responsive verification tests completed successfully!");
}

run().catch((err) => {
  console.error("Playwright script failed:", err);
  process.exit(1);
});
