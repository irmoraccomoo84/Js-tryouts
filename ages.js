// @author shankar
const ages = { alice: 18, bob: 27 };
const nullAges = Object.create(null);

function hasPerson(name) {
  return name in ages;
}

function getAge(name) {
  return nullAges[name];
}

console.log(hasPerson("hasOwnProperty")); // true
console.log(getAge("toString")); // [Function: toString]


console.log(getAge("toString")); // [Function: toString]
nullAges.toString = Object.prototype.toString;
console.log(getAge("toString")); // [Function: toString]



