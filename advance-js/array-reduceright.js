const array1 = [[0,1],[3,4],[8,6]].reduceRight(
    (accumulator,currentvallue) => accumulator.concat(currentvallue)

)
console.log(array1)
//output : [ 8, 6, 3, 4, 0, 1 ]

const words = ["budi", "makan", "ikan"];

const result = words.reduceRight(function(accumulator, currentValue) {
  return accumulator + " " + currentValue;
});

console.log(result); // Output: "ikan makan budi"
