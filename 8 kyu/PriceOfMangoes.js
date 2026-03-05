// Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
// But! Every third mango is free!

//My solution

function mango(qty, price) {
    const freeQty = Math.floor(qty / 3);
    const totalCost = (qty - freeQty) * price;
    return totalCostß
}