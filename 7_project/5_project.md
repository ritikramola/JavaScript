# Project 5(Random Color on start/stop)

##Project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=6-unlimitedColors%2Findex.html,6-unlimitedColors%2Fchaiaurcode.js)

# Solution Code

```Javascript
const randomColor = function(){
  const hex = "0123456789ABCDEF"
  let color = '#'
  for(let i =0;i<6;i++){
    color +=hex[Math.floor(Math.random() * 16)]

  }
  return color;
};



let intervalId ;
const startChangingColor = function(){
  if(!intervalId){
  intervalId = setInterval(changeBGcolor,1000)
}
  function changeBGcolor() { document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function(){
  clearInterval(intervalId)
  intervalId = null;
};
document.querySelector('#start').addEventListener('click',startChangingColor)

document.querySelector('#stop').addEventListener('click',stopChangingColor)


```