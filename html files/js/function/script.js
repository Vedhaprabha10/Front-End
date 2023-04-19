// //function declaration
// function isPositive(num){//parameter
//     return num>0
// }
// console.log(isPositive(-5))//argumnet

// function sayhello(){
//     console.log('hello')
// }
// sayhello()

// function factorial(n){
//     if(n==1)
//     return 1
//     return n*factorial(n-1)
// }
// console.log(factorial(6))

// //function expression
// let a= 100
// let isEven = function(num){
//     return num%2==0
// }
// console.log(isEven(5))

// //for each

// arr = ['vedha','deepa','anish']
// arr.forEach(print)
// function print (val){
//     console.log(val.toUpperCase())
// }

// arr.forEach(val => console.log(val))

// arr.forEach((val,index,arr)=>{
//     arr[index]= val.toUpperCase()
// })
// console.log(arr)

// arr = ['mech','csc','civil','IT']
// arr.forEach(val => {
//     const opt = document.createElement('option')
//     opt.textContent = val
//     opt.value = val
//     document.getElementById('branch').appendChild(opt)
// })

// //map function
// let priceUSD =[20,35,30]
// let priceINR = priceUSD.map(x=> x*83)
// console.log(priceINR)


// const input =[  //array of objects
//     {name:'vedha',age:25},
//     {name:'prabha',age:15},
//     {name:'anish',age:13},
//     {name:'chinna',age:12},

// ]
// const ages = input.map(x=> x.age)
// const names = input.map(x => x.name)
// console.log(names)
// console.log(ages)

// //filter

// let cost =[35,65,45,95]
// let lessThen50 =cost.filter(x=>x<50)
// console.log(lessThen50)

// let cartTotal = cost.reduce((total,el)=>total+el)
// console.log(cartTotal)


// arr2d = [
//     ["a","b","c"],
//     ["d","c","e"],
//     ["d","e","d"],
//     ["d","e","b"],
// ];
// let result ={'a':1,'b':2}
// result['c']=1
// //result = {a:1,b:1,c:2,d:3,e:1}
// let count = arr2d.flat().reduce(
//     (accumulator,currVal)=>{
//     if(accumulator[currVal])
//     accumulator[currVal]++
//     else
//     accumulator[currVal] = 1
//     return accumulator
// }
//     ,{});
// console.log(count);


// let b =1 
// function func1(){

//     console.log('b is ',b)
// }

// func1()

// b =200
// func1()
// =====================================================================================================
//returing functions - higher order function
//lexical scoping - inner scop can access outer function
// function outer(name){
//     let outerVarible ='bread'
//     function inner(){
//         let innerVariable ='butter'
//         console.log('inner variable',innerVariable)
//         console.log('outer variable',outerVarible)
//         console.log('food name',name)
//     }
//     return inner
// }

// let call1 = outer('sanwitch')
// call1()

// function muilt(x){
//     return function(y){
//         return x*y
//     }
// }
// let muilt1 = muilt(5)
// console.log(muilt1(10))

// let muilt2 = muilt(3)
// console.log(muilt2(3))
//=================================================================================
//set object ==> Collection of values - values are set by unique

// let arr = [1,1,2,2,2,3,3,6,6,4,4,8,8,9];
// let newArr=[];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if (newArr.includes(arr[i])){
        
//     }
//     else{
//         newArr.push(arr[i]);
//     }
// }
// console.log(newArr);

// let arr = [1,1,2,2,2,3,3,6,6,4,4,8,8,9]
// let mySet1 = new Set(arr)
// console.log(arr)
// console.log(mySet1)

// let mySet2 = new Set()
// mySet2.add(5)
// mySet2.add('vedha')
// mySet2.add(3)
// mySet2.add('prabha')
// mySet2.add({a:1,b:2})
// mySet2.add(5)
// console.log(mySet2)

// let obj = {'a':1,'b':2}
// mySet2.add(obj)
// console.log(mySet2)
// console.log(mySet2.size)
// console.log(mySet2.has(4))
// console.log(mySet2.delete(5))
// console.log(mySet2)

// let arr2 = Array.from(mySet2)
// console.log(arr2)
//=========================================================================================

//Map
//map object are collection of key value pairs.
//A key in the map may only occur once
//key or value can be object

// let map1 = new Map()
// map1.set('a',2)
// map1.set('b',20)
// map1.set('vedha',8)
// map1.set('vedha',100)

// console.log(map1)

// //to change the values to array
// let kvArray = [['a',20],['b',40]]
// let map3 = new Map(kvArray)
// console.log(map3)

//==================================================================================================
