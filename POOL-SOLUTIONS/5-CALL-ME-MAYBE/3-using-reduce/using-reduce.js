function adder(Arr)
{
    const sumV = Arr.reduce((accumulator, currentValue) => accumulator + currentValue)
    return sumV;
}

function sumOrMul(Arr, initV)
{
    const reducer = (accumulator, currentValue) =>
    {
        if (currentValue % 2 == 0)
            accumulator *= currentValue;
        else
            accumulator += currentValue;
        return accumulator;
    } 
    const retV = Arr.reduce(reducer, initV)
    return retV;
}

function funcExec(Arr)
{
    const reducer = (accumulator, apply) => apply(accumulator)
    const retV = Arr.reduce(reducer, 8);
    return retV;
}

const pipeline = [
  (x) => x + 1,
  (x) => x * 2,
  (x) => x / 3
];

const array = [1, 2, 3, 4];
console.log(adder(array))
console.log(sumOrMul([1, 2, 3, 5, 8], 5)) // (((((5 + 1) * 2) + 3) + 5) * 8) -> 160
console.log(funcExec(pipeline)) // 6