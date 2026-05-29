function multiply(a,b) {
    let result = a * b;
    return result;
}

result = multiply(5,10)
console.log(result)

console.log(multiply(5,10))

function test() {
    return "Hotovo";
    console.log("Tady by byl nějaký text")
}

console.log(test());

function vek(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(vek(18))

console.log(9 % 2)

//Deklarace fce
//Vrací true pokud je sudé, vrací false pokud je liché

function jeSude(cislo) {
    if (cislo % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(jeSude(4)) //true
console.log(jeSude(7)) //false