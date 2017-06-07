var numberArray = [6, 5, 4, 3, 2, 1];
console.log(numberArray);

var didSwap = true;
var charNoToLoopThrough = numberArray.length - 1;
do {
    didSwap = false;
    for(var i = 0; i < charNoToLoopThrough; i++) {
        if(numberArray[i] > numberArray[i + 1]) {

            // Switch the numbers
            var temp = numberArray[i];
            numberArray[i] = numberArray[i + 1];
            numberArray[i + 1] = temp;

            // We know we swapped, so we want to do this again
            didSwap = true;
        }
    }

    // On each run through, we're moving the next highest value
    // to as far to the right as it belongs, so no need to always
    // iterate over all the numbers in the array.
    charNoToLoopThrough--;
} while(didSwap);
console.log(numberArray);