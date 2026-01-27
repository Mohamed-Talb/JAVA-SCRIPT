const add4 = '+4'
const mul2 = '*2'

function findExpression(number) 
{
    let value = 1;
    let expr = "1";

    while (value < number) 
    {
        if (value * 2 < number) 
        {
            value *= 2;
            expr += mul2;
        } else if (value + 4 <= number) 
        {
            value += 4;
            expr += add4;
        } else 
            return undefined;
    }
    return value === number ? expr : undefined;
}

console.log(findExpression(16));