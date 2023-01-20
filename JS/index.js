const themes = document.querySelectorAll('.theme')
const switchFlagBox = document.querySelector('.switch__flag-box')

function initSwitch() {
  const buttons = document.querySelector('.switch')

  const lightButton = buttons.querySelector('.switch__button-light')
  const darkButton = buttons.querySelector('.switch__button-dark')

  lightButton.addEventListener('click', (evt) => {
    themes.forEach(elem => elem.classList.remove('dark'))
    switchFlagBox.classList.remove('switch__flag-box_dark')
  })

  darkButton.addEventListener('click', (evt) => {
    themes.forEach(elem => elem.classList.add('dark'))
    switchFlagBox.classList.add('switch__flag-box_dark')

  })

}

initSwitch();
