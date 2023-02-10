
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
const bodyStyle = document.querySelector('.body')
function initSwitchingTheme() {
  const blocks = document.querySelectorAll('.theme')
  let a = []
  const turnOnDarkTheme = () => {
    blocks.forEach(el => (
      a = el.className.split(' '),
      el.classList.add((a[0] + '_dark')),
      bodyStyle.style.cssText = ('--color: #fff'),
      bodyStyle.style.setProperty('--color-link-bicycles_active', '#fff'),
      bodyStyle.style.setProperty('--color-link-bicycles', '#e5e5e5')
    ))
  }

  const turnOffDarkTheme = () => {
    blocks.forEach(el => (
      a = el.className.split(' '),
      el.classList.remove((a[0] + '_dark')),
      bodyStyle.style.cssText = ('--color: #151515'),
      bodyStyle.style.setProperty('--color-link-bicycles_active', '#151515'),
      bodyStyle.style.setProperty('--color-link-bicycles', '#222')
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

// setSliderHandler(".slider__conteiner");



const formTemplate = document.querySelector('#forms').content;
const box = document.querySelector('.slider__container_1')

const creatCard = (name, link, idx) => {
  const card = formTemplate.querySelector('.bicycles__card').cloneNode(true)
  const imageCard = card.querySelector('.bicycles__image')
  const model = card.querySelector('.bicycles__model')
  model.textContent = name
  imageCard.src = link
  imageCard.textContent = name
  card.classList.add(`bicycles__card_place-${++idx}`)
  return card
}

const createBlockCards = ([type, ...[data]]) => {
  const blockCards = formTemplate.querySelector('.bicycles__block-cards').cloneNode(true);
  data.forEach((el, idx) =>
    blockCards.prepend(creatCard(el.name, el.link, idx)))
  blockCards.id = `target-${type}`
  return blockCards
}

const addBlockCards = (el) => {
  box.prepend(createBlockCards(el))
}

const InitBicyclesCard = () => {
  cardsBicycles.forEach(el =>
    addBlockCards(el))
  box.firstChild.classList.add('bicycles__block-cards_active')

}


InitBicyclesCard()
const links = document.querySelectorAll('.nav-block__link_bicycles')
const blockCards = formTemplate.querySelector('.bicycles__block-cards')

function switchType() {
  links.forEach(el => el.addEventListener(("click"), (evt) => {
    evt.preventDefault(),
      visible(evt)
  })
  )
}

switchType()


const bicyclesBlockCards = document.querySelectorAll('.bicycles__block-cards')
const bicyclesLinks = document.querySelectorAll('.nav-block__link_bicycles')

function visible(evt) {
  bicyclesBlockCards.forEach(el => {
    el.id === `target-${evt.target.id}`
      ? el.classList.add('bicycles__block-cards_active')
      : el.classList.remove('bicycles__block-cards_active')
  })
  bicyclesLinks.forEach(el => {
    el.id === evt.target.id
      ? (el.classList.add('nav-block__link_bicycles_active'), el.parentElement.classList.add('position'))
      : (el.classList.remove('nav-block__link_bicycles_active'), el.parentElement.classList.remove('position'))
  })
}
// cardsBicycles.forEach(([type, ...[data]]) =>
// (console.log(type),
//   console.log(data)

// ))

// function onLoad() {
//   createCard()
//   setSlidersHandlers();
// }

// window.addEventListener("load", onLoad);

