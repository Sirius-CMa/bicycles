
function initSwitch() {


  function initTransferSwitch() {
    const flagBoxs = document.querySelectorAll('.switch__flag-box')

    const transferSwitchToDarkTheme = () => {
      flagBoxs.forEach(el => el.classList.add('switch__flag-box_move'))
    }
    const transferSwitchToLightTheme = () => {
      flagBoxs.forEach(el => el.classList.remove('switch__flag-box_move'))
    }
    return { transferSwitchToDarkTheme, transferSwitchToLightTheme }
  };
  const { transferSwitchToDarkTheme, transferSwitchToLightTheme } = initTransferSwitch();

  const buttons = document.querySelectorAll('.switch')
  buttons.forEach((el) => {
    const lightButton = el.querySelector('.switch__button-light')
    const darkButton = el.querySelector('.switch__button-dark')

    lightButton.addEventListener('click', (evt) => {
      turnOffDarkTheme(),
        transferSwitchToLightTheme()
    })

    darkButton.addEventListener('click', (evt) => {
      turnOnDarkTheme(),
        transferSwitchToDarkTheme()
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




function setSliderHandler(selector) {
  console.log(selector);
  const sliderContent = document.querySelector(selector);
  console.log(sliderContent);
  const sliderContainer = sliderContent.parentElement;
  console.log(sliderContainer);
  if (!sliderContainer) {
    return;
  }

  const leftBtn = document.querySelector(".type__button_left");
  const rightBtn = document.querySelector(".type__button_right");
  const slidersCount =
    sliderContainer.querySelectorAll(".item").length;
  let counter = 1;
  const counterContainer = sliderContainer.querySelector(".about__roll");

  leftBtn.addEventListener("click", () => {
    sliderContent.scrollLeft -= sliderContainer.offsetWidth;
  });

  rightBtn.addEventListener("click", () => {
    sliderContent.scrollLeft += sliderContainer.offsetWidth;
  });
}

setSliderHandler(" .slider-box");


// function onLoad() {

//   setSlidersHandlers();
// }

// window.addEventListener("load", onLoad);
