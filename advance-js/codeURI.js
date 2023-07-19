var uri = "https://www.example.com/my page.html";
var encodedURI = encodeURI(uri);
console.log(encodedURI);
// Output: "https://www.example.com/my%20page.html"

var encodedURI = "https://www.example.com/my%20page.html";
var decodedURI = decodeURI(encodedURI);
console.log(decodedURI);
// Output: "https://www.example.com/my page.html"

var component = "my parameter=value&test";
var encodedComponent = encodeURIComponent(component);
console.log(encodedComponent);
// Output: "my%20parameter%3Dvalue%26test"

var encodedComponent = "my%20parameter%3Dvalue%26test";
var decodedComponent = decodeURIComponent(encodedComponent);
console.log(decodedComponent);
// Output: "my parameter=value&test"
