//First Plus button handler for Phone caseing

// document.getElementById("case-increase").addEventListener("click", function() {
//     // console.log("working");

//     const caseInput = document.getElementById("case-count");
//     const caseInputNumber = parseInt(caseInput.value);
//     // console.log(caseInputNumber);
//     const caseNewCount = caseInputNumber + 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// });

//First minus button handler for phone casing

// document.getElementById("case-decrease").addEventListener("click", function() {
//     // console.log("working");
//     const caseInput = document.getElementById("case-count");
//     const caseInputNumber = parseInt(caseInput.value);
//     const caseNewCount = caseInputNumber - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;

// });


// here I am passing True false perameter

// document.getElementById("case-increase").addEventListener("click", function() {
//     handleProductChange(true);
// });

// document.getElementById("case-decrease").addEventListener("click", function() {
//     handleProductChange(false);
// });



function handleProductChange(product, isIncrease) {
    // const productInput = document.getElementById(product + "-count");

    const productInputNumber = getInputValue(product);

    // const caseNewCount = caseInputNumber - 1;
    let productNewCount = productInputNumber; //akane const dite partesina karon ai value age pore change hobe tai.
    if (isIncrease == true) {
        productNewCount = productInputNumber + 1;
    }
    if (isIncrease == false && productInputNumber > 0) {
        productNewCount = productInputNumber - 1;
    }
    document.getElementById(product + '-count').value = productNewCount;
    // productInput.value = productNewCount;
    // const productTotal = productNewCount * 59;
    let productTotal = 0;
    if (product == "phone") {
        productTotal = productNewCount * 1219;
    }
    if (product == "case") {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + "-total").innerText = productTotal;
    calculateTotal();
}

function calculateTotal() {

    // const phoneInput = document.getElementById("phone-count");
    // const phoneInputNumber = parseInt(phoneInput.value);

    // const caseInput = document.getElementById("case-count");
    // const caseInputNumber = parseInt(caseInput.value);

    const phoneInputNumber = getInputValue("phone");

    const caseInputNumber = getInputValue("case");

    const totalPrice = phoneInputNumber * 1219 + caseInputNumber * 59;

    document.getElementById("total-price").innerText = totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = tax;
    const grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = grandTotal;
}

function getInputValue(product) {

    const productInput = document.getElementById(product + "-count");
    const productInputNumber = parseInt(productInput.value);
    return productInputNumber;
}

//using function for reduce duplicacy 

// function handleProductChange(isIncrease) {
//     const caseInput = document.getElementById("case-count");
//     const caseInputNumber = parseInt(caseInput.value);
//     // const caseNewCount = caseInputNumber - 1;
//     let caseNewCount = caseInputNumber; //akane const dite partesina karon ai value age pore change hobe tai.
//     if (isIncrease == true) {
//         caseNewCount = caseInputNumber + 1;
//     }
//     if (isIncrease == false && caseInputNumber > 0) {
//         caseNewCount = caseInputNumber - 1;
//     }
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;
// }


//using function for reduce duplicacy 

// function handlePhoneChange(isIncrease) {
//     const phoneInput = document.getElementById("phone-count");
//     const phoneInputNumber = parseInt(phoneInput.value);
//     // const phoneNewCount = phoneInputNumber - 1;
//     let phoneNewCount = phoneInputNumber; //akane const dite partesina karon ai value age pore change hobe tai.
//     if (isIncrease == true) {
//         phoneNewCount = phoneInputNumber + 1;
//     }
//     if (isIncrease == false && phoneInputNumber > 0) {
//         phoneNewCount = phoneInputNumber - 1;
//     }
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;
// }


//Second Plus button handler for Phone

// document.getElementById("phone-increase").addEventListener("click", function() {
//     // console.log("button working");
//     const phoneInput = document.getElementById("phone-count");
//     const phoneInputNumber = parseInt(phoneInput.value);
//     const phoneNewCount = phoneInputNumber + 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;

// });


//Second Minus button handler for Phone

// document.getElementById("phone-decrease").addEventListener("click", function() {
//     // console.log("working");
//     const phoneInput = document.getElementById("phone-count");
//     const phoneInputNumber = parseInt(phoneInput.value);
//     const phoneNewCount = phoneInputNumber - 1;
//     phoneInput.value = phoneNewCount;
//     const phoneTotal = phoneNewCount * 1219;
//     document.getElementById("phone-total").innerText = phoneTotal;

// });