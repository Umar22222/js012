{
    // 20 - misol
    // function findMiddle(arr) {
    //     const middleIndex = Math.floor(arr.length / 2);
    //     return arr.length % 2 === 0 ? (arr[middleIndex - 1] + arr[middleIndex]) / 2 : arr[middleIndex];
    // }
    
    // console.log(findMiddle([1, 2, 3, 4, 5]));  // Output: 3
    // console.log(findMiddle([1, 2, 3, 4]));    // Output: 2.5
    
}

{
    // 21 - misol
    // function isPrime(n) {
    //     if (n <= 1) return false;
    //     for (let i = 2; i <= Math.sqrt(n); i++) {
    //         if (n % i === 0) return false;
    //     }
    //     return true;
    // }
    
    // console.log(isPrime(7));  // Output: true
    // console.log(isPrime(10)); // Output: false
    
}

{
    // 22 - misol
    // function powerOfNumber(base, exponent) {
    //     return Math.pow(base, exponent);
    // }
    
    // console.log(powerOfNumber(8, 3));  // Output: 512
    
}

{
    // 23 - misol
    // function isPerfectNumber(num) {
    //     let sum = 0;
    //     for (let i = 1; i < num; i++) {
    //         if (num % i === 0) {
    //             sum += i;
    //         }
    //     }
    //     return sum === num;
    // }
    
    // console.log(isPerfectNumber(6));   // Output: true (6 = 1 + 2 + 3)
    // console.log(isPerfectNumber(28));  // Output: true (28 = 1 + 2 + 4 + 7 + 14)
    
}

{
    // 24 - misol
    // function countFactors(n) {
    //     let count = 0;
    //     for (let i = 1; i <= n; i++) {
    //         if (n % i === 0) {
    //             count++;
    //         }
    //     }
    //     return count;
    // }
    
    // console.log(countFactors(12));  // Output: 6 (1, 2, 3, 4, 6, 12)
    
}

{
    // 25 - misol
    // function countLettersInWords(str) {
    //     return str.split(' ').map(word => word.length);
    // }
    
    // console.log(countLettersInWords("hello world"));  // Output: [5, 5]
    
}

{
    // 26 - misol
    // function shortestWord(str) {
    //     const words = str.split(' ');
    //     return words.reduce((shortest, current) => current.length < shortest.length ? current : shortest);
    // }
    
    // console.log(shortestWord("find the shortest word"));  // Output: "the"
    
}

{
    // 27 - misol
    // function checkStringOrNumber(input) {
    //     return typeof input === 'string' ? 'string' : 0;
    // }
    
    // console.log(checkStringOrNumber("hello"));  // Output: "string"
    // console.log(checkStringOrNumber(123));      // Output: 0
    
}

{
    // 28 - misol
    // function reverseString(str) {
    //     return str.split('').reverse().join('');
    // }
    
    // console.log(reverseString("hello"));  // Output: "olleh"
    
}

{
    // 29 - misol
    // function countDigitsInString(str) {
    //     return (str.match(/\d/g) || []).length;  // Use regex to match digits
    // }
    
    // console.log(countDigitsInString("abc123def456"));  // Output: 6
    
}

{
    // 30 - misol
    // function reverseNumber(num) {
    //     return parseInt(num.toString().split('').reverse().join(''), 10);
    // }
    
    // console.log(reverseNumber(12345));  // Output: 54321
    
}