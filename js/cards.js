import { videoSlider } from "./video.js"

let cards = document.querySelectorAll('.places-card')

// Splide settings
let splide = new Splide( '#splide', {
    classes: {
        arrows: 'places-arrows',
        arrow : 'places-arrow',
        prev  : 'places-arrow__prev',
        next  : 'places-arrow__next',
    },
    autoWidth: true,
    perPage: 3,
    focus  : 'center',
    pagination: false,
    drag: true,
    updateOnMove: true,
} ).mount();

//управление видимостью рейтинга
$(window).scroll(function() {
    let desc = document.querySelectorAll('.places-description')
    for (let des of desc) {
        $(des).css('display', 'none')
    }
    for (let card of cards) {
        $(card).css('padding-top', '48px')
    }
})  // скрытие рейтинга у всех карт при скролле

let ratingMove = function () {
    for (let i=0; i < cards.length; i++) {
        let desc = cards[i].querySelector('.places-description')
        if (cards[i].classList.contains('is-active')) {
            $(desc).css('display', 'flex')
            $(cards[i]).css('padding-top', '0')
        } else {
            $(desc).css('display', 'none')
            $(cards[i]).css('padding-top', '50px')
        }
    }
}

splide.on( 'moved', function() {
    ratingMove()
    })

for (let card of cards) {

    let rating = card.querySelector('.places-rating')
    let stars = rating.querySelectorAll('.star')

    function removeClass(arr) {
        for (let i = 0, iLen = arr.length; i < iLen; i++ ) {
            for (let j = 1; j < arguments.length; j++){
                stars[i].classList.remove(arguments[j])
            }
        }
    }

    function addClass(arr) {
        for (let i = 0, iLen = arr.length; i < iLen; i++ ) {
            for (let j = 1; j < arguments.length; j++){
                stars[i].classList.add(arguments[j])
            }
        }
    }

    function mouseOverActiveClass (arr) {
        for (let i = 0, iLen = arr.length; i < iLen; i++) {
            if (arr[i].classList.contains('places-rating__check')) {
                break //если элемент массива уже имеет класс выделенной звезды, выходим из функции
            } else {
                arr[i].classList.add('places-rating__check') // добавляем картинку каждому элементу массива
            }
        }
    }

    function mouseOutActiveClass (arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i].classList.contains('current-active')) {
                break // проверяем был ли присвоен класс нажатия элементу массива, если да - выходим из функции
            } else {
                arr[i].classList.remove('places-rating__check') //если класс выделения не присвоен, возвращаем элемент в состояние пустой звезды
            }

        }
    }

    rating.onclick = function (e) {
        let target = e.target
        if (target.classList.contains('star')) {
            removeClass(stars, 'current-active') //обнуляем активные звёзды
            target.classList.add('places-rating__check', 'current-active') // заменяем картинку выделенной звезды, присваиваем класс активности
        }
    }

    rating.onmouseover = function (e) {
        let target = e.target
        if (target.classList.contains('star')) {
            removeClass(stars, 'places-rating__check') //при наведении на звезду удаляем у всех звёзд картинку выделенной звезды
            target.classList.add('places-rating__check') // добавляем звезде под курсором картинку выделенной звезды
            mouseOverActiveClass(stars) //запускаем функцию добавления картринки всем звёздам до выделенной
        }
    }

  rating.onmouseout = function () {
        addClass(stars, 'places-rating__check') //при выходе курсора из рейтинга добавляем массиву класс выделенной звезды
        mouseOutActiveClass(stars) //запускаем функцию
  }
}

videoSlider()