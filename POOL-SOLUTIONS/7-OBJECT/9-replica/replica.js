function replica(target, ...sources) 
{
	if (target === null || typeof target !== "object") 
		throw new Error("Target must be an object");
	for (const source of sources)
	{
		if (source === null || typeof source !== "object") 
			continue;
		for (const key of Object.keys(source)) 
		{
			const value = source[key];
			if (value && typeof value === "object") 
			{
				if (value instanceof Date)
					target[key] = new Date(value.getTime());
				else if (value instanceof RegExp)
					target[key] = new RegExp(value.source, value.flags);
				else
				{
					if (!target[key] || typeof target[key] !== "object")
						target[key] = Array.isArray(value) ? [] : {};
				} 
				replica(target[key], value);
			} 
			else
				target[key] = value;
		}
	}
	return target;
}