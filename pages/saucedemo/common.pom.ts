import { Page } from "@playwright/test";
import { Locator } from "@playwright/test";

export class CommonPage{
    page: Page;
    constructor(page: Page){
        this.page = page;
    }
    public async getElementByText(name: string){
        return await this.page.getByText(`${name}`, {exact: true});
    }
    public async getButtonByDataTest(name: string): Promise<Locator>{
        return await this.page.locator(`[data-test=${name}]`);
    }
    public async clickOnElement(element: Locator){
        return await element.click();
    }
}