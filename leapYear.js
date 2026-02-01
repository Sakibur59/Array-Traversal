function leapYear(year){
    if(year % 100 !== 0 && year % 4===0){
        return true;
    }
    return false;
}

console.log(leapYear(2024));