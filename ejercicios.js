let arr = [8,"e",7,2,"a","d","f",2,3,1,4,3];

let stringOnly = (val) => {
    if (typeof(val) === "string"){
        return val;
    }
}

let result = arr.filter(stringOnly);
console.log(result);

    






