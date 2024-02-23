const myArr = [0,1,2,3,4,5]
myArr.push(6)
console.log(myArr);

myArr.pop()   //removes last element
console.log(myArr);

myArr.unshift(9)  // puts as a first element
console.log(myArr);

myArr.shift() //removes last element
console.log(myArr); 

console.log(myArr.includes(9)); //true/false

const newArr = myArr.join()  //join() has made array into string  like in data type
console.log(newArr);

//slice() - dont manipulate the original array
//splice() - change the original array
 
//***************** part 2 arrrays **********************

const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)

// instead of concat lets use spread operator

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes);


const arr3 = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
console.log(arr3.flat(Infinity));   //infinity is the depth, here it is 3 array inside array

 console.log(Array.isArray("Michael"));
 console.log(Array.from("Michael"));

 let score1 = 100
 let score2  =200
 let score3 = 300
 console.log(Array.of(score1,score2,score3));










