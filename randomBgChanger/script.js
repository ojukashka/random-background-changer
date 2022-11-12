const body = document.body;
const text = document.querySelector('.text');
const Up = document.querySelector('.Up');
var Val = ['a', 'b', 'c', 'd', 'e', 'f', 1, 2, 3, 4, 5, 6, 7, 8, 9];
var i = 0;
let x = '#';
Up.addEventListener('click', change);
function change() {
  x = '#';
  i = 0;
  for (i; i < 6; i++) {
    x += Val[Math.floor(Math.random() * Val.length)];
  }
  body.style.backgroundColor = x;
  text.innerText = x;
}
