function debounce(func, delay)
{
	let timeOut;
	return function (...args)
	{
		clearTimeout(timeOut);
		timeOut = setTimeout(()=> func(...args), delay);
	}

}


function saveData(data) {
  console.log("Saving:", data);
}

const debouncedSave = debounce(saveData, 1);

// Simulate rapid calls
debouncedSave("A");
debouncedSave("AB");
debouncedSave("ABC");
debouncedSave("ABCD");

// saveData("A");
// saveData("AB");
// saveData("ABC");
// saveData("ABCD");