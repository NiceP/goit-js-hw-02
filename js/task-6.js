"use strict"

let input;
const numbers = [];
let total = 0;
let cycle = true;

while (cycle) {
    const input = prompt("Введите число");
    if (input === null) {
        cycle = false;
    } else {

        if (Number.isNaN(Number(input))){
            alert("Было введено не число, попробуйте еще раз"); 
        } else{
            numbers.push(input);
        }
    }

}

for(const number of numbers){
    total+=Number(number);
}

console.log(`Общая сумма чисел равна ${total}`);