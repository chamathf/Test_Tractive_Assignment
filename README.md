# Playwright Test Automation Project Tractive -Chamath Fernando

This project is built using the **Playwright Framework** and **TypeScript**. The **IDE** used is **VSCode**.

There are two test cases in this project
1. Account Creation (Sign Up)
2. Login ( Sign In)

## Project Structure

The project follows the **Page Object Model (POM)** design pattern and is organized into 4 distinct layers:

1. **Page Object Layer**  
   Contains all the page objects representing various web pages.  
   Files:  pages\
   - `accountCreationPage.ts`
   - `loginPage.ts`
   - `mangeAccountPage.ts`

2. **Test Layer**  
   Contains the test specifications where tests are written.  
   File:  tests\ui
   - `account.creation.test.ts`
   - `login.test.ts`

3. **Data Layer**  
   Contains the test data used for running the tests.  
   File:  data/TestData.json
   - `TestData.json` 

4. **Utility Layer**
   This Layer contains with 3 parts use for set up and manage cookies 

   1.`utility.Setup.ts`
   
   2. `setup.cookies.ts`
  
   3. `storageState.json`

--- 

## Preconditions Before Running the Test Case

### 1. Please Install Node.js , VSCode IDE, Playwright, Git

### 2. Clone the Project Repository using Git

       git clone https://github.com/chamathf/Test_Tractive_Assignment.git
       Branch - master

### 3. Navigate to the Project Directory
       Open the project folder in VSCode.

##  How to Run the Test Case

### 1. Headless Mode
   You can run the test in headless mode (without opening a browser window) using the following command:

   Chrome 
   
   - npx playwright test --project=chromium -g "Sign In to Tractive Account"

   - npx playwright test --project=firefox -g "Sign Up To Tractive Account"
   
   
   firefox 

   - npx playwright test --project=firefox -g "Sign Up To Tractive Account"

   - npx playwright test --project=firefox -g "Sign In to Tractive Account"
   - 
   ### OR

   Click Playbutton in Test File 

   ![image](https://github.com/user-attachments/assets/53e0d8f8-f16a-4192-97d9-bf66ebf0dbfd)
)

### 2. Headed Mode
   To run the test in headed mode (with the browser UI visible), use this command:

   Chrome
   
   - npx playwright test --headed --project=chromium -g "Sign In to Tractive Account"
   
   - npx playwright test --headed --project=firefox -g "Sign Up To Tractive Account"

   firefox browser

   - npx playwright test --headed --project=firefox -g "Sign Up To Tractive Account"
     
   - npx playwright test --headed --project=firefox -g "Sign In to Tractive Account"


## NOTE
   These test case run on chrome and firefox and Passed Scussfully without any issues
   Chrome Version -   132.0.6834.110
   Firefox Verison - 134.0.2
   Node Verison - v18.18.2
   playwright Verison - 1.50.0
   Tested Date - 1/26/2025
   
