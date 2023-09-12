console.log('ushtrimi1')
var numbersArray =[1,2,3,4,5,6,7,8,9,10];
var squaredNumbers = numbersArray.map((number)=>number*number);
console.log(squaredNumbers);
var evenNumbers = numbersArray.filter((number)=>number%2==0);
console.log (evenNumbers);
var sum = numbersArray.reduce((accumulator,currentValue) => (accumulator + currentValue),0);
console.log(sum);

console.log('ushtrimi 2');

const person = {
 name:"Flora",
 age :25,
 occupation:"developer"


}

const addFeature={

  city:"Tirane"
}

const updatedPerson = Object.assign(person,addFeature);
console.log(person);
console.log(updatedPerson);

const entries=Object.entries(person);
console.log(entries);

const keys = Object.keys(person);
console.log(keys);
console.log("Ushtrimi 1 call back functions");



const students = [
  { name: 'John', age: 20 },
  { name: 'Alice', age: 18 },
  { name: 'Bob', age: 22 },
  { name: 'Eve', age: 19 },
 ];
  const sortByProperty = (array, prop) =>{
   console.log(prop);
  const sortedArray= array.sort((a,b) => a.prop- b.prop ||  a.prop.localeCompare(b.prop));
  
  console.log(sortedArray);
 
  }
  sortByProperty(students,"age");
// const sortByProperty = (array, prop,callback) =>{

// const sortedArray= array.sort((a,b)=> a.prop- b.prop);

// console.log(sortedArray);

// callback();

//  };


//  const myCallback = (error,result) => {
//   //console.log('Callback executed!');
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(result);
//   }


//  };
 
//  sortByProperty(students,"age",myCallback);

/*console.log("Ushtrimi 2 json")

const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

const parseJsonString = (jsonString) => {

  
  if (typeof jsonString !=='object' ){

  throw new Error('myJsonObject is not an Json String ');

  }
  const myJsonObject = JSON.parse(text);
  console.log(myJsonObject);


//return myArr;

 };

 parseJsonString(text);




 //Example call:
function isJson(jsonStr) {
  try {
    const obj = parseJsonString(text);
    console.log("The object is : ", obj);
  } catch (error) {
    console.error(error.message);
  }finally{

console.log('Hello World');
  }
  
}
isJson(text);*/