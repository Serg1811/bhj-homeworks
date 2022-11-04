let menuLink = document.querySelectorAll('.menu__link')

Array.from(menuLink).forEach(element => {
  if(element.nextElementSibling) {
    element.onclick = () => {
      if(element.nextElementSibling.classList.contains('menu_active')) {
        closeSubMenu();
        return false
      }
      closeSubMenu();
      element.nextElementSibling.classList.add('menu_active')
      return false
    }
  }
});

function closeSubMenu() {
  const allSubMenu = document.querySelectorAll('.menu_active');
  Array.from(allSubMenu).forEach(element => {
    element.classList.remove('menu_active')
  })
}