/** let arrows = document.querySelectorAll('.arrow')

for (let arrow of arrows) {

    arrow.onclick = function() {
        let side = arrow.dataset.arrow
        let collection = document.querySelector('.places-cards')
        if (side === 'right') {

        } if (side === 'left') {

        }
    }
} */

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




