function flat(Arr, Depth = 1)
{
    const arrLen = Arr.length;
    let Flattened = []
    for (let i = 0; i < arrLen; i++)
    {
        if (!(i in Arr)) continue;
        if (Array.isArray(Arr[i]) && Depth > 0)
            Flattened.push(...flat(Arr[i], Depth-1))
        else 
            Flattened.push(Arr[i]);
    }
    return Flattened;
}
