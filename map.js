function map(arr, fn) {
  const newArr = []
	for (let item of arr ) {
    newArr.push(fn(item));
	}
  return newArr;
}

function multiplyByTwo(item){
  return item*2;
}

const x = [0,1,2,3,4];

console.log(map(x, multiplyByTwo));