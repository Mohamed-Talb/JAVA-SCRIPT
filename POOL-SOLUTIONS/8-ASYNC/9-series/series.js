async function series(funcs) 
{
    const results = [];
    for (const fn of funcs) 
	{
        const value = await fn();
        results.push(value);
    }
    return results;
}