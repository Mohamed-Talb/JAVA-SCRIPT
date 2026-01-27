function indexOf(array, value, fromIndex) 
{
    if (!Array.isArray(array))
        return -1;
    var start; 
    if (fromIndex === undefined)
        start = 0;
    else if (fromIndex >= 0)
        start = fromIndex;
    else
    {
        start = array.length + fromIndex;
        if (start < 0) 
            start = 0;
    }
    for (var i = start; i < array.length; i++) 
    {
        if (array[i] === value) return i;
    }
    return -1;
}


function lastIndexOf(array, value, fromIndex) 
{
    if (!Array.isArray(array)) 
        return -1;
    var start;
    if (fromIndex === undefined) 
        start = array.length - 1;
    else if (fromIndex >= 0) 
    {
        if (fromIndex < array.length) 
            start = fromIndex;
        else 
            start = array.length - 1;
    }
    else 
    {
        start = array.length + fromIndex;
        if (start < 0) start = 0;
    }
    for (var i = start; i >= 0; i--) 
    {
        if (array[i] === value) return i;
    }
    return -1;
}


function includes(array, value) 
{
    if (!Array.isArray(array)) 
        return false;
    for (var i = 0; i < array.length; i++) 
    {
        if (array[i] === value)
            return true;
    }
    return false;
}


var arr = [1, 2, 3, 2, 5];

// console.log(indexOf(arr, 2));        // 1
// console.log(indexOf(arr, 2, 2));     // 3
// console.log(lastIndexOf(arr, 2));    // 3
// console.log(lastIndexOf(arr, 2, 2)); // 1
// console.log(includes(arr, 3));       // true
// console.log(includes(arr, 6));       // false
