
function forEach(Arr, func)
{
    Arr.forEach(func);
}

const ratings = [5, 4, 5];
forEach(ratings, (num) => console.log(num));