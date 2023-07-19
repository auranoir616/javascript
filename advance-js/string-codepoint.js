const codePoint1 = 72;
const codePoint2 = 101;
const codePoint3 = 108;
const codePoint4 = 108;
const codePoint5 = 111;

const string = String.fromCodePoint(codePoint1, codePoint2, codePoint3, codePoint4, codePoint5);
console.log(string); // Mengembalikan string "Hello"

const string2 = "🌍";
console.log(string2.codePointAt(0)); // Mengembalikan nilai code point untuk karakter '🌍' (128149)
