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

