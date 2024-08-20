//reducce keyword

// const tota = [1,2,3,4]

// const myTotal = tota.reduce( (acc,curval) => acc+curval,0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemprice:"js course",
        price:999
    },
    {
        itemprice:"js course",
        price:999
    },
    {
        itemprice:"python course",
        price:2999
    },
    {
        itemprice:"java course",
        price:799
    },
    {
        itemprice:"c++ course",
        price:899
    }
]

const myNum = shoppingCart.reduce( (acc,cur) => acc+cur.price ,0)
console.log(myNum)