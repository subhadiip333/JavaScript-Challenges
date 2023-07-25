// 1. Show rating
// Given a rating, display a star(*) for each full rating and a full-stop(.) for each half rating.

function showRating(rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); i++) {
        if (i === Math.floor(rating) - 1) {
            ratings = ratings + "*"
        }
        else{
        ratings = ratings + "* "
        }
    }
    if (!Number.isInteger(rating)) {
        ratings = ratings + " ."
    } 
    return ratings;
}

console.log(showRating(3.5));

// 2. Sort by lowest to highest price

function sortLowToHigh(arr) {
    return arr.sort((a, b) => {
        return a - b;
    })
}


console.log(sortLowToHigh([20,40,10,30,50,10]));

// 3. Sort by highest to lowest price
// Given an array of objects, return the prices sorted by high to low

function sortHighToLow(arr1) {
    return arr1.sort((a, b) => {
        return b.price - a.price
    })
}

console.log(sortHighToLow([
    {id:1, price:50},
    {id:1, price:30},
    {id:1, price:60},
    {id:1, price:10} 
]))


// 4.  Find all the posts by a single user calling an API

async function findPosts(userId) {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');

    const data = await posts.json();

   const result = data.filter(element => element.userId === userId)
   console.log(result);
}

findPosts(4);


// 5. Call an API and return the first 6 incomplete todo's from the result.

async function firstSixIncomplete(userId) {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos');

    const result = await todos.json();

    const incompletedTasks = result.filter(elem => !elem.completed).slice(0, 6);

    console.log(incompletedTasks);
}


firstSixIncomplete(6)