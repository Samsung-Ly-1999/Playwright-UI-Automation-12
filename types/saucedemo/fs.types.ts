import {CartsPage} from "../../pages/saucedemo/carts.pom"
import { LoginPage } from "../../pages/saucedemo/login.pom";
import { ProductsPage } from "../../pages/saucedemo/products.pom";
import { CartsSteps } from "../../steps/saucedemo/carts.steps";
import { ProductSteps } from "../../steps/saucedemo/products.steps";

type SauceDemoUser = {
  username: string;
  password: string;
};

export type SauceDemoFixtures = {
  productsPage: ProductsPage;
  cartsPage: CartsPage;
  loginPage: LoginPage;
  user: SauceDemoUser;
  productSteps: ProductSteps;
  cartSteps: CartsSteps;
};
