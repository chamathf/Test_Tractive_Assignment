import { Page } from "@playwright/test";

export default class ManageAccountPage {
  constructor(public page: Page) {
    this.page = page;
  }
  
  // Selectors of elements in Mange Account Page
  private backButton = "//app-activation-button[@icon='chevron-left']//button[1]";
  private accountName = "//em[@class='ng-binding']";
  private email = "//div[@class='ng-binding']";

  // Method to click trackid page back button
  async clickTrackIDBackButton() {
    await this.page.waitForLoadState('networkidle');
    await this.page.locator(this.backButton).click();
    console.log("Click Back Button of Track ID Page");
  }

  // Method to verify Account Name
  async getAccountName(): Promise<string> {
    console.log("Fetching the Account First Name and Last Name");
    return (await this.page.locator(this.accountName).textContent())?.trim() || "";
  }

  // Method to verify Email Address
  async getEmailAddress(): Promise<string> {
    console.log("Fetching the Account Email");
    return (await this.page.locator(this.email).textContent())?.trim() || "";;
  }
}
