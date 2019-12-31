import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

/*
1.  Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. 
Someone yells - "I do, be happy to bring him over"

people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
retriever = people.find(dog => dog === 'retriever')
return retriever

pulling one value out of an array of any given size has a time complexity of O(1) because only one value is located and returned despite the sive of the array.
*/

/////////////////////////////////////////////////////

/*
2.  Determine the Big O for the following algorithm: 
You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. 
So you want to know if anyone out of the 15 people have the same breed as your dog. 
You start with the first person and ask him if he has a golden retriever. 
He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

people = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
retriever = people.forEach(dog => dog === 'retriever')
return retriever

iterating through an array until a single value is found has a time complexity of O(n) because it will take longer to iterate through a longer array.
*/

/////////////////////////////////////////////////////

// 3
function isEven(value) {
    if (value % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
// this has a time complexity of O(1) because the input is only a single value and gets processed one time.


// 4
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
// this function returns a matching value between two arrays by iterating over both of them and comparing indicies until a matching value is found.
// it has a polynomial time complexity of O(n^2) because both arrays will be iterated over and their size could vary; the size of each array is `n` and the number of arrays is `2`.

// 5 
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
// this function iterates through an array and returns a value that matches its second arg. it has a time complexity of O(n) because the time it takes to complete will vary with the array size.

// 6
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
// this function iterates through two arrays and prints every possible combination of two indices from each. 
// it has a polynomial time complexity of O(n^2) because the array size n could `vary`, but there will always be two arrays, `^2`

// 7
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i == 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
// this is an interative implementation of a fibonacci sequence generator. it has a time complexity of O(n) because the number of iterations varies directly with the size of the input.

// 8
function efficientSearch(array, item) {
    let minIndex = 0; //set the floor to 0
    let maxIndex = array.length - 1; //set the ceiling to the length of the array
    let currentIndex; //place to put the current index being checked
    let currentElement; //value of the current index being checked

    while (minIndex <= maxIndex) { //while the floor is under the ceiling
        currentIndex = Math.floor((minIndex + maxIndex) / 2); //set the current index to the middle of the array
        currentElement = array[currentIndex]; //grab the value of the middle item

        if (currentElement < item) { //if the current middle item still comes before the target item
            minIndex = currentIndex + 1; //increment the floor and start over
        }
        else if (currentElement > item) { //otherwise, if the current middle item comes after the target item
            maxIndex = currentIndex - 1; //decrement the ceiling and start over
        }
        else {
            return currentIndex; //otherwise, return the current middle item. we found it!
        }
    }
    return -1; //if all else fails, return -1 to indicate failure to find the specified item
}
// this function has a time complexity of O(log(n)) because its speed will vary logarithmically with the size of the input array—it's not exactly O(1), 
// but the speed will be less effected by input size than something that is O(n)

// 9
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
// this function has a time complexity of O(1) because it is grabbing a single random element from an array of any given size, and it will always take the same amount of time to generate the random index number.

// 10
function isWhat(n) {
    if (n < 2 || n % 1 != 0) { //if the input is less than two, or is not a whole number, return false
        return false;
    }
    for (let i = 2; i < n; ++i) { //starting at 2 and iterating up to the number below n,
        if (n % i == 0) return false; //if the input is divisible by i, return false
    }
    return true; //return true if the number is not divisible by anything but itself—this is a prime number finder!
}
// this prime number finder has a time complexity of O(n) because its speed varies directly with the size of the input

// 11
function stepsToSolveHanoiT(height, srcP, desP, bufferP) { // stole from the internet
    if (height >= 1) {
  
      // Move a tower of height-1 to the buffer peg, using the destination peg.
      stepsToSolveHanoiT(height - 1, srcP, bufferP, desP);
  
      // Move the remaining disk to the destination peg.
      console.log('Move disk from Tower ', srcP, ' to Tower ', desP);
  
      // Move the tower of `height-1` from the `buffer peg` to the `destination peg` using the `source peg`.        
      stepsToSolveHanoiT(height - 1, bufferP, desP, srcP);
    }
    
    return;
  }
// this function has an exponential time complexity of O(2^n) because the number of moves increases greatly (exponentially) with the input size

// 12 - iterative versions of recursive problems

//// 12.1 - counting sheep
function countSheep(n) {
    for (let i = 1; i <=n; i++) {
        if (i < n) {
            console.log(`${i}: Another sheep jumps over the fence`)
        } else if (i === n) {
            console.log('All sheep jumped over the fence')
        }
    }
}

////12.2 - power calculator
function powers(n, x) {
    let res = n
    if (x >= 0) {
        if (x === 1) {
            return n
        }
        for (let i = 0; i < x; i++) {
            res *= n
        }
        return res
    }
    return 'exponent should be >= 0'
}

////12.3 - reverse string
function reverse(str) {
    let res = []
    let src = str.split('')
    for (let i = src.length; i > 0; i--) {
        res.push(src[i])
    }
    return res.join('')
}

////12.4 - nth triangular number
function triangular(n) {
    
}

////12.5 - string splitter
function splitter(str) {
    
}

////12.6 - fibonacci


////12.7 - factorial

