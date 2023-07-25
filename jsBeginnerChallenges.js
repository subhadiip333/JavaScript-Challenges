//  1. Return the sum of two numbers
function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(3,2))
console.log(addition(-3,-6))
console.log(addition(7,3))

// 2.Convert hours into seconds

function hoursIntoSeconds(hours) {
    return hours * 60 * 60
}

console.log(hoursIntoSeconds(2))
console.log(hoursIntoSeconds(10))
console.log(hoursIntoSeconds(24))

// 3. Calculate the perimeter of a rectangle

function calcPerimeter(length, width) {
    return 2 * (length + width)
}

console.log(calcPerimeter(6, 7))
console.log(calcPerimeter(20, 10))
console.log(calcPerimeter(2, 9))

// 4. Calculate the area of a triangle

function calcTriangleArea(base, height) {
    return 0.5 * base * height
}

console.log(calcTriangleArea(3, 2))
console.log(calcTriangleArea(10, 10))
console.log(calcTriangleArea(20, 20))

// 5. Extend a string
// write a function accepts a string and adds 'Frontend' onto the end of it

function appendFrontend(str) {
    return str+'Frontend'
}

console.log(appendFrontend('Apple'))
console.log(appendFrontend('Banana'))
console.log(appendFrontend('Orange'))

// 6.  Greater than 100?

function sumGreaterThan100(num1, num2) {
    let add = num1 + num2
    if (add > 100) {
        return true
    } else {
        return false
    }

    // best answer is: return num1 + num2 > 100
}

console.log(sumGreaterThan100(20, 10))
console.log(sumGreaterThan100(50, 60))
console.log(sumGreaterThan100(100, -50))

// 7. Less than or equal to zero

function lessThanOrEqualToZero(num) {
   return num <= 0
}

console.log(lessThanOrEqualToZero(3))
console.log(lessThanOrEqualToZero(0))
console.log(lessThanOrEqualToZero(-2))

// 8. Opposite boolean

function oppositeBoolean(bool) {
    return !bool
}

console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))

// 9. Is not the number 0

function notTheNumberZero(num) {
    return num !== 0
}

console.log(notTheNumberZero(5))
console.log(notTheNumberZero(0))
console.log(notTheNumberZero(null))

// 10. Calculate the remainder

function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(4, 2))
console.log(calcRemainder(7, 8))
console.log(calcRemainder(9, 8))

// 11. Is the number odd?

function isOdd(num) {
    return num % 2 !== 0
}

console.log(isOdd(1))
console.log(isOdd(2))
console.log(isOdd(3))

// 12. If a number is even, return 1 otherwise return -1

function booleanInteger(num) {
    // if (num % 2 == 0) {
    //     return 1
    // } else {
    //     return -1
    // }

    return num % 2 === 0 ? 1 : -1
}

console.log(booleanInteger(1))
console.log(booleanInteger(2))
console.log(booleanInteger(5))

// 13. Check if a user is logged in AND subscribed

function isLoggedInAndSubscribed(str1, str2) {
   return str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED' ? true : false;
}


console.log(isLoggedInAndSubscribed('LOGGED_IN','SUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_IN','UNSUBSCRIBED'))
console.log(isLoggedInAndSubscribed('LOGGED_OUT','SUBSCRIBED'))

