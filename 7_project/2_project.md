# Project two (BMI Calculator)

### Project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=2-BMICalculator%2Findex.html)

```javascript

const form = document.querySelector('form');

//const height = parseInt(document.querySelector('#height').value) //we don't use this as it gives us empty value

form.addEventListener('submit' , function(e){
e.preventDefault();

const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');

if(height === '' || height < 0 || isNaN(height))
{
  results.innerHTML = `Please enter a valid height ${height}`;

} else if(weight === '' || height <0 || isNaN(weight)){
  results.innerHTML = `Please enter a valid weight ${weight}`;
}else{
  const res = (weight/((height * height)/ 10000)).toFixed(2);


results.innerHTML = `<span>${res}</span>`
}
});


```