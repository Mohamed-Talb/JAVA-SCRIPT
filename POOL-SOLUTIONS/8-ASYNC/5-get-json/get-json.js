async function getJSON(path, params)
{
	if (!path) throw new Error("invalid path");
	let url = path;
	if (params && Object.keys(params).length > 0)
	{
		const queryString = new URLSearchParams(params).toString();
		url += `?${queryString}`;
	}
	const response =  await fetch(url);
	if (!response.ok) throw new Error(response.statusText)
	const result = await response.json();
	if ("error" in result) throw new Error(result.error);
	return result.data;
}

// getJSON("https://jsonplaceholder.typicode.com/posts", {id:1})
// .then(data => console.log(data))
// .catch(err => console.log(err))
