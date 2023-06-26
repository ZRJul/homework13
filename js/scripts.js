/*Реалізувати рекурсивну функцію, яка зводить число в ступінь.
Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію
Ступінь передається як другий аргумент у функцію
pow(num, degree)*/




function pow(num, degree){
    if (num == 0 && degree <= 0) {
        return `Неможливо звести 0 в ступінь меньш 1`;
    } else if (degree == 1){
        return num;
    } else if (degree == 0) {
        return 1;
    } else if (degree < 0){
        return 1 / num * pow(num, degree + 1);
    } else {
        return num * pow(num, degree - 1);
    }
}

console.log(pow(5,4));

