function pick(obj, Arg)
{
	if (!(typeof obj === 'object' && !Array.isArray(obj) && obj !== null) || (!Array.isArray(Arg) && typeof Arg !== "string"))
		throw new Error("pick: Invalide Argument should passing (object, ArrayOfStrings/string")
	if (typeof Arg === "string")
		Arg = [Arg];
	let entries = Object.entries(obj);
	let filtred = entries.filter(([key]) => Arg.includes(key));
	return Object.fromEntries(filtred);
}
function omit(obj, Arg)
{
	if (!(typeof obj === 'object' && !Array.isArray(obj) && obj !== null) || (!Array.isArray(Arg) && typeof Arg !== "string"))
		throw new Error("pick: Invalide Argument should passing (object, ArrayOfStrings/string")
	if (typeof Arg === "string")
		Arg = [Arg];
	let entries = Object.entries(obj);
	let filtred = entries.filter(([key]) => !Arg.includes(key));
	return Object.fromEntries(filtred);
}
