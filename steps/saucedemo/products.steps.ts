import { expect, Page } from "@playwright/test";
import { ProductsPage } from "../../pages/saucedemo/products.pom";

export class ProductSteps{
    private readonly productsPage: ProductsPage;
    constructor(page: ProductsPage){
        this.productsPage = page;
    }

    async verifyFilterIsSet(name: string){
        await expect(this.productsPage.getFilterSpan()).toHaveText(name);
    }

    async verifyPrices(mode: string){
        let prev = null
        for(const price of await this.productsPage.getInventoryPrices()){
            const formattedPrice = Number(price.replace("$", ""));
            if (prev == null){
                prev = formattedPrice;
                continue;
            }
            switch (mode){
                case "Price (low to high)":
                    await expect(prev <= formattedPrice).toBeTruthy();
                    break;
                case "Price (high to low)":
                    await expect(prev >= formattedPrice).toBeTruthy();
                    break;
            }
            prev = formattedPrice;
        }
    }

    async verifyItemOrder(mode: string){
        let prev = null;
        for(const name of await this.productsPage.getInventoryItemNames()){
            const formattedName = name.toLowerCase();
            if (prev == null){
                prev = formattedName;
                continue;
            }
            switch (mode){
                case "Name (A to Z)":
                    await expect(prev.localeCompare(formattedName) <= 0).toBeTruthy();
                    break;
                case "Name (Z to A)":
                    await expect(prev.localeCompare(formattedName) >= 0).toBeTruthy();
                    break;
            }
            prev = formattedName;
        }
    }
}