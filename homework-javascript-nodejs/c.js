let isRaining = false;
// 0, undefined, NaN, null, '', false
console.log(typeof isRaining);

if(isRaining) {
  console.log('Stay at home');
} else {
  console.log('Go out')
}

const message = isRaining ? 'Stay at home' : 'Go out';
console.log(message);

isRaining ? console.log('Stay at home') : console.log('Go out');

// dynamic type
isRaining = 's';
console.log(typeof isRaining);

// === !== oan tu 3 ngoi typeof 
