import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test("matches snapshot", async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveScreenshot({ path: "home.png", fullPage: true });
  });
});
