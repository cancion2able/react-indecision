'use strict';

var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

var nameLet = 'Jen';
console.log('nameLet', nameLet);

var nameConst = 'Frank';
console.log('nameConst', nameConst);

var fullName = 'Andrew Mead';
var firstName = void 0;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
