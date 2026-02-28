
function pronoun(str)
{
	const pron = {};
	let values  = str.match(/\b(you|i|he|she|it|they|we)\b(\s+(?!(you|i|he|she|it|they|we)\b)\w+)?/g);
	values = values.map((elm)=>elm.split(/\s/));
	
	return values;

}

console.log(pronoun("If he you want to buy something you have to pay you."));
