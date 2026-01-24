function every(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    const arrLen = Arr.length;
    let every = true;
    for (let i = 0; i < arrLen; i++)
        every = every && func(Arr[i], i, Arr);
    return every;
}

function some(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    const arrLen = Arr.length;
    let some = false;
    for (let i = 0; i < arrLen; i++)
        some = some || func(Arr[i], i, Arr);
    return some;
}

function none(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        throw new Error("Invalid reduce Arguments");
    const arrLen = Arr.length;
    let none = true;
    for (let i = 0; i < arrLen; i++)
    {
        if (func(Arr[i], i, Arr))
            return false
    }
    return none;
}

const arr = [2, 6, 4];
const arr1 = [2, 5, 4, 3];

const func = x => x % 2 == 0;

console.log(every(arr, func));
console.log(every(arr1, func));

console.log(some(arr1, func));
console.log(some([3,5,7], func));

console.log(none(arr1, func));
console.log(none([3,5,7], func));

// console.log([].every(func));
// console.log([].some(func));
