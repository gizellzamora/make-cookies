/********************************

        COOKIE clicker

********************************/
//defaults
let cookieCount = 0;
let clickPower = 1;

//DOM decleration
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
  cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    cookieCounter.innerHTML = cookieCount;
  })

  //defaults
  let clickPowerPriceAmount = 10;
  let clickPowerLevelNumber = 1;

/********************************

        Click Power

********************************/
//buy click power
  buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
    //subtract cookies from the price of the item
    cookieCount -= clickPowerPriceAmount;
    refreshCookieCount()

    //update power level
    clickPowerLevelNumber += 1;

    //update click shop
    clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);

    //refresh item shop
    refreshPowerClick();

    cookieCounter.innerHTML = cookieCount;
    console.log("Item succesfully Bought");
  } else {
    console.log("You don't have enough cookies!");
    }
  })

  let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
    clickPowerLevel.innerHTML = clickPowerLevelNumber;
  }

  //everytime a user clicks the button, their cookies are increased by the value of their clickPower.
  cookieClicker.addEventListener("click", function() {
    cookieCount = cookieCount + clickPower;
    console.log(clickPower);
    refreshCookieCount();
  })

let refreshPowerClick = function() {
  clickPowerLevel.innerHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
  }

/********************************

          Grandmas

********************************/
//set default values
let grandmaAuto = false;
let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;

//declare DOM variables
let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

//buy a grandma
buyGrandma.addEventListener("click", function() {

  //make sure we have enough cookies and subtract our cookies from the price
  if (cookieCount >= grandmaPriceAmount) {
     // Subtract cookies from the price of the item.
     cookieCount +=  - grandmaPriceAmount;
     refreshCookieCount()
   }
    //upgrade power level
  grandmaLevelNumber += 1;
    //update price
  grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
    //update grandma power
  grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
    //turn autoGrandma on!
    let autoGrandma = true;
    autoGrandmaStart();

    //refresh shop item
    refreshGrandma();

  });

    let refreshGrandma = function() {
    grandmaLevel.innerHTML = grandmaLevelNumber
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower;
    grandmaMultiple.innerHTML = grandmaPower - 10;
  };

  let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
    }, 1000);
  }

  /********************************

            Facilities

  ********************************/

  //set default values
  let facilityAuto = false;
  let facilityPower = 2000;
  let facilityPriceAmount = 100000;
  let facilityLevelNumber = 0;
  //declare DOM variables
  let buyFacility = document.getElementById('buy-facility');
  let facilityPrice = document.getElementById('facility-price');
  let facilityLevel = document.getElementById('facility-level');
  let facilityMultiple = document.getElementById('facility-multiple');

  //buy a facility
  buyFacility.addEventListener("click", function() {
      //set autoLoop to false
      facilityAuto = false;

      //make sure we have enough cookies
      if (cookieCount >= facilityPriceAmount) {
        cookieCount -= facilityPriceAmount;
        refreshCookieCount()
    //upgrade power level
    facilityLevelNumber += 1;

    //update price
    facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);

    //update facility power
    facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);

    //turn autoFacility on!
    facilityAuto = true
    autoFacilityStart();

    //refresh shop item
    refreshFacility();

  //game loop
  let autoFacilityStart = function() {
      let facilityInt = window.setInterval(function(){
        cookieCount += facilityPower;
        refreshCookieCount();
      }, 1000);
  }
  //refresh shop
  let refreshFacility = function() {
    facilityLevel.innerHTML = facilityLevelNumber
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
  }

    }
  })
