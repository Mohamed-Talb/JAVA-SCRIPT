function split(string, Sep, limit) {
    if (typeof string !== "string") return "invalid Argument";

    if (limit === 0) return [];
    if (Sep === undefined) return [string];
    Sep = String(Sep);
    if (Sep === "") 
    {
        const out = [];
        let max;
        if (limit === undefined) {max = string.length;} 
        else {max = Math.min(limit, string.length);}
        for (let i = 0; i < max; i++) 
            out.push(string[i]);
        return out;
    }
    const newArr = [];
    let curStr = "";
    const strLen = string.length;
    const sepLen = Sep.length;
    for (let i = 0; i < strLen; ) 
    {
        if (limit !== undefined && newArr.length === limit - 1) 
        {
            curStr += string.slice(i);
            i = strLen;
            break;
        }
        if (string.slice(i, i + sepLen) === Sep) 
        {
            newArr.push(curStr);
            curStr = "";
            i += sepLen;
            continue;
        }
        curStr += string[i];
        i++;
    }
    if (limit === undefined || newArr.length < limit) 
        newArr.push(curStr);
    return newArr;
}


function join(Arr, sep = ',')
{
    const arrLen = Arr.length;
    if (arrLen == 0)
        return "";
    let elemLen;
    let retStr = "";
    for (let i = 0; i < arrLen; i++)
    {
        elemLen = Arr[i].length;
        for (let j = 0; j < elemLen; j++)
        {
            retStr += Arr[i][j];
        }
        if (i != arrLen - 1)
            retStr += sep;
    }
    return retStr;
}


console.log(split("a,b,c", ",")); // Array ["a", "b", "c"]
console.log(split("one two three", " ")); // Array ["one", "two", "three"]
console.log(split("Mohamed", "")); // Array ["M", "o", "h", "a", "m", "e", "d"]
console.log(split("no-separator-here", "|")); // Array ["no-separator-here"]
console.log(split("ends-with-", "-")); // Array ["ends", "with", ""]
console.log(split("-starts-with", "-")); // Array ["", "starts", "with"]
console.log(split("double--dash", "-")); // Array ["double", "", "dash"]
console.log(join(["a", "b", "c"], ",")); // "a,b,c"

console.log(join(["one", "two", "three"], " ")); // "one two three"
console.log(join(["M", "o", "h", "a", "m", "e", "d"], "")); // "Mohamed"
console.log(join(["single"], "-")); // "single"
console.log(join([], ",")); // ""
console.log(join(["", "", ""], "-")); // "--"
