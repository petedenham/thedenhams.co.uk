import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test("matches snapshot", async ({ page }) => {
    await page.goto('http://localhost:3000');

    expect(await page.screenshot()).toMatchSnapshot(["home.png"]);
  });
});
