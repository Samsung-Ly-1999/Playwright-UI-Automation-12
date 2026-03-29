import { CartsPage } from "../../pages/saucedemo/carts.pom";
import { expect } from "@playwright/test";
import { Product } from "../../types/saucedemo/product.types";

export class CartsSteps {
  private readonly cartsPage: CartsPage;
  constructor(cartsPage: CartsPage) {
    this.cartsPage = cartsPage;
  }

  public async verifyProductAddedInCartsPage(data: Product){
    await expect(await this.cartsPage.getElementByText(data.title)).toBeVisible();
    await expect(await this.cartsPage.getElementByText(data.description)).toBeVisible();
  }
  public async removeProduct(dataid: string){
    await expect(await this.cartsPage.getButtonByDataTest(dataid)).toBeVisible();
    const button = await this.cartsPage.getButtonByDataTest(dataid)
    await this.cartsPage.clickOnElement(button);
  }
  public async verifyProductIsRemovedInCartsPage(data: Product){
    await expect(await this.cartsPage.getElementByText(data.title)).not.toBeVisible();
  }
  public async verifyContinueShoppingButton(dataid: string, productsUrl: string){
    await expect(await this.cartsPage.getButtonByDataTest(dataid)).toBeVisible();
    const button = await this.cartsPage.getButtonByDataTest(dataid);
    await button.click();
    await expect(this.cartsPage.page).toHaveURL(productsUrl);
  }
}
