// starts from jan 1 1970

let myDate = new Date()
// console.log(myDate.toString()); //complete date with time
// console.log(myDate.toDateString());//only date
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
 //console.log(myDate.toLocaleDateString());    //only dates
 //console.log(myDate.toLocaleString());//gives us date n time in mm/ddd/yyyy format with hr:min:sec

//console.log(typeof myDate);  //object

// let createDate = new Date(2023, 0 ,23)
// console.log(createDate.toString());

// let createDate = new Date(2023, 0 ,23, 5, 3) //5 hr 3 min
// console.log(createDate.toLocaleString());

let createDate = new Date("01-13-2024") //mm-dd-yyyy
//console.log(createDate.toLocaleString());

let myTime = Date.now()

 console.log(myTime)   //gives output in millisecond

// console.log(createDate.getTime())

console.log(Math.floor(Date.now()/1000)); //
//gives output in second



let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());  //strts from 0
console.log(newDate.getDate()); 

newDate.toLocaleString('default',{  ///t//toLocaleString can contain objects can perform various tasks
    weekday:"long",
}
)