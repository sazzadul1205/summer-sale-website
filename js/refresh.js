function OnClick() {
    const totalAmountField = document.getElementById('Total-Price');
    totalAmountField.innerText = '00.00';
    
    const discountField = document.getElementById('Discount-price');
    discountField.innerText = '00.00';
    
    const TotalField = document.getElementById('Final-Total-Price');
    TotalField.innerText = '00.00';
    
    const ListItems = document.getElementById('Shopping-List');
    ListItems.innerHTML = '';
    
    const couponInput = document.getElementById('coupon-input');
    couponInput.value = '';

    totalAmount = 0;

    updateCouponButtonStatus();
    
    makePurchaseButton.setAttribute('disabled', 'true');
}

