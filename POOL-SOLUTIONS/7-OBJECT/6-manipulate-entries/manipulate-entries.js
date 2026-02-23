// small database with nutrition facts, per 100 grams
// prettier-ignore
const nutritionDB = {
  tomato:  { calories: 18,  protein: 0.9,   carbs: 3.9,   sugar: 2.6, fiber: 1.2, fat: 0.2   },
  vinegar: { calories: 20,  protein: 0.04,  carbs: 0.6,   sugar: 0.4, fiber: 0,   fat: 0     },
  oil:     { calories: 48,  protein: 0,     carbs: 0,     sugar: 123, fiber: 0,   fat: 151   },
  onion:   { calories: 0,   protein: 1,     carbs: 9,     sugar: 0,   fiber: 0,   fat: 0     },
  garlic:  { calories: 149, protein: 6.4,   carbs: 33,    sugar: 1,   fiber: 2.1, fat: 0.5   },
  paprika: { calories: 282, protein: 14.14, carbs: 53.99, sugar: 1,   fiber: 0,   fat: 12.89 },
  sugar:   { calories: 387, protein: 0,     carbs: 100,   sugar: 100, fiber: 0,   fat: 0     },
  orange:  { calories: 49,  protein: 0.9,   carbs: 13,    sugar: 9,   fiber: 0.2, fat: 0.1   },
}

function filterEntries(obj, callBack)
{
	const filtredObj = {}
	for (let [key, value] of Object.entries(obj))	
	{
		if (callBack([key, value], key, obj))
			filtredObj[key] = value;
	}
	return filtredObj;
}

function mapEntries(obj, callBack)
{
	const mapedObj = {}
	let currEntrie = [];
	for (let [key, value] of Object.entries(obj))	
	{
		currEntrie = callBack([key, value],key, obj);
		mapedObj[currEntrie[0]] = currEntrie[1];
	}
	return mapedObj;
}

function reduceEntries(obj, callBack, acc = undefined)
{
	for (let [key, value] of Object.entries(obj))	
	{
		acc = callBack(acc, [key, value], key, obj);
	}
	return acc;
}

function totalCalories(obj)
{
	let total = reduceEntries(obj, (acc, [k, v]) => acc + ((v * nutritionDB[k].calories / 100)), 0);
	return Number(total.toFixed(1));
}

function lowCarbs(obj)
{
	return filterEntries(obj, ([k, v]) => (nutritionDB[k].carbs * v / 100) < 50);
}

function cartTotal(obj)
{
	function mapedFunc([k, v])
	{
		let refFacts = nutritionDB[k];
		let facts = mapEntries(refFacts, ([key, value]) => [key, Number((v * value / 100).toFixed(3))]);
		return [k, facts];
	}
	return mapEntries(obj, mapedFunc);
}
