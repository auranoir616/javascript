
function panggilNestedArray(value){

    let result = [];
    for (let i = 0; i < value[0].length; i++) { // menentukan panjang index array baru
      let temp = [];
      for (let j = 0; j < value.length; j++) {  // mengambil element dengan index yang sama
        temp.push(value[j][i]);                 // memasukkan element ke varriabel temp  
      }
      result.push(temp);
    }
    console.log(result);
  }
   var nestedArray = [
      [1,2,3,4],
      ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
      ['Facebook', 'Tesla', 'Microsoft', 'Apple']
   ]
   
   panggilNestedArray(nestedArray)