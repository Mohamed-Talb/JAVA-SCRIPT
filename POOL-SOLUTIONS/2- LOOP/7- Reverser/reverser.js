function reverser(Arg)
{
    let len = Arg.length - 1;
    if (Array.isArray(Arg))
    {
        let tmp;
        for (let i = 0; i <= len / 2; i++)
        {
            tmp = Arg[i];
            Arg[i] = Arg[len-i];
            Arg[len - i] = tmp;
        }
        return Arg;
    }
    else if (typeof Arg === "string")
    {
        let retStr = "";
        for (let i = len; i >= 0; i--)
        {
            retStr += Arg[i];
        }
        return retStr;
    }
    return NaN;
}

const array = ["one", "two", "three"];
console.log("array:", array);
// Expected output: "array:" Array ["one", "two", "three"]

const reversedArr = reverser(array);
console.log("reversed:", reversedArr);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log("array:", array);
// Expected output: "array:" Array ["three", "two", "one"]

const string = "Mohamed";

console.log("string:", string);
// Expected output: "string:" "Mohamed"

const reversedStr = reverser(string);
console.log("reversed:", reversedStr);
// Expected output: "reversed:" "demahoM"

// Strings are NOT destructive (they are immutable)
console.log("string:", string);
// Expected output: "string:" "Mohamed"
