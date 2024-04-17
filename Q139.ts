// Question139:List three reserved words in javaScript and create a valid use case for each.
// Valid use case for 'let'
function calculateSquare(number1:number) {     //valid use of function
    if (number1 > 0) {
        let square = number1*number1 ; // 'let' used to declare a block-scoped variable
        console.log(`The square of a number is ${square}`);
    } else {
        console.error("Invalid number");    //valid use of if and else
    }
}

calculateSquare(5); // Outputs: find square only positve numbers

