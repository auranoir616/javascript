function panggilRegexp(value) {
    const regex = /html/;
    const regex2 = /css/;   
    if (regex.test(value) || regex2.test(value)) { // bernilai : true
      console.log(value);
    } else {
      console.log("Belajar");
    }
  }
  
  panggilRegexp("Belajar html");        
  panggilRegexp("Belajar javascript");
  panggilRegexp("Belajar css");
  panggilRegexp("Belajar php");
  
  //output :
  //Belajar
  //Belajar html
  //Belajar css
  //Belajar



  const regex = /hello/;
const text = "Hello, world!";

console.log(regex.test(text)); // Output: false

const regex2 = /world/;
console.log(regex2.test(text)); // Output: true

  