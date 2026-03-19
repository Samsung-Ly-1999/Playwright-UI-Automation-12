import { CartsPage } from "../../../pages/saucedemo/carts.pom";
import { LoginPage } from "../../../pages/saucedemo/login.pom";
import { ProductsPage } from "../../../pages/saucedemo/products.pom";

type SauceDemoUser = {
  username: string;
  password: string;
};

export type SauceDemoFixtures = {
  productsPage: ProductsPage;
  cartsPage: CartsPage;
  loginPage: LoginPage;
  user: SauceDemoUser;
};
