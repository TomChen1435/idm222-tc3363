// Getting date information for the alert header.

deliveryDate = document.getElementById('delivery-date');
orderDate = document.getElementById('order-date');

/*
    The logic of this section is: 

    1) If it is currently before Friday, log the dates of the upcoming Friday and the following Monday;

    2) If it is currently Friday before 5:00 PM, log "today" and the date of the upcoming Monday;

    3) If it is currently Friday and not earlier than 5:00 PM or anytime on Saturday, log the dates of the following Friday and the Monday after that.

    Case #2 is the most special, as it does not require extra calculations for the period between the current and desired times.

    Case #3 can merge into Case #1 by turning this week's Friday (Day 5) and Saturday (Day 6) into next week's Day -2 and Day -1.
*/

// Find the current date and day of the week.
const dateToday = new Date();
const dayToday = dateToday.getDay();

// The delivery date is needed for both cases.
const dateDelivery = new Date(dateToday);

// Get the current hour and find out if it is currently 5:00 PM or later.
const hourNow = dateToday.getHours();

// If it is currently Friday but before the deadline, it will just be "Order by 5:00 PM today".
if ((dayToday == 5) && (hourNow < 17)) {
    orderDate.innerHTML = 'today';
    // There is a 3-day gap between this Friday and the following Monday
    dateDelivery.setDate(dateToday.getDate() + 3);
}

// If it is not, find the deadline for placing order first.
else {
    /*
        The gap between deadline and the delivery day is still fixed.
        
        The key here is the period between the current date and the deadline. Time cannot be negative, and using the remainder operation can help avoid more complex decisions and simplify the code. 
        
        It doesn't really make sense to have a 0-day time frame, so when it is currently Friday, the result will fallback and become 7.

        JavaScript does not do Euclidean modulus for some reason, so a second remainder operation is needed.
    */
    const dayCount = (((5 - dayToday) % 7) + 7) % 7 || 7;

    const dateOrderDeadline = new Date(dateToday);
    dateOrderDeadline.setDate(dateToday.getDate() + dayCount);
    orderDate.innerHTML = 'on Friday, ' + getDateOutput(dateOrderDeadline);

    dateDelivery.setDate(dateToday.getDate() + dayCount + 3);
}

deliveryDate.innerHTML = getDateOutput(dateDelivery);

// Turn the dates into corresponding strings.
function getDateOutput(iDate) {
    const cYear = iDate.getFullYear();
    const cMonth = iDate.getMonth() + 1;
    const cDate = iDate.getDate();
    // Return a string of "MM/DD/YYYY"
    return `${cMonth}/${cDate}/${cYear}`;
}
