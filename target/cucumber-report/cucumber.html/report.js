$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computers.feature");
formatter.feature({
  "line": 1,
  "name": "Computers Test",
  "description": "As a user I want to add product in shopping cart successfully",
  "id": "computers-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3926371900,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify User Should be able to add product successfully in shopping cart",
  "description": "",
  "id": "computers-test;verify-user-should-be-able-to-add-product-successfully-in-shopping-cart",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on \"Computer\" menu on homepage",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I click on \"Desktop\" tab on computer page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select Sort By Position \"Name: A to Z\" ascending order",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Add to Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should be able to verify the text \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter below details in build your computer page",
  "rows": [
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "8GB [+$60.00]"
      ],
      "line": 21
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select various radio buttons options",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should be able to Verify Price",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Add TO Cart Button On Desktop Page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to verify text \"The product has been added to your shopping cart on Top green Bar\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I close the bar clicking on the cross button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I MouseHover on \"Shopping cart\" and Click on \"GO TO CART\" button.",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should be able to verify Shopping Cart Text",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I change the Qty to \"2\" and Click on Update shopping Button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I verify the Total Price after clicking on Update Button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on checkbox “I agree with the terms of service” on page",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on CheckOut button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be Verify the text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Checkout As a Guest Tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select \"country\" From Country DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter below details in check out page",
  "rows": [
    {
      "cells": [
        "John",
        "Smith",
        "xyz@gmail.com",
        "London",
        "random street",
        "WE0 00T",
        "9825655114"
      ],
      "line": 37
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on the \"Continue\" Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click On Radio Button \"Next Day Air($0.00)\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click On the \"shippingMethodContinueButton\" Button Tab",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on the  \"selectCreditCardRadioButton\" tab button",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I click on \"continuePaymentButton\" button",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select \"Master Card\" from credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I fill below details in credit card form in payment page",
  "rows": [
    {
      "cells": [
        "Mr Smith",
        "5105105105105100",
        "12",
        "2023",
        "203"
      ],
      "line": 45
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I click on payment continue button",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I should be able to verify \"payment method\" is Credit Card",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I should be able to verify \"shipping method\" is Next Day Air",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "I should be able to verify  \"price\" on Page",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click On \"Confirm\" button on checkOut Page",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I should be able to verify \"Thank You\" text on checkOut Page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I should be able to  verify \"Your order has been successfully processed!\" on checkout nopcommerce page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on \"continue\" in checkout page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I should be able to verify text \"Welcome to our store\" on welcome checkout page",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputersSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 84299900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 12
    }
  ],
  "location": "ComputersSteps.iClickOnMenuOnHomepage(String)"
});
formatter.result({
  "duration": 977632600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktop",
      "offset": 12
    }
  ],
  "location": "ComputersSteps.iClickOnTabOnComputerPage(String)"
});
formatter.result({
  "duration": 403551500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 27
    }
  ],
  "location": "ComputersSteps.iSelectSortByPositionAscendingOrder(String)"
});
formatter.result({
  "duration": 129567000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 2069154400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 37
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyTheText(String)"
});
formatter.result({
  "duration": 3000774000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iEnterBelowDetailsInBuildYourComputerPage(DataTable)"
});
formatter.result({
  "duration": 227265800,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iSelectVariousRadioButtonsOptions()"
});
formatter.result({
  "duration": 584457500,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iShouldBeAbleToVerifyPrice()"
});
formatter.result({
  "duration": 30652500,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnAddTOCartButtonOnDesktopPage()"
});
formatter.result({
  "duration": 65024000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart on Top green Bar",
      "offset": 33
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyText(String)"
});
formatter.result({
  "duration": 221723400,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iCloseTheBarClickingOnTheCrossButton()"
});
formatter.result({
  "duration": 63442400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 17
    },
    {
      "val": "GO TO CART",
      "offset": 46
    }
  ],
  "location": "ComputersSteps.iMouseHoverOnAndClickOnButton(String,String)"
});
formatter.result({
  "duration": 1560642900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iShouldBeAbleToVerifyShoppingCartText()"
});
formatter.result({
  "duration": 33994000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "ComputersSteps.iChangeTheQtyToAndClickOnUpdateShoppingButton(String)"
});
formatter.result({
  "duration": 539078500,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iVerifyTheTotalPriceAfterClickingOnUpdateButton()"
});
formatter.result({
  "duration": 32067200,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnCheckboxIAgreeWithTheTermsOfServiceOnPage()"
});
formatter.result({
  "duration": 63633500,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnCheckOutButton()"
});
formatter.result({
  "duration": 529247500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 29
    }
  ],
  "location": "ComputersSteps.iShouldBeVerifyTheText(String)"
});
formatter.result({
  "duration": 30833600,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnCheckoutAsAGuestTab()"
});
formatter.result({
  "duration": 612216000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "country",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromCountryDropDown(String)"
});
formatter.result({
  "duration": 165079000,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iEnterBelowDetailsInCheckOutPage(DataTable)"
});
formatter.result({
  "duration": 545127400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continue",
      "offset": 16
    }
  ],
  "location": "ComputersSteps.iClickOnTheButton(String)"
});
formatter.result({
  "duration": 68913500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Next Day Air($0.00)",
      "offset": 25
    }
  ],
  "location": "ComputersSteps.iClickOnRadioButton(String)"
});
formatter.result({
  "duration": 354982900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shippingMethodContinueButton",
      "offset": 16
    }
  ],
  "location": "ComputersSteps.iClickOnTheButtonTab(String)"
});
formatter.result({
  "duration": 59679400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selectCreditCardRadioButton",
      "offset": 17
    }
  ],
  "location": "ComputersSteps.iClickOnTheTabButton(String)"
});
formatter.result({
  "duration": 277922200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "continuePaymentButton",
      "offset": 12
    }
  ],
  "location": "ComputersSteps.iClickOnButton(String)"
});
formatter.result({
  "duration": 52210700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Master Card",
      "offset": 10
    }
  ],
  "location": "ComputersSteps.iSelectFromCreditCardDropdown(String)"
});
formatter.result({
  "duration": 329426900,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iFillBelowDetailsInCreditCardFormInPaymentPage(DataTable)"
});
formatter.result({
  "duration": 389616700,
  "status": "passed"
});
formatter.match({
  "location": "ComputersSteps.iClickOnPaymentContinueButton()"
});
formatter.result({
  "duration": 45595100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "payment method",
      "offset": 28
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyIsCreditCard(String)"
});
formatter.result({
  "duration": 303875900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shipping method",
      "offset": 28
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyIsNextDayAir(String)"
});
formatter.result({
  "duration": 26684900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "price",
      "offset": 29
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyOnPage(String)"
});
formatter.result({
  "duration": 20773700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Confirm",
      "offset": 12
    }
  ],
  "location": "ComputersSteps.iClickOnButtonOnCheckOutPage(String)"
});
formatter.result({
  "duration": 46572900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Thank You",
      "offset": 28
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyTextOnCheckOutPage(String)"
});
formatter.result({
  "duration": 700308800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 29
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyOnCheckoutNopcommercePage(String)"
});
formatter.result({
  "duration": 37957800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "continue",
      "offset": 12
    }
  ],
  "location": "ComputersSteps.iClickOnInCheckoutPage(String)"
});
formatter.result({
  "duration": 434734900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 33
    }
  ],
  "location": "ComputersSteps.iShouldBeAbleToVerifyTextOnWelcomeCheckoutPage(String)"
});
formatter.result({
  "duration": 43539600,
  "status": "passed"
});
formatter.after({
  "duration": 735680000,
  "status": "passed"
});
formatter.uri("electronics.feature");
formatter.feature({
  "line": 1,
  "name": "Electronics Test",
  "description": "As a user navigation to Cell Phones page",
  "id": "electronics-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2087178800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should verify that the product added successfully and place order successfully",
  "description": "",
  "id": "electronics-test;user-should-verify-that-the-product-added-successfully-and-place-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I mouse hover on the \"Electronics\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on \"Cell phones\" and click",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the text \"Cell phones\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I click on the \"List View\" tab",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on the product name \"Nokia Lumia 1020\" link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can see the text \"Nokia Lumia 1020\" on the page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see the price \"$349.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I change the quantity to 2",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on the \"ADD TO CART\" button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see the message \"The product has been added to your shopping cart\" on the top green bar",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I close the bar by clicking on the cross button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I mouse hover on \"Shopping cart\" and click on \"GO TO CART\" button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I should be able to verify message \"shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should be able to verify quantity 2",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I can see the total $698.00",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on the checkbox “I agree with the terms of service” on page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should be able to see text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on register tab",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see text Register on register page",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter email \"random email\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I fill below details in the registration form",
  "rows": [
    {
      "cells": [
        "John",
        "Smith",
        "Password1",
        "Password1"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I should be able to see message \"Your registration completed\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I can see text \"Shopping cart\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on login link",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I enter email \"random email\" into email field",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter password \"Password1\" into password field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on log in button",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on the checkbox I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on the checkout tab",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I enter email \"random email\" into the email field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I select country from drop down",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I fill below details in form in checkout after registration",
  "rows": [
    {
      "cells": [
        "John",
        "Smith",
        "London",
        "101 House",
        "GS1 2FG",
        "02022039384"
      ],
      "line": 49
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "I click on continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I click on radio button \"2nd Day Air ($0.00)\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I click on continue from shipping method",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I select radio button credit card",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I click on continue tab from payment method",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I select visa from select credit card dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I fill below details in credit card form",
  "rows": [
    {
      "cells": [
        "Mr Smith",
        "5105105105105100",
        "12",
        "2023",
        "203"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I click on the payment continue button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I should be able to verify payment method is \"Credit Card\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I can see shipping method is \"2nd Day Air\"",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "I can able to verify total \"$698.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I click on confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I should be able to verify the text Thank You",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I can see the message \"Your order has been successfully processed!\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click on the continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I can able to see the text \"Welcome to our store\"",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I click on log out link",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I am able to verify the URL \"https://demo.nopcommerce.com/\"",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I should be able to add product successfully and placed order successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ElectronicsSteps.iAmOnTheHomepage()"
});
formatter.result({
  "duration": 54700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Electronics",
      "offset": 22
    }
  ],
  "location": "ElectronicsSteps.iMouseHoverOnTheTab(String)"
});
formatter.result({
  "duration": 152743500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 18
    }
  ],
  "location": "ElectronicsSteps.iMouseHoverOnAndClick(String)"
});
formatter.result({
  "duration": 1072001300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cell phones",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iShouldSeeTheTextOnThePage(String)"
});
formatter.result({
  "duration": 41938900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "List View",
      "offset": 16
    }
  ],
  "location": "ElectronicsSteps.iClickOnTheTab(String)"
});
formatter.result({
  "duration": 75710900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iClickOnTheProductNameLink(String)"
});
formatter.result({
  "duration": 2878434300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nokia Lumia 1020",
      "offset": 20
    }
  ],
  "location": "ElectronicsSteps.iCanSeeTheTextOnThePage(String)"
});
formatter.result({
  "duration": 30481300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$349.00",
      "offset": 24
    }
  ],
  "location": "ElectronicsSteps.iShouldSeeThePrice(String)"
});
formatter.result({
  "duration": 24851200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.iChangeTheQuantityTo(int)"
});
formatter.result({
  "duration": 134206800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ADD TO CART",
      "offset": 16
    }
  ],
  "location": "ElectronicsSteps.iClickOnTheButton(String)"
});
formatter.result({
  "duration": 1075375500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 26
    }
  ],
  "location": "ElectronicsSteps.iShouldSeeTheMessageOnTheTopGreenBar(String)"
});
formatter.result({
  "duration": 26408600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iCloseTheBarByClickingOnTheCrossButton()"
});
formatter.result({
  "duration": 1060697500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 18
    },
    {
      "val": "GO TO CART",
      "offset": 47
    }
  ],
  "location": "ElectronicsSteps.iMouseHoverOnAndClickOnButton(String,String)"
});
formatter.result({
  "duration": 2517449600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shopping cart",
      "offset": 36
    }
  ],
  "location": "ElectronicsSteps.iShouldBeAbleToVerifyMessage(String)"
});
formatter.result({
  "duration": 27776400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "ElectronicsSteps.iShouldBeAbleToVerifyQuantity(int)"
});
formatter.result({
  "duration": 26554500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "698",
      "offset": 21
    },
    {
      "val": "00",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.iCanSeeTheTotal$(int,int)"
});
formatter.result({
  "duration": 24970200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnTheCheckboxIAgreeWithTheTermsOfServiceOnPage()"
});
formatter.result({
  "duration": 69152900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnCheckout()"
});
formatter.result({
  "duration": 572745500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 30
    }
  ],
  "location": "ElectronicsSteps.iShouldBeAbleToSeeText(String)"
});
formatter.result({
  "duration": 24283000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnRegisterTab()"
});
formatter.result({
  "duration": 1387217600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldBeAbleToSeeTextRegisterOnRegisterPage()"
});
formatter.result({
  "duration": 35679500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random email",
      "offset": 15
    }
  ],
  "location": "ElectronicsSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 96081800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iFillBelowDetailsInTheRegistrationForm(DataTable)"
});
formatter.result({
  "duration": 288139700,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 2603621900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 33
    }
  ],
  "location": "ElectronicsSteps.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 32586100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 2382302500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 16
    }
  ],
  "location": "ElectronicsSteps.iCanSeeText(String)"
});
formatter.result({
  "duration": 29242900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 345300900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random email",
      "offset": 15
    }
  ],
  "location": "ElectronicsSteps.iEnterEmailIntoEmailField(String)"
});
formatter.result({
  "duration": 100411600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password1",
      "offset": 18
    }
  ],
  "location": "ElectronicsSteps.iEnterPasswordIntoPasswordField(String)"
});
formatter.result({
  "duration": 2104308100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnLogInButton()"
});
formatter.result({
  "duration": 628494200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnTheCheckboxIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 57278100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnTheCheckoutTab()"
});
formatter.result({
  "duration": 1322911100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "random email",
      "offset": 15
    }
  ],
  "location": "ElectronicsSteps.iEnterEmailIntoTheEmailField(String)"
});
formatter.result({
  "duration": 187718100,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iSelectCountryFromDropDown()"
});
formatter.result({
  "duration": 202914400,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iFillBelowDetailsInFormInCheckoutAfterRegistration(DataTable)"
});
formatter.result({
  "duration": 655302200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnContinueTab()"
});
formatter.result({
  "duration": 78618200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2nd Day Air ($0.00)",
      "offset": 25
    }
  ],
  "location": "ElectronicsSteps.iClickOnRadioButton(String)"
});
formatter.result({
  "duration": 3092819900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnContinueFromShippingMethod()"
});
formatter.result({
  "duration": 2073810000,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iSelectRadioButtonCreditCard()"
});
formatter.result({
  "duration": 284641900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnContinueTabFromPaymentMethod()"
});
formatter.result({
  "duration": 63548600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iSelectVisaFromSelectCreditCardDropdown()"
});
formatter.result({
  "duration": 313956900,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iFillBelowDetailsInCreditCardForm(DataTable)"
});
formatter.result({
  "duration": 438558600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnThePaymentContinueButton()"
});
formatter.result({
  "duration": 55659800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Credit Card",
      "offset": 46
    }
  ],
  "location": "ElectronicsSteps.iShouldBeAbleToVerifyPaymentMethodIs(String)"
});
formatter.result({
  "duration": 295350400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2nd Day Air",
      "offset": 30
    }
  ],
  "location": "ElectronicsSteps.iCanSeeShippingMethodIs(String)"
});
formatter.result({
  "duration": 29859500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$698.00",
      "offset": 28
    }
  ],
  "location": "ElectronicsSteps.iCanAbleToVerifyTotal(String)"
});
formatter.result({
  "duration": 26476600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnConfirmButton()"
});
formatter.result({
  "duration": 69881200,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldBeAbleToVerifyTheTextThankYou()"
});
formatter.result({
  "duration": 656153000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your order has been successfully processed!",
      "offset": 23
    }
  ],
  "location": "ElectronicsSteps.iCanSeeTheMessage(String)"
});
formatter.result({
  "duration": 27863600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnTheContinueTab()"
});
formatter.result({
  "duration": 360320100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to our store",
      "offset": 28
    }
  ],
  "location": "ElectronicsSteps.iCanAbleToSeeTheText(String)"
});
formatter.result({
  "duration": 33946600,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iClickOnLogOutLink()"
});
formatter.result({
  "duration": 2592910000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://demo.nopcommerce.com/",
      "offset": 29
    }
  ],
  "location": "ElectronicsSteps.iAmAbleToVerifyTheURL(String)"
});
formatter.result({
  "duration": 5800800,
  "status": "passed"
});
formatter.match({
  "location": "ElectronicsSteps.iShouldBeAbleToAddProductSuccessfullyAndPlacedOrderSuccessfully()"
});
formatter.result({
  "duration": 12500,
  "status": "passed"
});
formatter.after({
  "duration": 700607600,
  "status": "passed"
});
});