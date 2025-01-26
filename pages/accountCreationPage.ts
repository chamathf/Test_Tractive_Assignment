import { Page } from "@playwright/test";

export default class AccountCreationPage {
  constructor(public page: Page) {
    this.page = page;
  }
  
  // selectors of elements in Account Creation Page
  private firstNameField = "//input[@name='firstName']";
  private lastNameField = "//input[@name='lastName']";
  private emailField = "//input[@name='email']";
  private passwordField = "//input[@name='password']";
  private checkboxTractiveNews= "//label[@class='tcommon-check']//div[1]";
  private createAccountButton="//button[@class='tcommon-button tcommon-button--cta']";

  // Method to enter first name 
  async enterFirstName(fname: string) {
    await this.page.locator(this.firstNameField).type(fname);
    console.log("Type First Name :", fname);
  }
  
  // Method to enter last name
  async enterLastName(lname: string) {
    await this.page.locator(this.lastNameField).type(lname);
    console.log("Type Last Name :", lname);
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
  
   // Method to select checkbox tractive news
   async clickCheckboxTractiveNews() {
    await this.page.locator(this.checkboxTractiveNews).check();
    console.log("Click Check Box Tractive News");
  }
  // Method to click Create Account Button
  async clickCreateAccountButton() {
    await this.page.locator(this.createAccountButton).click();
    console.log("Click Create Account Button");
  }

}
