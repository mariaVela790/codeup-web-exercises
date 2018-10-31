/////////JS is fundamentally asynchronous
// setTimeout(function () {
//     console.log('Now');
// }, 1000);
//
// console.log('later');

// $.get().done().fail();

// //wait .8 seconds and then resolve
// var promiseExample = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         resolve();
//     }, 800);
// });
//
// console.log(promiseExample);//pending
//
// setTimeout(function () {
//     console.log(promiseExample);//resolved
// }, 1100);


// //Flip a coin after 1 second
// //if heads, resolve else if tails reject
// let delay = Math.random() * 1000 + 500;
//
// //producing a promise
// let coinFlip = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if(Boolean(Math.random() > .5)) {
//             resolve('HEADS!');
//         } else {
//             reject("Tails!");
//         }
//     }, delay);
// });
//
// // console.log(coinFlip);
// //
// // setTimeout(function () {
// //     console.log(coinFlip);
// // }, 800);
//
// //consuming promises
// coinFlip.then(function (data) {
//     console.log(data);
// });
//
// coinFlip.catch(function (error) {
//     console.log(error);
// });
//
