import { Page, Locator } from '@playwright/test'
import { PRODUCT_VALUES } from '../../types/saucedemo/product.types';
import { PRODUCT_SELECT_VALUES } from '../../types/saucedemo/product.types';

export class ProductsPage {
    private readonly PRODUCTS_URL: string = "https://www.saucedemo.com/inventory.html" ;
    private readonly SWAG_LABS: string = "Swag Labs";
    private readonly PRODUCTS_ATTRIBUTE: string = "title";
    private readonly PRODUCTS_FILTER: string = "product-sort-container";
    private readonly PRODUCTS_SELECTOR: string = "active-option";
    private readonly page: Page;
    private readonly INVENTORY_PRICE_VALUE: string = "inventory-item-price";
    private readonly INVENTORY_ITEM_VALUE: string = "inventory-item-name";

    app_logo_title: Locator;
    products_title: Locator;
    filter: Locator;
    filter_span: Locator;
    inventory_prices: Locator;
    inventory_item_names: Locator;

    //inventory_items: Array<Locator>;

    constructor(page: Page){
        this.page = page;
        this.app_logo_title = this.page.getByText(this.SWAG_LABS);
        this.products_title = this.page.locator(`[data-test=${this.PRODUCTS_ATTRIBUTE}]`);
        this.filter = this.page.locator(`[data-test=${this.PRODUCTS_FILTER}]`);
        this.filter_span = this.page.locator(`[data-test=${this.PRODUCTS_SELECTOR}]`);
        this.inventory_prices = this.page.locator(`[data-test=${this.INVENTORY_PRICE_VALUE}]`);
        this.inventory_item_names = this.page.locator(`[data-test=${this.INVENTORY_ITEM_VALUE}]`);
    }

    // navigate to base products url
    async goto(){
        await this.page.goto(this.PRODUCTS_URL);
    }

    public getAppLogo(): Locator{
        return this.app_logo_title;
    }

    public getProductsTitle(): Locator{
        return this.products_title;
    }

    // set filter
    async setProductsFilter(name: PRODUCT_VALUES){
        const value_code = PRODUCT_SELECT_VALUES[name];
        await this.filter.selectOption(value_code);
    }

    async getInventoryPrices(): Promise<string[]>{
        return await this.inventory_prices.allInnerTexts();
    }

    async getInventoryItemNames(): Promise<string[]>{
        return await this.inventory_item_names.allInnerTexts();
    }

}