'use strict';

document.querySelector(' .root-nav').onclick = function(event){
  if(event.target.nodeName !== 'SPAN') return;

  closeAllSubMenu(event.target.nextElementSibling);
  event.target.nextElementSibling.classList.toggle('sub-menu-active');
};



function closeAllSubMenu (current = null){
  let parent = [];
  if (current) {
    let currentParent = current.parentNode;
    
    while(currentParent){
      if (currentParent.classList.contains('root-nav')) break;
      if(currentParent.nodeName === 'UL') parent.push(currentParent);
      currentParent = currentParent.parentNode;
    }
  }

  const subMenu = document.querySelectorAll('.root-nav ul');
  Array.from(subMenu).forEach(item => {
    if(item !== current && !parent.includes(item))
    item.classList.remove('sub-menu-active');
  });
}


document.querySelector(' .buy').onclick = function(event){
  if(event.target.nodeName !== 'BUTTON') return;
  closeAllSubMenu(event.target.nextElementSibling);
  alert('Товар у Вашій корзині. Дякуємо за покупку!');
};

