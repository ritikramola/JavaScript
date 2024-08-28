# Projects using DOM

## project link 

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution Code

```javascript
const box = document.querySelectorAll(".button");
const bod = document.querySelector("body")

box.forEach( function(button)
{
    button.addEventListener("click", function(e)
    {
      //console.log(e);  //value of event
      console.log(e.target.id); //target pointing to event
        //using switch 
      switch(e.target.id)
      {
        case 'grey':
        bod.style.backgroundColor="grey";
        break

        case 'white':
        bod.style.backgroundColor="white";
        break

        case 'blue':
        bod.style.backgroundColor="blue";
        break
        case 'yellow':
        bod.style.backgroundColor="yellow";
        break

        default:
        bod.style.backgroundColor="white";
        break
      }
            //using if


      // if(e.target.id === 'grey')
      // {
      //   bod.style.backgroundColor= e.target.id;
      // }
      // if(e.target.id === 'white')
      // {
      //   bod.style.backgroundColor= e.target.id;
      // }
      // if(e.target.id === 'blue')
      // {
      //   bod.style.backgroundColor= e.target.id;
      // }
      // if(e.target.id === 'yellow')
      // {
      //   bod.style.backgroundColor= e.target.id;
      // }
    });
});


```