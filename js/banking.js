// handle deposit event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    // get deposit amount 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // set deposit amount 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    // add previous and current deposit 
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    // clear deposit field 
    depositInput.value = '';

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
});
// handle withdraw event handler 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw amount 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    // set withdraw amount 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // add previous and current withdraw 
    const newWithdrawTotal = previousWithdrawTotal + withdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update account balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);

    const newBalanceTotal = previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input 
    withdrawInput.value = '';

});