const obj = {
    prop1: "",
    prop2: "",
    prop3: "",
    prop4: "",
};

function countProps(obj) {
    let count = 0;
    for(const key in obj) {
        count++;
    }
    return count;
}

console.log(countProps(obj));