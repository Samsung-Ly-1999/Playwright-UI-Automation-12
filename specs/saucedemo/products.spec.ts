import { LoginPage } from "../../pages/saucedemo/login.pom";
import { test, expect } from "../../fixtures/saucedemo/fs.pages";

test.describe("Products Page Tests", () => {
  test.beforeEach(async ({ loginPage, user }) => {
    await loginPage.login(user.username, user.password);
  });

  test("Verify App Logo", async ({ productsPage }) => {
    await expect(productsPage.getAppLogo()).toContainText("Swag Labs");
  });

  test("Verify Products Title", async ({ productsPage }) => {
    await expect(productsPage.getProductsTitle()).toContainText("Products");
  });

  test("Verify Product Prices filtered from low to high", async ({productsPage}) => {
    
  })
});
