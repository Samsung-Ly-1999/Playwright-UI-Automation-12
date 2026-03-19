import { Page, Locator } from '@playwright/test'

export class ProductsPage {
    private readonly products_url: string = "https://www.saucedemo.com/inventory.html" ;
    private readonly swag_labs: string = "Swag Labs";
    private readonly products_attribute: string = "title";
    private readonly page: Page;
    private readonly app_logo_title: Locator;
    private readonly products_title: Locator;
    constructor(page: Page){
        this.page = page;
        this.app_logo_title = this.page.getByText(this.swag_labs);
        this.products_title = this.page.locator(`[data-test=${this.products_attribute}]`);
    }

    // navigate to base products url
    async goto(){
        await this.page.goto(this.products_url);
    }

    public getAppLogo(): Locator{
        return this.app_logo_title;
    }

    public getProductsTitle(): Locator{
        return this.products_title;
    }
}