let counter = 0;

// for me: done
// 1
function flattenArray(arr,i = 0,res = []) {
    counter++;

    if (Array.isArray(arr[i])) {
        
        flattenArray(arr[i], 0 , res);
        return flattenArray(arr,i + 1, res);
    }

    if (i === arr.length) {
        
        return res;
    }

    res.push(arr[i]);
    return flattenArray(arr,i + 1, res);
}
console.log(flattenArray([1, [3, 4, [1, 2],5], 10,[3,[4,7,[6]]]]),"counter",counter); 
console.log(flattenArray([1, [3, 4, [1, 2]], 10]));
console.log(flattenArray([14, [1, [[[3, []]], 1], 0]]));
console.log(flattenArray([]));
console.log(flattenArray([1]));

//2
// for me: done
function sumOfDigits(num) {
    num = Math.abs(num);
    let currentDigit = num % 10;

    if (!num) {
        return currentDigit + num;
    }

    return currentDigit + sumOfDigits(Math.floor(num / 10));
}

function calculateSum(num) {
    let sum = sumOfDigits(num);
    if (sum > 9 || sum < -9) {
        return calculateSum(sum);
    }

    return sum;
}

console.log(calculateSum(88888888888));
console.log(calculateSum(14));
console.log(calculateSum(29));
console.log(calculateSum(999999999999));
console.log(calculateSum(-7));
console.log(calculateSum(-999999999999))


// 3
// for me: done
// changed input arr 
function rotateArrNTimesLeft(arr,n,i = 0) {
    if (n < 0) {
        console.log("no negative numbers yet try in next life");
        return
    }
    if (n >= arr.length) {
        let countOfArrsWhichCanFitInN = Math.floor(n / arr.length);
        n = n - countOfArrsWhichCanFitInN * arr.length;
    }
    
    if (i === arr.length) {
        return;
    }
    
    if (i - n < 0) {
        arr.push(arr.shift());
    } 

    return rotateArrNTimesLeft(arr,n,i + 1);
}

// [1,2,3,4] 2 [3,4,1,2] 4 [1,2,3,4,5,6,7] [4,5,6,7,1,2,3]

let arr = [1,2,3,4];

rotateArrNTimesLeft(arr, 2);

console.log(arr,"zzz");


// 4
// for me: done
function invertValuesAndKeys(obj) {
    let res = {};

    for (let key in obj) {
        
        if (res[obj[key]]) {
            res[obj[key]].push(key);
        } else {
            res[obj[key]] = [];
            res[obj[key]].push(key);
        }
    }

    for (let key in res) {
        if (res[key].length === 1) {
            res[key] = res[key].pop();
        }
    }

    return res;
}

console.log(invertValuesAndKeys({ a: "1", b: "2", c: "2" }));
console.log(invertValuesAndKeys({ a: "1", b: "2", c: "2",d: "2" }));
console.log(invertValuesAndKeys({ a: "1", b: "2", c: "3" }));
console.log(invertValuesAndKeys({z: "3"}));



// 5
// for me: done
function filterThanSort(books) {
    return books.filter(e => e.readStatus).sort((a,b) => b.percent - a.percent);
}

let books = [{ book: "Catcher in the Rye", readStatus: true, percent: 40},
             { book: "Animal Farm", readStatus: true, percent: 20},
             { book: "Solaris", readStatus: false, percent: 90 },
             { book: "The Fall", readStatus: true, percent: 50 },
             { book: "White Nights", readStatus: false, percent: 60 },
             { book: "After Dark", readStatus: true, percent: 70 }]

console.log(filterThanSort(books));