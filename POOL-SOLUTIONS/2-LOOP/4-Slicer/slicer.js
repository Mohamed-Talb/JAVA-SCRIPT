
function slice(Arg, start = 0, end = Arg.length)
{
    let retArg = [];
    let isString = true;
    const len = Arg.length;
    if (!Array.isArray(Arg) && typeof Arg != "string")
        return -1
    if (Array.isArray(Arg))
        isString = false;
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
        if (isString == false)
            retArg.push(Arg[i]);
        else
            retArg += Arg[i];
    }
    return retArg;
}

// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(slice(animals,2));
// // Expected output: Argay ["camel", "duck", "elephant"]
// console.log(slice(animals,2, 4));
// // Expected output: Argay ["camel", "duck"]
// console.log(slice(animals, 1, 5));
// // Expected output: Argay ["bison", "camel", "duck", "elephant"]
// console.log(slice(animals,-2));
// // Expected output: Argay ["duck", "elephant"]
// console.log(slice(animals, 2, -1));
// // Expected output: Argay ["camel", "duck"]
// console.log(slice(animals));
// // Expected output: Argay ["ant", "bison", "camel", "duck", "elephant"]

console.log(slice('abcdef', 2))