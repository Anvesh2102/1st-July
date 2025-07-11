
// console.log("Hello World");
// function sayHello(){
//     console.log("hello from js")
// }
// sayHello();
// console.log("This is a simple JS program");

// console.log("one");
// console.log("two");
// setTimeout(()=>{
//     console.log("Hello World");
// },5000);
// console.log("three");
// console.log("four");

//Recurssion
//a function call it self untill the condition false or condition satisfies
//callBack
// callback is function that is passed as an argument to another function and is executed after the complition of that function.
// const sum=(a,b)=>{
//     console.log(a+b);
// }
// function calculator(a,b,ds){
//     ds(a,b);
// }
// calculator(10,20,sum);
// calculator(5,10,(a,b)=>{
//     console.log(a+b);
// });

// for (let i=0;i<5;i++){
//     let str="";
//     for(let j=0;j<5;j++){
//         str+=j;
//     }
//     console.log(i,str);
// }
// function getData(dataid){
//     setTimeout(()=>{
//         console.log("Fetching data for id: ",dataid);
//     },5000);
// }
// function getData1(dataid){
//     setTimeout(()=>{
//         console.log("Fetching data for id: ",dataid);
//     },6000);
// }
// function getData2(dataid){
//     setTimeout(()=>{
//         console.log("Fetching data for id: ",dataid);
//     },7000);
// }
// getData(1)
// getData1(2)
// getData2(3)

// function getData(dataid,x,getnextdata){
//     setTimeout(()=>{
//         console.log("fetching data for id: ",dataid);
//         if (getnextdata){
//             getnextdata();
//         }
//     },x);
// }
// getData(1,5000,()=>{
//     console.log("getting data 2...");
//     getData(2,2000,()=>{
//         console.log("getting data for 3...");
//         getData(3,1000);
//     });
// });

//callbackhell nested call back
//to over come that we use promises
//promise for eventually completion of an operation
//promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value it allows you to write asynchronous code in a more manageable way, avoiding callback hell.

//promise syntax
//const myPromise = new Promise((resolve,reject)=>{..})
//resolve is called when the asynchronous operation is successfull
//reject is called when the asynchronous operation fails.

// const myPromise = new Promise((resolve,reject)=>{
//     //asynchronous operation
//     setTimeout(()=>{
//     const success= 1;//Simulate success or failure
//     if(success){
//         resolve("Data fetched succesfully");
//     }else{
//         reject("Error fetching data");
//     }
//     },2000);
// });

// myPromise.then((data)=>{
//     console.log("Promise resolved with data:",data);
// })
// .catch((error)=>{
//     console.error("Promise rejected with error:",error);
// })
// let promise= new Promise((resolve,reject)=>{
//     console.log("iam iron man");
//     if(1<0){
//         resolve(123);
//     }
//     reject("iam Thanos");
// });
//write a .then block to excecute with out error

// function getData(dataid){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("Fetching data for id:",dataid);
//             resolve("success");
//         },2000);//use 2 sec for quick testing
//     });
// }
// let result=getData(123);
// result;
// getData(101).then(result=>{
//     console.log("First fetch:",result);
//     return getData(102);
// })
// .then(result=>{
//     console.log("Second fetch:",result);
//     return getData(103)
// })
// .catch(error=>{
//     console.error("Fetching failed..!",error);
// });

