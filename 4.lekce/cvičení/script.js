let totalPrice = 75; // změň hodnotu a testuj různé případy
 
if (totalPrice >=100) {
    let discountedPrice = (totalPrice * 0.7); // 30% sleva = platíš 70%
    console.log(discountedPrice);
}   else {
    let amountNeeded = (100 - totalPrice);
    console.log(`Utrať ještě ${amountNeeded} a získáš 30% slevu!`);
}  