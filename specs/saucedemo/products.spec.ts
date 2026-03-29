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

  test("Verify Product Prices filtered from low to high", async ({
    productsPage,
    productSteps,
  }) => {
    await productsPage.setProductsFilter("PRICE_LOW_HIGH");
    await productSteps.verifyFilterIsSet("Price (low to high)");
    await productSteps.verifyPrices("Price (low to high)");
  });

  test("Verify Product Prices filtered from high to low", async ({
    productsPage,
    productSteps,
  }) => {
    await productsPage.setProductsFilter("PRICE_HIGH_LOW");
    await productSteps.verifyFilterIsSet("Price (high to low)");
    await productSteps.verifyPrices("Price (high to low)");
  });

  test("Verify Product Names filtered from a to z", async ({
    productsPage,
    productSteps,
  }) => {
    await productsPage.setProductsFilter("NAME_A_TO_Z");
    await productSteps.verifyFilterIsSet("Name (A to Z)");
    await productSteps.verifyItemOrder("Name (A to Z)");
  });

  test("Verify Product Names filtered from z to a", async ({
    productsPage,
    productSteps,
  }) => {
    await productsPage.setProductsFilter("NAME_Z_TO_A");
    await productSteps.verifyFilterIsSet("Name (Z to A)");
    await productSteps.verifyItemOrder("Name (Z to A)");
  });
});
