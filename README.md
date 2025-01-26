# Playwright Test Automation Project Tractive -Chamath Fernando

This project is built using the **Playwright Framework** and **TypeScript**. The **IDE** used is **VSCode**.

There are two test cases in this project
1. Account Creation (Sign Up)
2. Login ( Sign In)

## Project Structure

The project follows the **Page Object Model (POM)** design pattern and is organized into 3 distinct layers:

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

   ![image](https://github.com/user-attachments/assets/7b988166-de73-41f5-a0e4-02112f6ca815)

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
   Chrome Version=  131.0.6778.86
   Firefox Verison = 133.0
   
