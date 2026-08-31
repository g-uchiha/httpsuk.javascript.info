let variable1 = "hello";

function funcOuter() {
    function funcInner() {
        return variable1;
    }

    variable1 = "world";
    return funcInner;
}

console.log(funcOuter()());