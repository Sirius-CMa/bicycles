const themes = document.querySelectorAll('.theme')
const switchFlagBox = document.querySelector('.switch__flag-box')

function initSwitch() {
  const buttons = document.querySelector('.switch')

  const lightButton = buttons.querySelector('.switch__button-light')
  const darkButton = buttons.querySelector('.switch__button-dark')

  lightButton.addEventListener('click', (evt) => {
    themes.forEach(elem => elem.classList.remove('dark'))
    switchFlagBox.classList.remove('switch__flag-box_dark', 'move')
  })

  darkButton.addEventListener('click', (evt) => {
    themes.forEach(elem => elem.classList.add('dark'))
    switchFlagBox.classList.add('switch__flag-box_dark', 'move')

  })

}

initSwitch();

function initMenuButton() {
  const menu = document.querySelector('.menu')
  const menuButton = menu.querySelector('.menu__button')
  const switcher = menu.querySelector('.switch')
  const subblock = menu.querySelector('.menu__subblock')

  const openMenu = () => {
    console.log('open');
    subblock.classList.add('menu__subblock_open')
  }

  const closeMenu = () => {
    console.log('close');
    subblock.classList.remove('menu__subblock_open')
  }

  menuButton.addEventListener('click', (evt) => {
    subblock.className.includes('menu__subblock_open') ?
      closeMenu()
      : openMenu()
  })

}





initMenuButton();
