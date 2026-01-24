function myMap(Arr, func) 
{
    if (!Array.isArray(Arr) || typeof func !== "function")
        return NaN;

    let newArr = [];
    for (let i = 0; i < Arr.length; i++) 
    {
        if (!(i in Arr)) continue;
            newArr.push(func(Arr[i], i, Arr));
    }
    return newArr;
}


function myFlat(Arr, Depth = 1)
{
    const arrLen = Arr.length;
    let Flattened = []
    for (let i = 0; i < arrLen; i++)
    {
        if (!(i in Arr)) continue;
        if (Array.isArray(Arr[i]) && Depth > 0)
            Flattened.push(...myFlat(Arr[i], Depth-1))
        else 
            Flattened.push(Arr[i]);
    }
    return Flattened;
}

function myFlatMap(Arr, func)
{
    return myFlat(myMap(Arr, func));
}

const arr1 = [0, 1, 2, [3, 4]];
console.log(myFlat(arr1));
// expected output: Array [0, 1, 2, 3, 4]
const arr2 = [0, 1, [2, [3, [4, 5]]]];
console.log(myFlat(arr2));
// expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]
console.log(myFlat(arr2, 2));
// expected output: Array [0, 1, 2, 3, Array [4, 5]]
console.log(myFlat(arr2, Infinity));
// expected output: Array [0, 1, 2, 3, 4, 5]

console.log(myMap([0,1,2,3], (x) => x + 1));

const arr = [1, 2, 1];
const result = myFlatMap(arr, (num) => (num === 2 ? [2, 2] : 1));
console.log(result);
// Expected output: Array [1, 2, 2, 1]

Array.prototype.map = undefined
Array.prototype.flatMap = undefined
Array.prototype.flat = undefined

