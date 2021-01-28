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

// document.getElementById("case-decrease").addEventListener("click", function() {
//     // console.log("working");
//     const caseInput = document.getElementById("case-count");
//     const caseInputNumber = parseInt(caseInput.value);
//     const caseNewCount = caseInputNumber - 1;
//     caseInput.value = caseNewCount;
//     const caseTotal = caseNewCount * 59;
//     document.getElementById("case-total").innerText = caseTotal;

// });



// document.getElementById("case-increase").addEventListener("click", function() {
//     handleProductChange(true);
// });

// document.getElementById("case-decrease").addEventListener("click", function() {
//     handleProductChange(false);
// });



function handleProductChange(isIncrease) {
    const caseInput = document.getElementById("case-count");
    const caseInputNumber = parseInt(caseInput.value);
    // const caseNewCount = caseInputNumber - 1;
    let caseNewCount = caseInputNumber; //akane const dite partesina karon ai value age pore change hobe.
    if (isIncrease == true) {
        caseNewCount = caseInputNumber + 1;
    }
    if (isIncrease == false && caseInputNumber > 0) {
        caseNewCount = caseInputNumber - 1;
    }
    caseInput.value = caseNewCount;
    const caseTotal = caseNewCount * 59;
    document.getElementById("case-total").innerText = caseTotal;
}