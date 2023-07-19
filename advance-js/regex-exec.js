function regexexec(){
    let data = "belajar satu tahun bersama niomic";
    let str  =/niomic/; // new regex ("niomic")

    console.log(str.exec(data));
}
regexexec()

//output :
// [
//     'niomic',
//     index: 27,
//     input: 'belajar satu tahun bersama niomic',
//     groups: undefined
//   ]