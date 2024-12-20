// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function operationMath(operation, value1, value2){
    switch(operation){
         case '+':
            return value1+value2
        case '-':
            return value1-value2
        case '*':
            return value1*value2
        case '/':
            if(value2 === 0){
                return  'This is not applicable'
            }else{
                return value1/value2
            }
            default: return Error

    }
        }
        console.log(operationMath('/',9,0))