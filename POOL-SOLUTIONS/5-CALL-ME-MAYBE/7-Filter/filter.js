function myFilter(Arr, func) 
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        return undefined;
    let newArr = [];
    for (let i = 0; i < Arr.length; i++) 
    {
        if (func(Arr[i], i, Arr))
            newArr.push(Arr[i]);
    }
    return newArr;
}

function reject(Arr, func) 
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        return undefined;
    let newArr = [];
    for (let i = 0; i < Arr.length; i++) 
    {
        if (!func(Arr[i], i, Arr))
            newArr.push(Arr[i]);
    }
    return newArr;
}

function partition(Arr, func)
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        return undefined;
    return [myFilter(Arr, func), reject(Arr, func)]
}

const a = [{x:1}, {x:2}, {x:3}];
const b = myFilter(a, (obj) => obj.x > 1);
console.log(b);
// → [{x:2}, {x:3}]
console.log(reject(a, (obj) => obj.x > 1))
console.log(partition(a, (obj) => obj.x > 1))
b[0].x = 999;
console.log(a);
// → [{x:1}, {x:999}, {x:3}]
