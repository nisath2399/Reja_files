// console.log("Jack Ma maslahatlari");

// // Masala:
// function countLetter(a, b) {
//     let count = 0;

//     for (let i = 0; i < b.length; i++) {
//         if (b[i] === a) {
//             count = count + 1;
//         }
//     }

//     return count;
// }

// console.log(countLetter("e", "engineer"));

// const list = [
//   "yaxshi talabа bo'ling",                 // 0–20
//   "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20–30
//   "o'zingizga ishlashingizni boshlang",     // 30–40
//   "siz kuchli bo'lgan narsalarni qiling",   // 40–50
//   "yoshlarga investitsiya qiling",          // 50–60
//   "endi dam oling, foydasi yo'q endi"        // 60
// ];
// // Callback usuli
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setTimeout(function () {
//       callback(null, list[5]);
//   }, 1000);
//   }
// }

// console.log("Passed here");
// maslahatBering(65, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else 
//     console.log("Maslahat:", data);
// });

// console.log("Passed here 1");

// // Async / Promise usuli
// // async function maslahatBering(a, callback) {
// //   if (typeof a !== "number") throw new Error("insert a number");
// //   else if (a <= 20) return(list[0]);
// //   else if (a > 20 && a <= 30) return (list[1]);
// //   else if (a > 30 && a <= 40) return (list[2]);
// //   else if (a > 40 && a <= 50) return (list[3]);
// //   else if (a > 50 && a <= 60) return (list[4]);
// //   else {
// //     return new Promise((resolve, reject) => {
// //       setTimeout(() => {
// //         resolve(list[5]);
// //       }, 5000);
// //     });
// //   };
// //     //   callback(null, list[5]);
// //     // }, 5000);
// //   }
// // // foydalanish usullari:
// // // callback
// // // maslahatBering(65, (err, data) => {
// // //   if (err) {
// // //     console.log("ERROR:", err);
// // //   } else {
// // //     console.log("Maslahat:", data);
// // //   }
// // // });
// // // console.log("Passed here");
// // //then, chatch
// // // console.log("Passed here");
// // // maslahatBering(65) 
// // //   .then((data) => {
// // //     console.log("Maslahat:", data);
// // //   })
// // //   .catch((err) => {
// // //     console.log("ERROR:", err);
// // //   });
// // // console.log("Passed here 1");

// // async function run() {
// //   let javob = await maslahatBering(65);
// //   console.log("Maslahat:", javob);
// //   let javob2 = await maslahatBering(25);
// //   console.log("Maslahat:", javob2);
// //   let javob3 = await maslahatBering(45);
// //   console.log("Maslahat:", javob3);  
// //   }
// // run();

// // function countDigits(a) {
// //   let count = 0;
// //   for (let i = 0; i < a.length; i++) {
// //     if (a[i] >= '0' && a[i] <= '9') {
// //       count++;
// //     }
// //   }
// //   return count;
// // }
// // console.log(countDigits("ad2a54y79wet0sfgb9"));

// class Shop {
//   constructor(non, lagmon, cola) {
//     this.non = non;
//     this.lagmon = lagmon;
//     this.cola = cola;
//   }

//   qoldiq() {
//     console.log(
//       "Dokonda " +
//       this.non + " ta non, " +
//       this.lagmon + " ta lag'mon va " +
//       this.cola + " ta cola bor"
//     );
//   }

//   sotish(nomi, soni) {
//     this[nomi] = this[nomi] - soni;
//     console.log(soni + " ta " + nomi + " sotildi");
//   }

//   qabul(nomi, soni) {
//     this[nomi] = this[nomi] + soni;
//     console.log(soni + " ta " + nomi + " qabul qilindi");
//   }
// }

// const shop = new Shop(4, 5, 2);
// shop.qoldiq();
// shop.sotish("non", 3);
// shop.qabul("cola", 4);
// shop.qoldiq();

// Task-c 

// 1 version

function countContent(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }

    let a = word1.split("").sort().join("")
    let b = word2.split("").sort().join("")

        return a === b;
}
console.log(countContent("mitgroup", "gmtiprou"));

//2-version

function countContent(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    function helper(word, letter) {
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                count++;
            }
        }
        return count;
    }
    for (let i = 0; i < word1.length; i++) {
        if (helper(word1, word1[i]) !== helper(word2, word1[i])) {
            return false;
        }
    }
    return true;
}

console.log(countContent("mitgroup", "gmtiprou"));

