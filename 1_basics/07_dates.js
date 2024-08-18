// starts from jan 1 1970

let myDate = new Date()
// console.log(myDate.toString()); //complete date with time
// console.log(myDate.toDateString());//only date
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

//console.log(typeof myDate);  //object

// let createDate = new Date(2023, 0 ,23)
// console.log(createDate.toString());

// let createDate = new Date(2023, 0 ,23, 5, 3) //5 hr 3 min
// console.log(createDate.toLocaleString());

let createDate = new Date("01-13-2024") //mm-dd-yyyy
//console.log(createDate.toLocaleString());

let myTime = Date.now()

// console.log(myTime)

// console.log(createDate.getTime())

console.log(Math.floor(Date.now()/1000));


//toLocaleString can contain objects can perform various tasks