


var fractionToDecimal = function (numerator, denominator): string {
    const quotient = numerator / denominator;
    if (Number.isInteger(quotient)) {
        return quotient.toString();
    }
    const strings = quotient.toString().split('.');
    for (let i = 0; i < strings.length; i++) {

    }
    Math.sign

};

console.log(fractionToDecimal(1, 2)); // 0.5
console.log(fractionToDecimal(1, 2)); // 2
console.log(fractionToDecimal(1, 2)); // 0.(6)
