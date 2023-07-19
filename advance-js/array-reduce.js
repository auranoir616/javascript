const array1 = [1,2,3,4,5,6,7,8,9,10];

const reduce1 =(accumulator,currentvalue) => accumulator + currentvalue

            //function(accumulator,currentvalue){return accumulator + currentvalue}

console.log(array1.reduce(reduce1))
//output : 110

const words = ['Hello', 'world', '!'];
const combinedString = words.reduce((accumulator, currentValue) => accumulator + currentValue.toString());
console.log(combinedString); // Output: "Helloworld!"
