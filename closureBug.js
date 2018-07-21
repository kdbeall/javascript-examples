function makeFuncArray(){
  const arr = [];
  for (var i = 0; i<5; i++){
    arr.push(function(){console.log(i)});
  }
  console.log(i);
  return arr;
}

function makeFuncArrayLet(){
  const arr = [];
  for (let i = 0; i<5; i++){
    arr.push(function(){ console.log(i); });
  }
  /** Can't do this because i is out of scope! */
  //console.log(i);
  return arr;
}

const funcArr = makeFuncArray();
funcArr[0]();


const funcArrLet = makeFuncArrayLet();
funcArrLet[0]();