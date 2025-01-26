import { Page } from "@playwright/test";

export default class LoginPage {
  constructor(public page: Page) {
    this.page = page;
  }
  
  // selectors of elements in login page
  private tractiveLogo="//img[@src='/img/tractive-logo.svg']";
  private createAccountLink="//strong[text()='Create Account']";
  private acceptallCookies="#cc-allow-01";
  private emailField = "//input[@type='email']";
  private passwordField = "//input[@type='password']";
  private signInButton= "//button[@type='submit']//div[1]";

  //Method to verify the tractive logo
  async getTractiveLogo() {
    console.log("Verify the Tractive Logo in Login Page");
    return this.page.locator(this.tractiveLogo);
    
  }
  
  //Method to click cookies alert window accept all button
  async clickAcceptAllCoockiesbutton() {
    await this.page.locator(this.acceptallCookies).click();
    console.log("Click Accept All Cookies Button");
  }


  // Method to click create account link
  async clickCreateAccountLink() {
    await this.page.locator(this.createAccountLink).click();
    console.log("Click Create Account Link");
  }

  // Method to enter email
  async enterEmail(email: string) {
    await this.page.locator(this.emailField).type(email);
    console.log("Type Email :", email);
  }
  
  // Method to enter password
  async enterPasssword(password: string) {
    await this.page.locator(this.passwordField).type(password);
    console.log("Type Password :", password);
  }

  // Method to click Create Account Button
  async clickSignInButton() {
    await this.page.locator(this.signInButton).click();
    console.log("Click Sign In Button");
  }

}
