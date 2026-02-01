function inchToFeet(inch) {
    const feet = inch / 12;
    const feetNumber = parseInt(feet);
    const inchRemain = inch % 12;
    const result = feetNumber+' feet '+ inchRemain+ " inch";
    return result;
}

console.log(inchToFeet(70));