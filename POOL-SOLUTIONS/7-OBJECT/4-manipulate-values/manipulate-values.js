function filterValues(obj, callBack)
{
	const filtredObj = {}
	for (let [key, value] of Object.entries(obj))	
	{
		if (callBack(value, key, obj))
			filtredObj[key] = value;
	}
	return filtredObj;
}

function mapValues(obj, callBack)
{
	const mapedObj = {}
	for (let [key, value] of Object.entries(obj))	
	{
		mapedObj[key] = callBack(value, key, obj);
	}
	return mapedObj;
}

function reduceValues(obj, callBack, acc = 0)
{
	for (let [key, value] of Object.entries(obj))	
	{
		acc = callBack(acc, value, key, obj);
	}
	return acc;
}
