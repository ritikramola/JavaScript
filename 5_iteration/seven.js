//chaining an array

const myNumers = [1,2,3,4,5,6,7,8,9,10]

//const myNum = myNumers.map((num) => num+10) //nrml method

const myNum = myNumers.map( (num) => num*10)
                      .map( (num) => num*10)        //chaining
                      .filter( (num) => num >= 500)  //filter used

                      console.log(myNum);
                      