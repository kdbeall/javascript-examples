const counter = (function(){
	let count = 0;

	return {
		inc: () => count = count + 1,
		get: () => console.log(count)
	}
})();

counter.get();
counter.inc();
counter.get();
counter.inc();