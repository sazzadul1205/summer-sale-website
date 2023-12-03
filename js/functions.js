// Reusable functions
function ListEntry(ItemField, ItemName, ItemValue) {
    const ListItems = document.getElementById(ItemField);
    const count = ListItems.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-2');
    p.innerHTML = `${count + 1} ${ItemName} ${ItemValue}`;
    ListItems.appendChild(p);
}

function PlaceMoney(price) {
    const TotalField = document.getElementById('Total-Price');
    TotalField.innerText = price;
}

function TotalPrice(price) {
    const TotalField = document.getElementById('Final-Total-Price');
    TotalField.innerText = price;
}
const makePurchaseButton = document.getElementById('go-home-btn');

let totalAmount = 0;

function updateTotalAmount(price) {
    totalAmount += parseFloat(price);
    PlaceMoney(totalAmount.toFixed(2));
    TotalPrice(totalAmount.toFixed(2));
    
    if (totalAmount > 0) {
        makePurchaseButton.removeAttribute('disabled');
    }
    updateCouponButtonStatus();
}

// coupon section
const couponButton = document.getElementById('coupon-btn');
const totalAmountLimit = 200;

document.getElementById('coupon-btn').addEventListener('click', function () {
    const couponInput = document.getElementById('coupon-input');
    const couponName = couponInput.value;

    if (couponName === 'SELL200' && totalAmount >= totalAmountLimit) {
        const discountAmount = totalAmount * 0.2;
        totalAmount -= discountAmount;
        const discountField = document.getElementById('Discount-price');
        discountField.innerText = discountAmount.toFixed(2);
        TotalPrice(totalAmount.toFixed(2));
        updateCouponButtonStatus();
    } else if (couponName !== 'SELL200') {
        alert('Invalid Coupon Code');
    }
});

function updateCouponButtonStatus() {
    if (totalAmount >= totalAmountLimit) {
        couponButton.removeAttribute('disabled');
    } else {
        couponButton.setAttribute('disabled', 'true');
    }
}

updateCouponButtonStatus();
