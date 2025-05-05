let btnNext = document.querySelector('.next');
let btnBack = document.querySelector('.back');

let list = document.querySelector('.list');
let thumb = document.querySelector('.thumb');
let container = document.querySelector('.container'); // <-- Correção aqui

btnNext.onclick = () => moveItemsOnclick('next');
btnBack.onclick = () => moveItemsOnclick('back');

function moveItemsOnclick(type) {
  let listItems = document.querySelectorAll('.list .list-item');
  let thumbItems = document.querySelectorAll('.thumb .thumb-item');

  if (type === 'next') {
    list.appendChild(listItems[0]);
    thumb.appendChild(thumbItems[0]);
    container.classList.add('next');
  } else {
    list.prepend(listItems[listItems.length - 1]);
    thumb.prepend(thumbItems[thumbItems.length - 1]);
    container.classList.add('back');
  }

  setTimeout(() => {
    container.classList.remove('next');
    container.classList.remove('back');
  }, 3000); // tempo menor, igual ao da animação
}
