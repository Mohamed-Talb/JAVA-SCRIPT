function deepCopy(arg)
{
	if (arg === null || typeof arg !== "object")
		return arg;
	if (arg instanceof RegExp)
    	return new RegExp(arg);
	if (arg instanceof Date)
    	return new Date(arg);
	let clone = (Array.isArray(arg)) ? [] : {}; 
	for (let key in arg)
		clone[key] = deepCopy(arg[key]);
	return clone;
}
