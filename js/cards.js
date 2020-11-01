/** let arrows = document.querySelectorAll('.arrow')
* let cards = document.querySelectorAll('.places-card')

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
    })
     // появление рейтинга при наведении

    $(card).mouseleave(function () // скрытие рейтинга при выходе мыши с карточки
    {
        let desc = card.querySelector('.places-description')
        $(desc).css('display', 'none')
    })
}


