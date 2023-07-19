
function panggilNestedArray(value){
//     for (var i = 0; i < value.length; i++) {
//      console.log('id :', value[i][0])
//      console.log('name :', value[i][1])
//      console.log('company :', value[i][2])
//      console.log('\n')
//     }

nestedArray.forEach((element) => {
    const id = element[0];
    const name = element[1];
    const company = element[2];
    console.log("id:", id,'\n', "name:", name,'\n', "company:", company,'\n','\n');
  });
}
   var nestedArray = [
     [1, "Mark Zuckerberg", "Facebook"],
     [2, "Elon Musk", "Tesla"],
     [3, "Bill Gates", "Microsoft"],
     [4, "Steve Jobs", "Apple"]
   
    ]
   
   panggilNestedArray(nestedArray)