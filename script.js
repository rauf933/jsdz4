let a = +prompt('Введите число');
let b = +prompt('Введите степень');
let c = 1
let d = 0
while (d < b) {
    c *= a;
    d++
}
console.log(c);