// Kitchenware
// card-1
document.getElementById('card-K1-item').addEventListener('click', function () {
    const Name = 'K. Accessories';
    const OrgPrice = 39.00;
    const Price = parseFloat(OrgPrice).toFixed(2);

    ListEntry('Shopping-List', Name, Price);
    updateTotalAmount(Price);
    updateCouponButtonStatus();
});

// card-2
document.getElementById('card-K2-item').addEventListener('click', function () {
    const Name = 'K. Accessories';
    const OrgPrice = 25.00;
    const Price = parseFloat(OrgPrice).toFixed(2);

    ListEntry('Shopping-List', Name, Price);
    updateTotalAmount(Price);
    updateCouponButtonStatus();
});

// card-3
document.getElementById('card-K3-item').addEventListener('click', function () {
    const Name = 'Home Cooker';
    const OrgPrice = 49.00;
    const Price = parseFloat(OrgPrice).toFixed(2);

    ListEntry('Shopping-List', Name, Price);
    updateTotalAmount(Price);
    updateCouponButtonStatus();
});

// Furniture
// card-1
document.getElementById('card-F1-item').addEventListener('click', function () {
    const Name = 'Single Relax Chair';
    const OrgPrice = 185.00;
    const Price = parseFloat(OrgPrice).toFixed(2);

    ListEntry('Shopping-List', Name, Price);
    updateTotalAmount(Price);
    updateCouponButtonStatus();
});

// card-2
document.getElementById('card-F2-item').addEventListener('click', function () {
    const Name = 'Children play';
    const OrgPrice = 299.00;
    const Price = parseFloat(OrgPrice).toFixed(2);

    ListEntry('Shopping-List', Name, Price);
    updateTotalAmount(Price);
    updateCouponButtonStatus();
});

// card-3
document.getElementById('card-F3-item').addEventListener('click', function () {
    const Name = 'Flexible Sofa';
    const OrgPrice = 339.00;
    const Price = parseFloat(OrgPrice).toFixed(2);

    ListEntry('Shopping-List', Name, Price);
    updateTotalAmount(Price);
    updateCouponButtonStatus();
});


PlaceMoney(totalAmount.toFixed(2));
TotalPrice(totalAmount.toFixed(2));
