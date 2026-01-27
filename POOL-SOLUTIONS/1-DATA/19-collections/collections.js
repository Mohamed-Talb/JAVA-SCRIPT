function arrToSet(Arg)
""""""
{
    const mySet = new Set(Arg);
    return mySet; 
}
function arrToStr(Arg)
{
    const mystr = Arg.join('');
    return mystr;
    // return Arg.toString(); // wrong because it concatenat using , 
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
    return new Set(Array.from(Arg));
} 
function mapToObj(Arg)
{
    return Object.fromEntries(Arg);
} 
function objToArr(Arg)
{
    return Object.values(Arg);
}
function objToMap(Arg)
{
    return new Map(Object.entries(Arg));
} 
function arrToObj(Arg)
{
    return {...Arg};
}
function strToObj(Arg)
{
    return {...Arg};
}

function superTypeOf(value) 
{
  if (value === null) return "null";
  if (value === undefined) return "undefined";

  if (Array.isArray(value)) return "Array";
  if (value instanceof Map) return "Map";
  if (value instanceof Set) return "Set";

  const t = typeof value; // "number", "string", "boolean", "function", "bigint", "symbol"
  return t[0].toUpperCase() + t.slice(1);
}
