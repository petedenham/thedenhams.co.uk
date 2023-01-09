import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test("matches snapshot", async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot(["home"]);
  });
});
