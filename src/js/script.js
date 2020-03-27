console.log('script.js connection');

today = new Date();
syear = today.getFullYear();
sMonth = today.getMonth();
sDate = today.getDate();
totalDays = 0;


function checkLeapYear() {
    return (((syear % 4 == 0) && (syear % 100 != 0)) || (syear % 400 == 0))
}

function lastDate(selectedMonth) {
    lastDate31 = [1,3,5,7,8,10,12];
    lastDate30 = [4,6,9,11];
    lastDateOfMonth = 0;

    if (lastDate31.includes(selectedMonth))
        lastDateOfMonth = 31;
    else if (lastDate30.includes(selectedMonth))
        lastDateOfMonth = 30;
    else
        lastDateOfMonth = checkLeapYear ? 29 : 28;
    return lastDateOfMonth;
}

function suffixSetter() {
    stringDate = totalDays.toString();
    endNumber = stringDate.substring(stringDate.length - 1 , stringDate.length);
    suffix = "th";
    if (endNumber == 1 && totalDays!=11) {
        suffix = "st";
    } 
    else if (endNumber == 2 && totalDays!=12) {
        suffix = "nd";
    } 
    else if (endNumber == 3 && totalDays!=13) {
        suffix = "rd";
    }
    return suffix;
}



dateCounter();
function dateCounter() {
    for(i=1;i<=sMonth;i++){
        totalDays = totalDays + lastDate(i);
    }
    totalDays = totalDays + sDate;
    suffix = suffixSetter();
    document.getElementById('daysCount').innerHTML = totalDays;
    document.getElementById('daysSuffix').innerHTML = suffix;
    daysLeft = (checkLeapYear ? 366 : 365) - totalDays;
    document.getElementById('daysLeft').innerHTML = daysLeft;
}