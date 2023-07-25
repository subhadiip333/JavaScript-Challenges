// 1. Falsy or Truthy?
// Given two values, return the first one if it is falsy, otherwise return the second one

function filterOutFalsy(val1, val2) {
    return !val1 ? val1 : val2;
}

console.log(filterOutFalsy(0, 500));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, 'Dog'));

// 2. Return the length of any given array

function arrLength(arr) {
    return arr.length;
}

console.log(arrLength([1,2,3]))
console.log(arrLength([5,0,-4,1]))
console.log(arrLength([]))

// 3. Get the last element in an array

function lastElem(arr) {
    return arr[arr.length - 1];
}

console.log(lastElem([3,2,0,6,2]))
console.log(lastElem(['dog','cat','ball']))
console.log(lastElem([null,5,false]))

// 4. Find the sum of an array

function arrSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum  + arr[i];
    }
    return sum;
}

console.log(arrSum([2,2,2]))
console.log(arrSum([100,200,500]))
console.log(arrSum([0,-5,-10]))

// 5. Adds up the numbers from a single number

function progressiveSum(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum = sum + i
    }
    return sum;
}

console.log(progressiveSum(3))
console.log(progressiveSum(600))
console.log(progressiveSum(4))

// 6. Calculate the time in mm:ss format

function calcTime(sec) {
    let mm = Math.floor(sec / 60) ;
    let ss = sec % 60;

    if (mm.toString().length === 1) {
       mm = '0' + mm;
    }

    if ( ss.toString().length === 1) {
        ss= '0' + ss;
    }

    return mm + ':' + ss;
      
}

console.log(calcTime(66))

// 7. Find the largest number in an array

function getMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        } 
    }
    return max;
}

console.log(getMax([5, 100, 0]))

// 8. Reverse a string

function reverseString(str) {
    let reverseString = '';
     for (let i = 0; i < str.length; i++) {
         reverseString = str[i] + reverseString;
      }
      return reverseString;

//    return str.split('').reverse().join('')
}

console.log(reverseString('abc'))

// 9. Turn every element in an array into 0 

function convertToZeros(arr) {
    // solution 1

     let makeZeros = [];
     for (let i = 0; i < arr.length; i++) {
        makeZeros[i] = 0;
     }
     return makeZeros;


    //solution 2

    // return new Array(arr.length).fill(0);

    //solution 3 

   // return arr.map(elem => elem * 0)
}

console.log(convertToZeros([5,100,0,6]))

// 10. Filter out all the apples

function removeApples(fruits) {
//    return fruits.filter((elem) => 
//     { return elem !== 'apple'})


let noApples = [];

for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] !== 'apple') {
        noApples.push(fruits[i]);
    }
    }
    return noApples;
}

console.log(removeApples(['banana','apple','orange','apple']))


// 11. Filter out all the falsy values
// Given an array of values, filter out all the falsy values and only return the truthy values

function filterOutFalsy2(arr) {
     let truthyArr = [];
     for (let i = 0; i < arr.length; i++) {
       if (!!arr[i] === true) {
         truthyArr.push(arr[i]);  
       }
     }
     return truthyArr;

    //  return arr.filter(elem => !!elem === true)
}

console.log(filterOutFalsy2(["", [], 0, null, undefined, "0"]))


// 12. Truthy to true, Falsy to false
// Given an array of truthy and falsy values, return the same array of elements into its boolean value.

function  convertToBoolean(arr) {
      return arr.map(elem => !!elem)
    // let newarr = [];
    //  for (let i = 0; i < arr.length; i++) {
    //     if (!!arr[i] === true) {
    //         newarr.push(arr[i]);
    //     }
    //  }
    //  return newarr;
}

console.log(convertToBoolean(['',NaN,500,null,false,0]))

 