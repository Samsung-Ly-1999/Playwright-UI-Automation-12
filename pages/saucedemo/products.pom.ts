import { Page, Locator } from '@playwright/test'
import { PRODUCT_VALUES } from '../../types/saucedemo/product.types';
import { PRODUCT_SELECT_VALUES } from '../../types/saucedemo/product.types';
import { get } from 'node:http';
import { CommonPage } from './common.pom';

export class ProductsPage extends CommonPage{
    PRODUCTS_URL: string = "https://www.saucedemo.com/inventory.html" ;
    SWAG_LABS: string = "Swag Labs";
    PRODUCTS_ATTRIBUTE: string = "title";
    PRODUCTS_FILTER: string = "product-sort-container";
    PRODUCTS_SELECTOR: string = "active-option";
    INVENTORY_PRICE_VALUE: string = "inventory-item-price";
    INVENTORY_ITEM_VALUE: string = "inventory-item-name";
    SAUCE_LABS_BACKPACK_ADD_TO_CART_BTN: string = "add-to-cart-sauce-labs-backpack"

    private readonly app_logo_title: Locator;
    private readonly products_title: Locator;
    private readonly filter: Locator;
    private readonly filter_span: Locator;
    private readonly inventory_prices: Locator;
    private readonly inventory_item_names: Locator;
    private readonly sauce_labs_backpack_add_to_cart_btn: Locator;

    //inventory_items: Array<Locator>;

    constructor(page: Page){
        super(page);
        this.page = page;
        this.app_logo_title = this.page.getByText(this.SWAG_LABS);
        this.products_title = this.page.locator(`[data-test=${this.PRODUCTS_ATTRIBUTE}]`);
        this.filter = this.page.locator(`[data-test=${this.PRODUCTS_FILTER}]`);
        this.filter_span = this.page.locator(`[data-test=${this.PRODUCTS_SELECTOR}]`);
        this.inventory_prices = this.page.locator(`[data-test=${this.INVENTORY_PRICE_VALUE}]`);
        this.inventory_item_names = this.page.locator(`[data-test=${this.INVENTORY_ITEM_VALUE}]`);
        this.sauce_labs_backpack_add_to_cart_btn = this.page.locator(`[data-test=${this.SAUCE_LABS_BACKPACK_ADD_TO_CART_BTN}]`);
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

    public getFilterSpan(){
        return this.filter_span;
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

    async addSauceLabsBackpackToCart(){
        await this.sauce_labs_backpack_add_to_cart_btn.click();
    }

}