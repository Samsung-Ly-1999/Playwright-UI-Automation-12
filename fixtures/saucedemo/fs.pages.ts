import { test as base } from "@playwright/test";
import { ProductsPage } from "../../pages/saucedemo/products.pom";
import { SauceDemoFixtures } from "../../types/saucedemo/fs.types";
import { LoginPage } from "../../pages/saucedemo/login.pom";
import dotenv from "dotenv";
import path from "path";
import { ProductSteps } from "../../steps/saucedemo/products.steps";

// Read from .env file
dotenv.config();

// Base SauceDemo Fixture
export const test = base.extend<SauceDemoFixtures>({
  productsPage: async ({ page }, use) => {
    const productsPage = new ProductsPage(page);
    await productsPage.goto();
    await use(productsPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    use(loginPage);
  },
  user: [
    {
      username: process.env.SAUCE_DEMO_USERNAME!,
      password: process.env.SAUCE_DEMO_PASSWORD!,
    },
    { option: true },
  ],
  productSteps: async ({ productsPage }, use) => {
    const productSteps = new ProductSteps(productsPage);
    use(productSteps);
  },
});
export { expect } from "@playwright/test";
