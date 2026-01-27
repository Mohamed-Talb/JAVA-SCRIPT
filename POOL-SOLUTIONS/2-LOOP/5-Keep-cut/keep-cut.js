function slice(Str, start = 0, end = Str.length)
{
    let retStr = '';
    const len = Str.length;
    if (start >= len)
        return "";
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
        retStr += Str[i];
    }
    return retStr;
}

function cutFirst(string)
{
    if (typeof string !== 'string' || string === '')
        return '';
    return slice(string, 2);
}

function cutLast(string)
{
    if (typeof string !== 'string')
        return '';
    return slice(string, 0,-2);
}

function cutFirstLast(string)
{
    if (typeof string !== 'string')
        return '';
    return slice(string, 2,-2);
}

function keepFirst(string)
{
    if (typeof string !== 'string')
        return '';
    return slice(string, 0,2);
}

function keepLast(string)
{
    if (typeof string !== 'string')
        return '';
    return slice(string, -2);
}

function keepFirstLast(string)
{
    if (typeof string !== 'string')
        return '';
    if (string.length <= 4)
        return string;
    return slice(string, 0,2) + slice(string, -2);
}


// console.log(cutFirst("abcdef"));       // "cdef"
// console.log(cutLast("abcdef"));        // "abcd"
// console.log(cutFirstLast("abcdef"));   // "cd"
// console.log(keepFirst("abcdef"));      // "ab"
// console.log(keepLast("abcdef"));       // "ef"
// console.log(keepFirstLast("abcdef"));  // "abef"

// console.log(cutFirst("abcd"));         // "cd"
// console.log(cutLast("abcd"));          // "ab"
// console.log(cutFirstLast("abcd"));     // ""
// console.log(keepFirst("abcd"));        // "ab"
// console.log(keepLast("abcd"));         // "cd"
// console.log(keepFirstLast("abcd"));    // "abcd"

// console.log(cutFirst("ab"));            // ""
// console.log(cutLast("ab"));             // ""
// console.log(cutFirstLast("ab"));        // ""
// console.log(keepFirst("ab"));           // "ab"
// console.log(keepLast("ab"));            // "ab"
// console.log(keepFirstLast("ab"));       // "abab"

// console.log(cutFirst("a"));             // ""
// console.log(cutLast("a"));              // ""
// console.log(cutFirstLast("a"));         // ""
// console.log(keepFirst("a"));            // "a"
// console.log(keepLast("a"));             // "a"
// console.log(keepFirstLast("a"));        // "aa"

// console.log(cutFirst(""));              // ""
// console.log(cutLast(""));               // ""
// console.log(cutFirstLast(""));          // ""
// console.log(keepFirst(""));             // ""
// console.log(keepLast(""));              // ""
// console.log(keepFirstLast(""));         // ""
