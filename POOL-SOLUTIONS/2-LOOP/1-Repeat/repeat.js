function repeat(str, times) 
{
    let result = '';
    for (let i = 0; i < times; i++) 
    {
        result += str;
    }
    return result;
}

// console.log(repeat("Hi! ", 3)); // Output: "Hi! Hi! Hi! "