function fusion(obj1, obj2)
{
	if (typeof obj1 === typeof obj2 === "object")
		throw new Error("fusion: Invalid Argument (obj, obj)");
	let merged = structuredClone(obj1);
	for (let [key, obj1Value] of Object.entries(obj1))
	{
		let obj2Value = obj2[key];
		if (obj2Value !== undefined)
		{
			if (Array.isArray(obj1Value) && Array.isArray(obj2Value))
				merged[key] = [...obj1Value, ...obj2Value]; 
			else if (typeof obj1Value === "number" && typeof obj2Value === "number")
				merged[key] = obj1Value + obj2Value; 
			else if (typeof obj1Value === "string" && typeof obj2Value === "string")
				merged[key] = [obj1Value, obj2Value].join(' '); 
			else if (typeof obj1Value === "object" && typeof obj2Value === "object") 
				merged[key] = fusion(obj1Value, obj2Value);
			else
				merged[key] = obj2Value;
			delete obj2[key];
		}
	}
	return Object.assign({}, merged, obj2);
}
