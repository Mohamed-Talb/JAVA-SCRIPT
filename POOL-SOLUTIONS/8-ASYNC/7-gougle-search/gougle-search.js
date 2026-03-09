// fake `getJSON` function
let getJSON = async (url) => url;

async function queryServers(serverName, q)
{
	if (!serverName)
		throw new Error("serverName required");
	let url1 = `/${serverName}?q=${q}`;
	let url2 = `/${serverName}_backup?q=${q}`;
	return Promise.race([getJSON(url1), getJSON(url2)])
}

async function gougleSearch(q)
{
	function timer()
	{
		return new Promise((_, reject) => setTimeout(() => reject("timeout"), 8000))
	}
	const allServersResponse = Promise.all([queryServers("Web", q),queryServers("image", q),queryServers("video", q)]);
	return await Promise.race([allServersResponse, timer()]).then(values => ({"Web":values[0], "image":values[1], "video": values[2]}));
}

queryServers("web", "hello+world").then(value => console.log(value));
console.log(gougleSearch("hello+world"));