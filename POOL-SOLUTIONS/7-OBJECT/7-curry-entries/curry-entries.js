// prettier-ignore
const personnel = {
  lukeSkywalker: { id: 5,  pilotingScore: 98, shootingScore: 56, isForceUser: true  },
  sabineWren:    { id: 82, pilotingScore: 73, shootingScore: 99, isForceUser: false },
  zebOrellios:   { id: 22, pilotingScore: 20, shootingScore: 59, isForceUser: false },
  ezraBridger:   { id: 15, pilotingScore: 43, shootingScore: 67, isForceUser: true  },
  calebDume:     { id: 11, pilotingScore: 71, shootingScore: 85, isForceUser: true  },
}

function defaultCurry(obj1)
{
	return function (obj2)
	{
		return {...obj1, ...obj2};
	}
}
function mapCurry(func)
{
	return function (obj)
	{
		const mapedObj = {}
		let currEntrie = [];
		for (let [key, value] of Object.entries(obj))	
		{
			currEntrie = func([key, value],key, obj);
			mapedObj[currEntrie[0]] = currEntrie[1];
		}
		return mapedObj;
	}
}

function filterCurry(func)
{
	return function (obj)
	{
		const filtredObj = {}
		for (let [key, value] of Object.entries(obj))	
		{
			if (func([key, value], key, obj))
				filtredObj[key] = value;
		}
		return filtredObj;
	}
}

function reduceCurry(func)
{
	return function (obj, acc = 0)
	{
		for (let [key, value] of Object.entries(obj))	
			acc = func(acc, [key, value], key, obj);
		return acc;
	}
}

function reduceScore(personnel, baseAcc = 0)
{
	const forceUsers = filterCurry(([k, v]) => v.isForceUser)(personnel);
	return reduceCurry((acc, [k, v]) => acc + v.pilotingScore + v.shootingScore)(forceUsers, baseAcc);
}

function filterForce(personnel)
{
	const forceUsers = filterCurry(([k, v]) => v.isForceUser)(personnel);
	return filterCurry(([k, v]) => v.shootingScore >= 80)(forceUsers);
}

function mapAverage(personnel)
{
	function mapedFunc([k,v])
	{
		v.averageScore = (v.pilotingScore + v.shootingScore) / 2;
		return [k, v];
	}
	return mapCurry(mapedFunc)(personnel)
}
