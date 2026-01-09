
function slice(Arr, start = 0, end = Arr.length)
{
    let retArr = [];
    if (!Array.isArray(Arr))
        return -1;
    const len = Arr.length;
    if (start >= len)
        return [];
    if (start < 0)
    {
        start = len + start;
        if (start < 0) {start = 0};
    };
    if (end <= 0) 
    {
        end = len + end;
        if (end < 0) {end = 0};
    };
    for(let i = start; i < end && i < len; i++)
    {
        retArr.push(Arr[i]);
    }
    return retArr;
}

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(slice(animals,2));
// Expected output: Array ["camel", "duck", "elephant"]
console.log(slice(animals,2, 4));
// Expected output: Array ["camel", "duck"]
console.log(slice(animals, 1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(slice(animals,-2));
// Expected output: Array ["duck", "elephant"]
console.log(slice(animals, 2, -1));
// Expected output: Array ["camel", "duck"]
console.log(slice(animals));
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]