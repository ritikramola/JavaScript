# Project 6(keyboard check)

##Project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=5-keyboard%2Fchaiaurcode.js,5-keyboard%2Findex.html)

#Solution Code

```Javascript
console.log('Project 5');

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `<div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
  </div>`;
})

```