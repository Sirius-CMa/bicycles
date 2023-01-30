
function initSwitch() {


  function initTransferSwitch() {
    const transferSwitchToDarkTheme = () => { }
    const transferSwitchToLightTheme = () => { }
    return { transferSwitchToDarkTheme, transferSwitchToLightTheme }
  }
  const { transferSwitchToDarkTheme, transferSwitchToLightTheme } = initTransferSwitch()

  const buttons = document.querySelectorAll('.switch')
  buttons.forEach((el) => {
    const lightButton = el.querySelector('.switch__button-light')
    const darkButton = el.querySelector('.switch__button-dark')
    const flagBox = el.querySelector('.switch__flag-box')

    lightButton.addEventListener('click', (evt) => {
      flagBox.classList.remove('switch__flag-box_move')
      turnOffDarkTheme()
    })

    darkButton.addEventListener('click', (evt) => {
      flagBox.classList.add('switch__flag-box_move')
      turnOnDarkTheme()
    })
  }
  )
}

initSwitch();

function initSwitchingTheme() {
  const blocks = document.querySelectorAll('.theme')
  let a = []
  const turnOnDarkTheme = () => {
    blocks.forEach(el => (
      a = el.className.split(' '),
      el.classList.add((a[0] + '_dark'))
    ))
  }

  const turnOffDarkTheme = () => {
    blocks.forEach(el => (
      a = el.className.split(' '),
      el.classList.remove((a[0] + '_dark'))
    ))
  }

  return { turnOnDarkTheme, turnOffDarkTheme }
}

const { turnOnDarkTheme, turnOffDarkTheme } = initSwitchingTheme();

function initMenuButton() {
  const menu = document.querySelector('.menu')
  const menuButton = menu.querySelector('.menu__button')
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
