function inchToFeet(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchRemain = inch % 12;
    const result = feetNumber+' feet '+ inchRemain+ " inch";
    return result;
}

console.log(inchToFeet(70));


function mileToKm(mile) {
    const km = mile * 1.60934;
    return km;
}

console.log(mileToKm(10));