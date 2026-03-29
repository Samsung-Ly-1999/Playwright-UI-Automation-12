import { Page, Locator } from '@playwright/test';
import { CommonPage } from './common.pom';

export class LoginPage extends CommonPage{
    private readonly login_url: string = "https://www.saucedemo.com";
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginBtn: Locator;

    constructor(page: Page){
        super(page);
        this.usernameInput = this.page.getByPlaceholder("Username");
        this.passwordInput = this.page.getByPlaceholder("Password");
        this.loginBtn = this.page.getByRole('button', { name: 'Login'});
    }

    async goto(){
        await this.page.goto(this.login_url);
    }

    public getUsernameInput(){
        return this.usernameInput;
    }

    public getPasswordInput(){
        return this.passwordInput;
    }

    async login(user: string, pass: string){
        await this.usernameInput.fill(user);
        await this.passwordInput.fill(pass);
        await this.loginBtn.click();
    }

}