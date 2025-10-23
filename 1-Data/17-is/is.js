const is = {
   num(arg)
   {
        if(typeof arg == "number")
            return true;
        return false;
   },
   nan(arg)
   {
        if (arg === arg)
            return false;
        return true;            
   },
   str(arg)
   {
        if (typeof arg == "string")
            return true;
        return false;  
   },
   bool(arg)
   {
        if (typeof arg == "boolean")
            return true;
        return false;  
   },
   undef()
   {
        if (typeof arg == "undefined")
            return true;
        return false;  
   },
   def(arg)
   {
        if (typeof arg == "undefined")
            return false;
        return true;  
   },
   arr(arg)
   {
        if (Array.isArray(arg))
            return true;
        return false;  
   },
   obj(arg)
   {
        if (typeof arg == "object")
            return true;
        return false; 
   },
   fun(arg)
   {
        if (typeof arg == "function")
            return true;
        return false;     
   },
   truthy(arg)
   {
        if (arg)
            return true;
        return false; 
   },
   falsy(arg)
   {
        if (!arg)
            return true;
        return false; 
   },
}

let x;
let y = 9;
console.log(is.num(10));
console.log(is.nan(NaN));
console.log(is.str("hello"));
console.log(is.bool(true));
console.log(is.undef(x));
console.log(is.undef(y));