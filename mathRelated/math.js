const factory = (num) => {
    let result = 1
    for(let i = num; i> 1; i--){
        result *=i
    }
    return result
}
const combination = (total, draw) => {
    return factory(total)/(factory(draw)*factory(total-draw))
}

const pow = (base, index) => {
    let result = base
    for(let i = index; i>1; i--){
        result *= base
    }
    return result
}
let result = null
// let result = combination(78, 3)
// let result = factory(3)
result = pow(2,24)
console.log(result);
for(let i = 0; i<= 255; i++){
    for(let j = 0; j<=255;j++){
        for(let k=0; k<=255;k++){
            console.log(`i=${i} ; j=${j} ; k=${k}`);

        }
    }
}


const randomRange = (myMin, myMax) => {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
