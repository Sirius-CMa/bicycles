const blocks = document.querySelectorAll('.theme')
let a = []


const switchFlagBox = document.querySelector('.switch__flag-box')


function initSwitch() {
  const buttons = document.querySelector('.switch')

  const lightButton = buttons.querySelector('.switch__button-light')
  const darkButton = buttons.querySelector('.switch__button-dark')

  lightButton.addEventListener('click', (evt) => {
    // themes.forEach(elem => elem.classList.remove('dark1'))
    switchFlagBox.classList.remove('switch__flag-box_dark', 'move')
    blocks.forEach(el => (
      a = el.className.split(' '),
      // a = a[0] + '_dark',
      el.classList.remove((a[0] + '_dark'))
    ))

  })

  darkButton.addEventListener('click', (evt) => {
    // themes.forEach(elem => elem.classList.add('dark1'))*/
    switchFlagBox.classList.add('switch__flag-box_dark', 'move')
    blocks.forEach(el => (
      a = el.className.split(' '),
      // a = a[0] + '_dark',
      el.classList.add((a[0] + '_dark'))
    ))
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
