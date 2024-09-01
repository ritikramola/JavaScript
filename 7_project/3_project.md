# Project 3(Digital clock)

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=3-DigitalClock%2Fchaiaurcode.js,3-DigitalClock%2Findex.html)

```javascript

const clock = document.querySelector('#clock')

//function to give result after some interval 1000=1sec
setInterval(function(){
  const date=new Date()
  clock.innerHTML=date.toLocaleTimeString()

},1000)

```