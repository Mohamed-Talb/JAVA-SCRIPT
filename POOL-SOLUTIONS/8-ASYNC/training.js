console.log("Start");
setTimeout(()=>{console.log("done")}, 1000);
console.log("end");


const MyPromise = new Promise((resolve, reject)=>
{
	let x = 2;
	if (x % 2 == 0)
		resolve("Operation success")
	else 
		reject("Operation Failed")
})

MyPromise.catch((Reason => {console.log(Reason, "Caught Error")}))

