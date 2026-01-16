function chunk(Arr, size)
{
    if (size <= 0 || size == undefined)
        return NaN;
    let newArr = [];
    const Arrlen = Arr.length;
    let tmp = [];
    let j = 0;
    for (let i = 0; i < Arrlen; i++)
    {
        if (j == size)
        {
            newArr.push(tmp);
            tmp = [];
            j = 0;
        }
        tmp[j] = Arr[i];
        j++;
    }
    if (tmp.length != 0)
        newArr.push(tmp);
    return newArr;
}
// Basic
console.log(chunk([1, 2, 3, 4], 2));// [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4, 5], 2));// [[1, 2], [3, 4], [5]]
console.log(chunk([1, 2, 3, 4, 5], 3));// [[1, 2, 3], [4, 5]]
console.log(chunk([1, 2, 3], 1));// [[1], [2], [3]]
// Size bigger than array length
console.log(chunk([1, 2, 3], 10));// [[1, 2, 3]]
// Empty array
console.log(chunk([], 3));// []
// Works with strings/objects too (arrays can contain anything)
console.log(chunk(["a", "b", "c", "d", "e"], 2));// [["a","b"], ["c","d"], ["e"]]
console.log(chunk([{a:1}, {b:2}, {c:3}], 2));// [[{a:1}, {b:2}], [{c:3}]]
// Edge cases (pick a behavior and test it)// If you decide invalid size returns NaN:
console.log(chunk([1, 2, 3], 0));// NaN
console.log(chunk([1, 2, 3], -2));// NaN
console.log(chunk([1, 2, 3], "2"));// ????
