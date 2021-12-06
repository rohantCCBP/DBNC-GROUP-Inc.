// 2. Write a function in Javascript, which receives NUMBER and has the next logic:
// a) it prints "foo" if NUMBER is divisible by 2;
// b) it prints "bar" if NUMBER is divisible by 7;
// c) it prints "foobar" if NUMBER is divisible by 14;
// d) it prints NUMBER value for other cases;
// note: NUMBER is a positive integer number;

"use strict";

const promptSync = require("prompt-sync");
const prompt = promptSync();

console.log("Hello User, Please enter a positive integer number")

let userNum = prompt();

function sortNumber(uNumber){

        if (uNumber%14==0){
             return 'foobar'
                }

        else if (uNumber%2==0) {
            return 'foo'
                }

        else if (uNumber%7==0){
            return 'bar'
        }
        
        return uNumber
}

console.log(sortNumber(userNum))