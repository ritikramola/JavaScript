//for of

//string inside array -> ["","","",""]
//object inside array -> [{},{},{},{}]

const arr =[1,2,3,4,5]

for (const num of arr) { //no need to give cond and increments
   // console.log(num);
}

const greeting = "Hello Ritik!"
for(const num of greeting){
    //console.log(num);
    
}


//map 

const map = new Map()
map.set('IN',"India")
map.set('FR',"france")
map.set('SL',"srilanka")

//console.log(map);

for(const key of map)
{
    //console.log(key)    //[ 'IN', 'India' ]
                        //[ 'FR', 'france' ]
                        //['SL', 'srilanka' ]
}

//to get key only
for(const [key] of map)
    {
        //console.log(key)    //IN
                            //FR
                            //SL
    }

    //to get value only
    for(const [value] of map)
        {
            //console.log(value)    //IN
                                //FR
                                //SL
        }


//to get key value
for(const [key,value] of map)
    {
       // console.log(key,value)    //IN
                            //FR
                            //SL
    }


    //in for of we can't run object
    //for in is used for object (four.js)
//     const myObj = {
//         'game1' : "ritik",
//         'game2' :"pop",
//         'game3' :"nfs"
//     }

// for(const [key,value] of myObj)
//     {
//         console.log(key ,':' ,value);
        
//     }    