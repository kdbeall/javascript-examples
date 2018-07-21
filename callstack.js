function addOne(num){
  return num + 1;
}

function getNum(){
  return addOne(10);
}

function c(){
  return console.log(getNum()));
}

c();


/** Stack 

----------------
| addOne(10)   |
----------------
| getNum       |
----------------
| c            |
----------------

*/