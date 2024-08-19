const tinderUser  = {}

tinderUser.id = "123"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true

//console.log(tinderUser);


const User = {                      //nested object
    email : "ritik@gmail.com",
    fullname: {
        userName:{
            firstName : "Ritik",
            lastName:"Ramola"
        }
    }
}

//console.log(User.fullname.userName.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
//const obj1 = {1:"a",2:"b"}

//const obj3 = {obj1,obj2}//will give wrong output
//const obj3 = Object.assign({}/*to make sure it is in target*/,obj1,obj2) 
//gives { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1,...obj2}

//console.log(obj3);


//User[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

//destructuring

const course = {
    courseName : "javascript",
    price : "999",
    instructorName : "Ritik"
}

//course.instructorName

const {instructorName : instructor} = course  //using instructor instead of writing instructorName we can use course

console.log(instructor)         //