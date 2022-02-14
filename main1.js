// function doSomething() {
//     for (var i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('Finally:' + i); //i is also available in outside of for loop //its creates a global variable
// }
// doSomething();
// function doSomething1() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
//     console.log('Finally:' + i); //i is also not available in outside of for loop //its doesnot creates a global variable
// }
// doSomething1();

// // Now using typescript , we get compile time error for console of i but not through javascript
