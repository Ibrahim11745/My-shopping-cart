

function updateNumber(isIncrease) {

    const caseNumberField = document.getElementById('case-number-field');

    const caseNumberFieldString = caseNumberField.value;
    const previousCaseNumberField = parseInt(caseNumberFieldString);

    let newCaseNumber;
    if (isIncrease === true) {
        newCaseNumber = previousCaseNumberField + 1;
    }

    else {
        newCaseNumber = previousCaseNumberField - 1;
    }

    caseNumberField.value = newCaseNumber;

    return newCaseNumber;

};
//Function ar modde call kore diyeci 

function updateTotalPrice(newCaseNumber) {
    const caseTotalAmount = newCaseNumber * 59;
    const totalGetElementDollar = document.getElementById('case-total');
    totalGetElementDollar.innerText = caseTotalAmount;


};


document.getElementById('btn-case-plus').addEventListener('click', function () {

    // console.log('case button update')

    // const caseNumberField = document.getElementById('case-number-field');

    // const caseNumberFieldString = caseNumberField.value;
    // const previousCaseNumberField = parseInt(caseNumberFieldString);
    // // console.log(previousCaseNumberField)

    // const newCaseNumber = previousCaseNumberField + 1;
    // caseNumberField.value = newCaseNumber;

    // const caseTotalAmount = newCaseNumber * 59;
    // const totalGetElementDollar = document.getElementById('case-total');
    // totalGetElementDollar.innerText = caseTotalAmount;

    //Function ar modde call kore diyeci 
    const newCaseNumber = updateNumber(true);

    //Function ar modde call kore diyeci 
    updateTotalPrice(newCaseNumber);

    //calculate Total Plus and minus Ar ta jonno
    calculateTotalValue();


});

document.getElementById('btn-case-minus').addEventListener('click', function () {

    // const minusField = document.getElementById('case-number-field');
    // const minusFieldString = minusField.value;
    // const previousMinusField = parseInt (minusFieldString);

    // const minusCaseNumber = previousMinusField - 1;
    // minusField.value = minusCaseNumber;

    // const caseTotalAmount =  newCaseNumber * 59;
    // const totalGetElementDollar = document.getElementById('case-total');
    // totalGetElementDollar.innerText = caseTotalAmount;


    //Function ar modde call kore diyeci 
    const newCaseNumber = updateNumber(false);


    //Function ar modde call kore diyeci 
    updateTotalPrice(newCaseNumber);

    //calculate Total Plus and minus Ar ta jonno
    calculateTotalValue();
});