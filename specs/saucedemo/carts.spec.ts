import { test, expect } from "../../fixtures/saucedemo/fs.pages";
import { GeneralUtils } from "../../utils/generalUtils";
import products_data1 from "../../data/saucedemo/products/products_data1.json" with { type: "json" };

test.describe("Carts Page Tests", () => {
  test.beforeEach(async ({ loginPage, user }) => {
    await loginPage.login(user.username, user.password);
  });

  test("Add product to Cart", async ({
    productsPage,
    cartSteps,
    cartsPage,
  }) => {
    await productsPage.addSauceLabsBackpackToCart();
    await cartsPage.goto();
    await cartSteps.verifyProductAddedInCartsPage(products_data1);
  });

  test("Remove Product From Cart", async ({
    productsPage,
    cartSteps,
    cartsPage,
  }) => {
    await productsPage.addSauceLabsBackpackToCart();
    await cartsPage.goto();
    await cartSteps.verifyProductAddedInCartsPage(products_data1);
    await cartSteps.removeProduct(cartsPage.SAUCE_LABS_REMOVE_BTN);
    await cartSteps.verifyProductIsRemovedInCartsPage(products_data1);
  });

  test("Verify Continue Shopping Button", async ({
    productsPage,
    cartSteps,
    cartsPage,
  }) => {
    await cartsPage.goto();
    await cartSteps.verifyContinueShoppingButton(
      cartsPage.CONTINUE_SHOPPING_BTN,
      productsPage.PRODUCTS_URL,
    );
  });
});
