function flags(obj)
{
	let RetObj = {alias:{h: 'help'}, description: ""};
	if (Object.keys(obj).length === 0)
		return RetObj;
	function reducer(accumulator, currValue, currIndex, Array)
	{
		accumulator += '-' + currValue.slice(0,1) + ', --' + currValue + ': '+ obj[currValue];
		if (currIndex !== Array.length - 1)
			accumulator += "\n";
		return accumulator;
	}
	const keysArray = Object.keys(obj);
	if (obj?.help === undefined || obj.help.lenght === 0 )
		obj.help = keysArray;
	const flags = keysArray.map(curr => curr.slice(0,1));
	for(let index in flags)
		RetObj.alias[flags[index]] = keysArray[index];
	console.log(obj.help);
	RetObj.description = obj.help.reduce(reducer, "");
	return RetObj;
}