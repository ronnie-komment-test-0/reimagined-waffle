/**
 * @description calculates the value of a positive integer `n` by recursively multiplying
 * `n` by its factorial recursive counterpart until reaching the base case where `n
 * = 0` or `n = 1`.
 * 
 * @param { integer } n - 0-based index of the term to be calculated in the recursive
 * calculation of the factorial function.
 * 
 * @returns { integer } the value of the factorial of a given integer `n`.
 */
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

/**
 * @description determines whether a given number is prime by checking if it is
 * divisible by any integer between 2 and the square root of the number, inclusive.
 * 
 * @param { number } num - number to be checked for primality.
 * 
 * @returns { boolean } a boolean value indicating whether the given number is prime
 * or not.
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * @description takes a temperature in Celsius as input and returns its equivalent
 * value in Fahrenheit, calculated by multiplying by 9/5 and adding 32.
 * 
 * @param { number } celsius - temperature in Celsius that is to be converted to
 * Fahrenheit using the provided formula.
 * 
 * @returns { integer } the temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

/**
 * @description finds the maximum value in an array by iterating through the elements
 * and comparing them to the current maximum value.
 * 
 * @param { array } arr - 1D array of numbers to be searched for the maximum value,
 * which the function then returns.
 * 
 * @returns { number } the maximum value present in the given array.
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/**
 * @description takes a string as input and returns its reversed version by splitting,
 * reversing, and joining the characters back into a string.
 * 
 * @param { string } str - string to be reversed.
 * 
 * @returns { object } the original string reversed and joined back into a single string.
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * @description compares the given string to its reversed version, returning `true`
 * if they are identical and `false` otherwise.
 * 
 * @param { string } str - string that is being tested for palindromicity.
 * 
 * @returns { boolean } a boolean indicating whether the given string is a palindrome
 * or not.
 */
function isPalindrome(str) {
    return str === reverseString(str);
}

/**
 * @description generates a random number within a specified range, returning an
 * integer between `min` and `max`.
 * 
 * @param { integer } min - minimum possible value that the generated random number
 * can take, which is included in the range of values that the function can generate.
 * 
 * @param { integer } max - maximum value that the generated random number can take,
 * which is used to restrict the range of possible values returned by the function.
 * 
 * @returns { integer } a random number between `min` and `max`, inclusive of `min`.
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * @description calculates the area of a circle given its radius.
 * 
 * @param { number } radius - 2-dimensional distance from the center of the circle
 * to any point on its circumference, which is essential for calculating the area of
 * the circle using the formula `A = πr^2`, where A is the area and r is the radius.
 * 
 * @returns { number } the area of a circle, calculated as PI times the radius squared.
 */
function calculateCircleArea(radius) {
    return Math.PI * radius ** 2;
}

/**
 * @description counts the number of times each element in an array occurs by creating
 * an object with the element as a key and its count as its value, then returning
 * that object.
 * 
 * @param { array } arr - array whose occurrences are to be counted and is used to
 * calculate the count of each element in the array using reduce method.
 * 
 * @returns { object } an object with keys representing unique values in the input
 * array and values representing the number of occurrences of each value.
 */
function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});
}

/**
 * @description takes a string `sentence` as input, splits it into individual words,
 * capitalizes the first letter of each word, and then joins them back together with
 * a space to produce a new string with all words capitalized.
 * 
 * @param { string } sentence - string to be capitalized.
 * 
 * @returns { string } a capitalized string of the input sentence's words, separated
 * by spaces.
 */
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
