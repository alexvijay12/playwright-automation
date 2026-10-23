 
for (let n = 2; n <= 100; n++) {
    let count = 0;

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            count++;
        }
    }

    if (count == 0) {
        console.log(n + " is a prime number");
    } else {
        console.log(n + " is not a prime number");
    }
}


    
// for (let num = 2; num <= 100; num++) {
//     let isPrime = true;

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(num);
//     }
// }


