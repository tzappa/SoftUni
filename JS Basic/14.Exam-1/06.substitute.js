function substitute(input) {
    let K = Number(input[0]);
    let L = Number(input[1]);
    let M = Number(input[2]);
    let N = Number(input[3]);
    let counter = 0;
    let isDone = false;

    for (let i = K; i <= 8; i++) {
        for (let j = 9; j >= L; j--) {
            for (let k = M; k <= 8; k++) {
                for (let l = 9; l >= N; l--) {
                    if (i % 2 === 0 && j % 2 !== 0 && k % 2 === 0 && l % 2 !== 0) {
                        i === k && j === l ? console.log(`Cannot change the same player.`) : (console.log(`${i}${j} - ${k}${l}`), counter++);
                        if (counter === 6) {
                            isDone = true;
                            break;
                        }
                    }
                }
                if (isDone) { break; }
            }
            if (isDone) { break; }
        }
        if (isDone) { break; }
    }
}
substitute(["6", "7", "5", "6"])

/**
 Задача 6. Смени
Любимият отбор на Пепи е на финал, но започва да губи мача. 
Треньорът на отбора не знае какви смени да направи, за да обърне резултата. 
Напишете програма, с която ще разберете кой са първите 6 валидни смени,
 които могат да се направят.  
Знаем, че всяка цифра от двата номера е в даден интервал:
•	Първата цифра на първото число е в интервала от цифрата K до 8, включително.
•	Втората цифра на първото число е в интервала от 9 до L, включително.
•	Първата цифра на второто число е в интервала от цифрата M до 8, включително.
•	Втората цифра на второто число е в интервала от 9 до N, включително.
За да бъде възможна една смяна, първата цифра на всеки от номерата
 трябва да бъде четна, а втората -  нечетна.
За да бъде валидна една смяна, то номерата НЕ трябва да съвпадат.

Вход:
От конзолата се четат 4 реда:
•	K – цяло число в интервала [0..8]
•	L – цяло число в интервала [0..9]
•	M– цяло число в интервала [0..8]
•	N – цяло число в интервала [0..9]
Изход:
На конзолата да се отпечатат първите 6 валидни смени по следния начин:
•	Ако смяната е възможна и номерата НЕ съвпадат, тя Е валидна и
 трябва да се отпечата:
"{K}{L} - {M}{N}"
•	Ако смяната е възможна, но номерата съвпадат, тя НЕ е валидна и
 трябва да се отпечата:
"Cannot change the same player."
Примерен вход и изход:

(["7","6","8","5"])
Cannot change the same player.
89 - 87
89 - 85
87 - 89
Cannot change the same player.
87 - 85

(["6","7","5","6"])
Cannot change the same player.
69 - 67
69 - 89
69 - 87
67 - 69
Cannot change the same player.
67 - 89
67 - 87

 */