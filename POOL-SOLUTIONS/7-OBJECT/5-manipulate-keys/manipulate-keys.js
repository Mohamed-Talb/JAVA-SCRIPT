function filterKeys(obj, callBack)
{
	const filtredObj = {}
	for (let [key, value] of Object.entries(obj))	
	{
		if (callBack(key, key, obj))
			filtredObj[key] = value;
	}
	return filtredObj;
}

function mapKeys(obj, callBack)
{
	const mapedObj = {}
	for (let [key, value] of Object.entries(obj))	
	{
		mapedObj[callBack(key, key, obj)] = value;
	}
	return mapedObj;
}

function reduceKeys(obj, callBack, acc = "")
{
	for (let [key, value] of Object.entries(obj))	
	{
		if (acc === "")
			acc = key;
		else 
			acc = callBack(acc, key, key, obj);
	}
	return acc;
}