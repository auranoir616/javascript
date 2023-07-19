function eval1(){
    var x = [1,2,3,4,5,6,7,8,9];
    var total = 0;
    for (i=0;i<x.length;i++){
        total += x[i];
    }
    console.log(total);
}

eval1()


const x = 10;
const y = 20;
const code = 'console.log(x + y);';
eval(code);

//output : 30