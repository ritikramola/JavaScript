let a=90
const b = 80
//var c = 70 we don't use var as it gives problem while in scope

//console.log(a);
//console.log(b);
//console.log(c);

//our scope in console and enviroment (vs code) is different


function one(){
    const user = "Ritik"

    function two(){                 //here two can take from one 
        const website= "youtube"    //but not vice versa
        console.log(user);
    }
    //console.log(website); 

    two()
}

one()

// interesting 

function addone(num)
{
    return num+1
}

addone(7) //if we wtite addone before the (function addone) it will run

const addtwo = function(num){  //also called as expression
    return num+2
}

addtwo(8) //if we write addtwo() before (addtwo function) it won't run

