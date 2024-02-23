const name = "paul "
const repoCount = 50

console.log(name + repoCount + " value");  // not clean code less recommended

//alternate approach
console.log(`Hello my name is ${name}and my repo count is ${repoCount}`);

const newString = "   helloworld  "
console.log(newString.trim());

const url = "https://john.com/johnpaul%20etc"
console.log(url.replace('%20','-'));

console.log(url.includes('you'));

console.log(newString.split('-'));