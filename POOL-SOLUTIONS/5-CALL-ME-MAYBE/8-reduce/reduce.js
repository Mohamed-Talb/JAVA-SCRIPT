
function fold(Arr, func, Accumulator)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    for (const item of Arr)
        Accumulator = func(Accumulator, item);
    return Accumulator;
}

function foldRight(Arr, func, Accumulator)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    for (let i = Arr.length-1; i >= 0; i--)
        Accumulator = func(Accumulator, Arr[i]);
    return Accumulator;
}

function reduce(Arr, func, initValue)
{
    if (!Array.isArray(Arr) || typeof func !== "function" || Arr.length < 1)
        throw new Error("Invalid reduce Arguments");
    Accumulator = initValue;
    if (initValue == undefined)
        Accumulator = Arr[0];
    for (const item of Arr)
        Accumulator = func(Accumulator, item);
    return Accumulator;
}

function reduce(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function" || Arr.length < 1)
        throw new Error("Invalid reduce Arguments");
    let acc = Arr[0];
    for (const item of Arr)
        acc = func(acc, item);
    return acc;
}

function reduceRight(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function" || Arr.length < 1)
        throw new Error("Invalid reduce Arguments");
    let acc = Arr[Arr.length - 1];
    for (let i = Arr.length - 2; i >= 0; i--)
        acc = func(acc, Arr[i]);
    return acc;
}


const adder = (a, b) => a + b;

try {
    console.log(fold([1,2,3], adder, 2));        // -> 8
    console.log(foldRight([1,2,3], adder, 2));   // -> 8
    console.log(reduce([1,2,3], adder));         // -> 6
    console.log(reduceRight([1,2,3], adder));    // -> 6
} catch(err)
{
    console.log(err);
}
