/**********************************
 * TASK – A
 * 2 parametrli function
 * Harfni so‘z ichidan sanaydi
 **********************************/

// A1
// countLetter("a", "banana") ➜ 3
function countLetterA1(letter, word) {
    // Yechimingiz
    let count = 0;
    for (let i=0; i<word.length; i++) {
        if (word[i]===letter) {
            count++
        }
    }
}

// // A2
// // countLetter("o", "school") ➜ 2
// function countLetterA2(letter, word) {
//     // Yechimingiz
// }


// A3
// countLetter("m", "programming") ➜ 2
function countLetterA3(letter, word) {
    // Yechimingiz
}

// A4
// countLetter("i", "mississippi") ➜ 4
function countLetterA4(letter, word) {
    // Yechimingiz
}

// A5
// countLetter("z", "javascript") ➜ 0
function countLetterA5(letter, word) {
    // Yechimingiz
}



/**********************************
 * TASK – B
 * String ichidagi raqamlarni sanaydi
 **********************************/

// B1
// countDigits("abc123") ➜ 3
function countDigitsB1(str) {
    // Yechimingiz
}

// B2
// countDigits("a1b2c3d4") ➜ 4
function countDigitsB2(str) {
    // Yechimingiz
}

// B3
// countDigits("noDigitsHere") ➜ 0
function countDigitsB3(str) {
    // Yechimingiz
}

// B4
// countDigits("2025year") ➜ 4
function countDigitsB4(str) {
    // Yechimingiz
}

// B5
// countDigits("1a2b3c4d5") ➜ 5
function countDigitsB5(str) {
    // Yechimingiz
}



/**********************************
 * TASK – C
 * Shop class
 **********************************/

class Shop {
    constructor(non, lagmon, cola) {
        this.non = non;
        this.lagmon = lagmon;
        this.cola = cola;
    }

    qoldiq() {
        // console.log("Hozir ... da ...");
    }

    sotish(mahsulot, son) {
        // Yechimingiz
    }

    qabul(mahsulot, son) {
        // Yechimingiz
    }
}



/**********************************
 * TEST QISMI
 * Shu joyda tekshirasan
 **********************************/

// C1
// const shop1 = new Shop(10, 5, 8);
// shop1.qoldiq();

// C2
// const shop2 = new Shop(6, 4, 3);
// shop2.sotish("non", 2);
// shop2.qoldiq();

// C3
// const shop3 = new Shop(2, 7, 1);
// shop3.qabul("cola", 5);
// shop3.qoldiq();

// C4
// const shop4 = new Shop(9, 9, 9);
// shop4.sotish("lagmon", 4);
// shop4.qabul("non", 3);
// shop4.qoldiq();

// C5
// const shop5 = new Shop(1, 1, 1);
// shop5.sotish("cola", 1);
// shop5.qoldiq();

// E-TASK: 

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(getReverse("hello")); 