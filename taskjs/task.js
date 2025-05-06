// function countDivisors(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) count++;
//   }
//   return count;
// }

// console.log(countDivisors(6)); 


// let sampleNews = `As software developers, the natural tendency is to start developing applications based on your ownhands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// let spaceCount = sampleNews.split(' ').length - 1;
// console.log(spaceCount);

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("1-ci ədədi daxil edin: ", (baseInput) => {
//   rl.question("2-ci ədədi daxil edin: ", (powerInput) => {
//     const base = parseInt(baseInput);
//     const power = parseInt(powerInput);

//     function powerFunction(a, b) {
//       return Math.pow(a, b);
//     }

//     console.log("Nəticə:", powerFunction(base, power));
//     rl.close();
//   });
// });




// function convertToUpper(text) {
//   return text.toUpperCase();
// }

// console.log(convertToUpper("Hello World")); // "HELLO WORLD"


// function reverseWordOrder(sentence) {
//   return sentence.split(' ').reverse().join(' ');
// }

// console.log(reverseWordOrder("Hello Javascript "));



//   const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];


//   if (!shoppingCart.includes('Meat')) {
//     shoppingCart.unshift('Meat');
//   }


//   if (!shoppingCart.includes('Sugar')) {
//     shoppingCart.push('Sugar');
//   }


//   const honeyIndex = shoppingCart.indexOf('Honey');
//   if (honeyIndex !== -1) {
//     shoppingCart.splice(honeyIndex, 1);
//   }


//   const teaIndex = shoppingCart.indexOf('Tea');
//   if (teaIndex !== -1) {
//     shoppingCart[teaIndex] = 'Green Tea';
//   }

//   console.log(shoppingCart);




//   const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
// const backEnd = ['Node','Express', 'MongoDB'];

// const fullStack = frontEnd.concat(backEnd);
// console.log(fullStack);