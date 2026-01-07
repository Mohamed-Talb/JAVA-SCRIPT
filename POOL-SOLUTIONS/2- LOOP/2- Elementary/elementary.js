
function multiply(a, b) 
{
    if (typeof a !== 'number' || typeof b !== 'number')
         return NaN;
    let result = 0;
    let positive = (b >= 0);
    for (let i = 0; i < Math.abs(b); i++) 
    {
        result += a;
    }
    return positive ? result : -result;
}


function divide(a, b) 
{
    if (typeof a !== 'number' || typeof b !== 'number') return NaN;
    if (b === 0) 
        return a >= 0 ? Infinity : -Infinity;
    let quotient = 0;
    let dividend = Math.abs(a);
    let divisor = Math.abs(b);
    while (dividend >= divisor) 
    {
        dividend -= divisor;
        quotient++;
    }
    if ((a > 0 && b > 0) || (a < 0 && b < 0))
        return quotient;
    return -quotient;
}

function modulo(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') 
        return NaN;
    if (b === 0) 
        return NaN;
    let dividend = Math.abs(a);
    let divisor = Math.abs(b);
    while (dividend >= divisor) 
    {
        dividend -= divisor;
    }
    if (a < 0)
        return -dividend;
    return dividend;
}


console.log(multiply(5, -3));   // -15
console.log(divide(17, 4));     // 4
console.log(modulo(17, 4));     // 1
console.log(divide(-17, 0));    // -Infinity
console.log(divide(0, 0));      // Infinity
console.log(modulo(5, 0));      // NaN
console.log(multiply("a", 3));  // NaN
