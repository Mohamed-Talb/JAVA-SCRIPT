async function all(obj) 
{
    const keys = Object.keys(obj);
    const finalObj = {};

    return new Promise((resolve, reject) => 
	{
        let remaining = keys.length;
        if (remaining === 0)
			return resolve(finalObj);
        keys.forEach(key => {
			Promise.resolve(obj[key]).then(value => {
                    finalObj[key] = value;
                    remaining--;
                    if (remaining === 0)
						resolve(finalObj);
                })
                .catch(err => reject(err));
        });
    });
}