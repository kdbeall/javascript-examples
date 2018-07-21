const obj = {
  a: 'a',
  b: 'b'	
}

const obj2 = obj;

obj.a = "new value";
console.log(obj2.a);

