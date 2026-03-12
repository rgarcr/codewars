// Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"

//My solution

function whatday(num) {
    let day = '';
    switch (num) {
        case 1:
            day = 'Sunday';
            break;
        case 2:
            day = 'Monday';
            break;
        case 3:
            day = 'Tuesday';
            break;
        case 4:
            day = 'Wednesday';
            break;
        case 5:
            day = 'Thursday';
            break;
        case 6:
            day = 'Friday';
            break;
        case 7:
            day = 'Saturday';
            break;
        default:
            day = 'Wrong, please enter a number between 1 and 7';
    }
    return day;
}