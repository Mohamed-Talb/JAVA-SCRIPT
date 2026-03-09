async function isWinner(countryName)
{
	try
	{
		const countryInfo = await db.getWinner(countryName);
		if (countryInfo.continent !== "Europe")
			return (`${countryName} is not what we are looking for because of the continent`);
		const countryHistory = await db.getResults(countryInfo.id);
		if (countryHistory.length < 3)
			return (`${countryName} is not what we are looking for because of the number of times it was champion`);
		let years = countryHistory
					.map((currElement)=>currElement.year)
					.join(', ');
		let results = countryHistory
					.map((currElement)=>currElement.score)
					.join(', ');
		return `${countryName} won the FIFA World Cup in ${years} winning by ${results}`
	}
	catch(error)
	{
		console.log(error);
		return `${countryName} never was a winner`;
	}
}