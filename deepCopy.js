function deepCopy(obj) {
    const keys = Object.keys(obj);
    const newObj = {};
    for (const key of keys) {
        if (typeof obj[key] === 'object') {
            newObj[key] = deepCopy(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

const o = {
    a: "a",
    nestObj: {
        c: "meow!"
    }
};

const o2 = deepCopy(o);
o.nestObj.c = "woof!";
console.log(o2.nestObj.c);

