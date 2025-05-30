// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

//My Solution


function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    let currDate = new Date(currentDate);
    let exprDate = new Date(expirationDate)

    let cYear = currDate.getFullYear();
    let cMonth = currDate.getMonth();
    let cDate = currDate.getDate();

    let eYear = exprDate.getFullYear();
    let eMonth = exprDate.getMonth();
    let eDate = exprDate.getDate();

    if (enteredCode === correctCode) {
        return (cYear < eYear || (cYear === eYear && cMonth < eMonth) ||
            cYear === eYear && cMonth === eMonth && cDate <= eDate)
    }
    else
        return false
}