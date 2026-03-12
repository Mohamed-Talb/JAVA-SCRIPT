// fake `getJSON` function
let getJSON = async (url) => url;

async function queryServers(serverName, q)
{
	if (!serverName)
		throw new Error("serverName required");
	let main = getJSON(`/${serverName}?q=${q}`);
	let backup = getJSON(`/${serverName}_backup?q=${q}`);
	return Promise.race([main, backup])
}

async function gougleSearch(q)
{
	
	const timeout  = new Promise((_, r) => 
		setTimeout(() => r(new Error("timeout")), 80));
	try 
	{
		const allServersResponse = Promise.all([queryServers("web", q),queryServers("image", q), queryServers("video", q)]);
		let result = await Promise.race([allServersResponse, timeout])
		return {"web":result[0], "image": result[1], "video":result[2]};
	}
	catch(error)
	{
		return error;
	}
}
