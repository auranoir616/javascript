
    // let str = "abcdefghijklmnopqrstuvwxyz";
   
    // console.log(str.search(/K/)) //output : -1
    // console.log(str.search(/K/i)) //output : 10
    // console.log(str.search(/k/i)) //output : 10

    // const regex = /hello/gi;
    // const text = "Hello, hello, HELLO";
    
    // console.log(text.match(regex)); 
    // // Output: ["Hello", "hello", "HELLO"]
    
const regex = /\d+/; // Pola untuk mencocokkan angka
const text = "Today is July 8, 2023";

const result = text.match(regex);
console.log(result);
 //output : [ '8', index: 14, input: 'Today is July 8, 2023', groups: undefined ]

 var regexflagg = "abcdefghijklmnopqrstuvwxyz - abcdefghijklmnopqrstuvwxyz"
 console.log(regexflagg.match(/f/g))
 //output : [ 'f', 'f' ]

 