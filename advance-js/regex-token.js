const regex = /(\d{2})-(\d{2})-(\d{4})/; // mencari pola digit 2 dan 4 
const text = "Tanggal lahir saya adalah 01-05-1990";

const result = regex.exec(text);
console.log(result);

// output:
// [
//     '01-05-1990',
//     '01',
//     '05',
//     '1990',
//     index: 26,
//     input: 'Tanggal lahir saya adalah 01-05-1990',
//     groups: undefined
//   ]