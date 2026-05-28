function multiply (a,b,c){
    if (a === b || a === c || b === c ) {
        return "Numbers must be different";

} 
return a * b * c;
}

console.log (multiply(8,5,4));
console.log (multiply(8,5,8));

let convertToSeconds = function (minutes){
    return minutes * 60;
}

console.log (convertToSeconds(5));

let fahrenheitToCelsius = function (fahrenheit){
    return (fahrenheit - 32) * 5/9;
};

console.log (fahrenheitToCelsius(100));

let text = "JavaScript is fun!";
function reverseString(str) {
    return str.split("").reverse().join("");
}

console.log(reverseString(text));

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++){
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels ("Javascript is fun!"));

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true; 
}

console.log(isPrime(3)); 
console.log(isPrime(11)); 
console.log(isPrime(33)); 
console.log(isPrime(45));

