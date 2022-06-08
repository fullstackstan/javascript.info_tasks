// Create a date
// importance: 5
// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.

// Show it using alert.

let date = new Date('2012-01-20 03:12')
alert(date)


// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.

// For instance:

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"

function getWeekDay(date){
    let days = ['SU','MO','TU','WE','TH','FR','SA']
    return days[date.getDay()]
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getWeekDay(date) );        // should output "TU"

//////////////////////////////

// European weekday
// importance: 5
// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getLocalDay(date) );       // tuesday, should show 2

function getLocalDay(date){
    let day = date.getDay()
    if(day==0){
        day = 7
    } return day
}

//////////////////////////////

// Which day of month was many days ago?
// importance: 4
// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. The function should not modify the given date.


function getDateAgo(date, days){
    let dateCopy = new Date(date)
    dateCopy.setDate(date.getDate() - days)
    return dateCopy.getDate();
    
}
let date = new Date(2015, 0, 2);
alert( getDateAgo(date, 1) )