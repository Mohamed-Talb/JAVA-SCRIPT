function arrToSet(Arg)
{
    const mySet = Set(Arg);
    return mySet; 
}
function arrToStr(Arg)
{
    // const mystr = Arg.join("");
    return Arg.toString();
}
function setToArr(Arg)
{
    // return ([...mySet]);
    return (Array.from(Arg));
} 
function setToStr(Arg)
{
    return (arrToStr(setToArr(Arg)));
} 
function strToArr(Arg)
{
    return (Array.from(Arg));
    // return (Arg.split(""))
}
function strToSet(Arg)
{
    return new Set(Array.from(str));
} 
function mapToObj(Arg)
{
    return Object.fromEntries(myMap);
} 
function objToArr(Arg)
{
    return Object.entries(obj);
}
function objToMap(Arg)
{
    return new Map(Object.entries(Arg));
} 
function arrToObj(Arg)
{
    return Object.fromEntries(Arg)
}
function strToObj(Arg)
{
    return Object.fromEntries(Array.from(Arg));
}

