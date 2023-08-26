

function totalPriceAll(isIncrease) {
    const phoneNumberField = document.getElementById('number-field');
    const phoneNumberFieldString = phoneNumberField.value;
    const phoneNumberFieldAmount = parseFloat(phoneNumberFieldString);


    let newValue;
    if (isIncrease === true) {
        newValue = phoneNumberFieldAmount + 1;
    }
    else {
        newValue = phoneNumberFieldAmount - 1
    }

    phoneNumberField.value = newValue
    return newValue;
};

//Function ar moddhe call kore diyeci 

function updateTotalPriceAll(newValue) {
    const caseTotalAmount = newValue * 1219;
    const totalGetElementDollar = document.getElementById('phone-total');
    totalGetElementDollar.innerText = caseTotalAmount;
};

//calculate Total Plus and minus Ar ta jonno
function phoneTotalElementID(calculatePhoneId) {

    const phoneSubTotal = document.getElementById(calculatePhoneId);
    const currentTotalString = phoneSubTotal.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}
//set tax calculate
function setTotalTextAmountId(texAmount , value) {

    const subTotalAmount = document.getElementById(texAmount);
    subTotalAmount.innerText = value;
}

function calculateTotalValue() {
    const currentPhoneTotal = phoneTotalElementID('phone-total');
    const currentCaseTotal = phoneTotalElementID('case-total');

    const CurrentSubTotalAmount = currentPhoneTotal + currentCaseTotal;
    // const subTotalAmount = document.getElementById('sub-total');
    // subTotalAmount.innerText = CurrentSubTotalAmount;

    setTotalTextAmountId('sub-total', CurrentSubTotalAmount );

    //Tax: calculate 
    const taxAmountSting = (CurrentSubTotalAmount * 0.1).toFixed(2);
    const  taxAmount = parseFloat(taxAmountSting);

    setTotalTextAmountId('text-total',taxAmount );

    //final amount ar jonno 

    const finalAmount =  CurrentSubTotalAmount + taxAmount ;
    setTotalTextAmountId('total-amount', finalAmount );
}
document.getElementById('btn-iphone-plus').addEventListener('click', function () {

    // const phoneNumberField = document.getElementById('number-field');
    // const phoneNumberFieldString = phoneNumberField.value;
    // const phoneNumberFieldAmount = parseFloat(phoneNumberFieldString);
    //   console.log(phoneNumberFieldAmount);

    // const newCaseNumber = phoneNumberFieldAmount + 1;
    // phoneNumberField.value = newCaseNumber;

    // const totalAmount = newCaseNumber * 1219;
    // const totalDollar = document.getElementById('phone-total');
    // totalDollar.innerText = totalAmount;

    //Function ar modde call kore diyeci 
    const newValue = totalPriceAll(true);

    //Function ar modde call kore diyeci 
    updateTotalPriceAll(newValue);

    //calculate Total Plus and minus Ar ta jonno

    // const currentPhoneTotal = phoneTotalElementID('phone-total');
    // const currentCaseTotal = phoneTotalElementID('case-total');

    // const CurrentSubTotalAmount = currentPhoneTotal + currentCaseTotal;
    // const subTotalAmount = document.getElementById('sub-total');
    // subTotalAmount.innerText = CurrentSubTotalAmount;

  

    // const phoneSubTotal = document.getElementById('phone-total');
    // const currentTotalString = phoneSubTotal.innerText;
    // const currentTotal = parseInt(currentTotalString);

    //calculate Total Plus and minus Ar ta jonno
    calculateTotalValue();

});

document.getElementById('btn-iPhone-minus').addEventListener('click', function () {

    // const phoneNumberFieldMinus = document.getElementById('number-field');
    // const phoneNumberFieldStringMinus = phoneNumberFieldMinus.value;
    // const phoneNumberFieldAmountMinus = parseFloat(phoneNumberFieldStringMinus);
    // //   console.log(phoneNumberFieldAmount);

    // const newCaseNumberMinus = phoneNumberFieldAmountMinus - 1;
    // phoneNumberFieldMinus.value = newCaseNumberMinus;

    // const totalAmountMinus = newCaseNumberMinus * 1219;
    // const totalDollarMinus = document.getElementById('phone-total');
    // totalDollarMinus.innerText = totalAmountMinus;

    const newValue = totalPriceAll(false);

    //Function ar modde call kore diyeci 
    updateTotalPriceAll(newValue);

    //calculate Total Plus and minus Ar ta jonno
    calculateTotalValue();



});


