let placeArrow = document.querySelector('.places-arrow')
let collection = document.querySelector('.places-cards') //переменная с таким классом уже есть, поменять
let placesCard = collection.querySelectorAll('.places-card__back')
let scroll = 0
let cardLen = placesCard.length
let cardWidth = $(placesCard).width()
let placesCardsWidth = $(collection).width()

placeArrow.onclick = function (e) {
    let target = e.target
        if (target.classList.contains('places-arrow__right') && scroll <= (cardWidth/2 * cardLen)) {
            scroll = scroll + (cardWidth / 1.5 + 15)
            $(collection).scrollLeft(scroll)
            console.log('right' + scroll)
            if (scroll > (cardWidth/2 * cardLen)) {
                scroll = cardWidth/2 * cardLen
            }
        } else if (target.classList.contains('places-arrow__left') && scroll >= 0) {
            scroll = scroll - (cardWidth / 1.5 + 15)
            $(collection).scrollLeft(scroll)
            console.log('left' + scroll)
            if (scroll < 0) {
                scroll = 0
            }
        }
}

let cards = document.querySelectorAll('.places-card')

for (let card of cards) {
    $(card).mouseenter(function () {
        let desc = card.querySelector('.places-description')
        $(desc).css('display', 'flex')
    }) // появление рейтинга при наведении

    $(card).mouseleave(function ()
    {
        let desc = card.querySelector('.places-description')
        $(desc).css('display', 'none')
    }) // скрытие рейтинга при выходе мыши с карточки

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




