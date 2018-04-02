let sumDigits = (num) => {

}

sumDigits(1234)    // => 10




/*function sumDigits(num) {
    let numString = num.toString();
    let total = 0;
    // base case: when we have only one digit left
    if (numString.length === 1) {
        total += parseInt(numString);
    } else {
        // recursive case: add first digit at 0 element
        // then sum digits of sliced string from 1st element to end and convert back to number
        total = total + parseInt(numString[0]) + sumDigits(parseInt(numString.slice(1)));
    }
    return total;
}*/
