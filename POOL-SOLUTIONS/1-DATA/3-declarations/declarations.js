const escapeStr = "`\\/\"'";
console.log(escapeStr);

const arr = [4, '2'];

const  nested =
{
    arr: [4, undefined, '2'],
    obj: 
    {
        str: "taleb",
        num: 44,
        bool: false,
    }
}

const obj =
{
    str: "mohamed",
    num: 42,
    bool: true,
    undef: undefined,
}

Object.freeze(nested.obj);
Object.freeze(nested.arr);
Object.freeze(nested);

