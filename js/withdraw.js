document.getElementById('withdraw-btn').addEventListener("click", function() {

    const newWithdrawAmount = getInputFieldValue('withdraw-field');
    // console.log(newDepositAmount);
    const previusWithdrawAmount = getInputElementValue('current-withdraw');
    const totalWithdrawAmoutn = newWithdrawAmount + previusWithdrawAmount;
    const previusBalance = getInputElementValue('current-balance');
    const totalBalance = previusBalance - newWithdrawAmount;
    if (totalBalance < 0) {
        alert("Insuficent Balance!!! Please Check Your Amount")
    } else {
        setValue('current-withdraw', totalWithdrawAmoutn);

        setValue('current-balance', totalBalance);
    }



    // const withdrawField = document.getElementById('withdraw-field');
    // const withdrawAmount = parseFloat(withdrawField.value);

    // const currentWithdrawElement = document.getElementById('current-withdraw');
    // const currentWithdrawAmount = parseFloat(currentWithdrawElement.innerText);

    // const totalWithdrawAmount = withdrawAmount + currentWithdrawAmount;
    // currentWithdrawElement.innerText = totalWithdrawAmount;


    // const currentBalanceElement = document.getElementById('current-balance');
    // const currentBalance = parseFloat(currentBalanceElement.innerText);
    // const totalBalance = currentBalance - withdrawAmount;
    // currentBalanceElement.innerText = totalBalance;

    // // // Clear The withdraw Field
    // withdrawField.value = '';

})