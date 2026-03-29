import { Page } from "@playwright/test";
import { CommonPage } from "./common.pom";

export class CartsPage extends CommonPage{
    CARTS_PAGE_URL: string = "https://www.saucedemo.com/cart.html";
    SAUCE_LABS_REMOVE_BTN: string = "remove-sauce-labs-backpack";
    CONTINUE_SHOPPING_BTN: string = "continue-shopping";
    constructor(page: Page){
        super(page);
        this.page = page;
    }

    public async goto(){
        return await this.page.goto(this.CARTS_PAGE_URL);
    }
    
}