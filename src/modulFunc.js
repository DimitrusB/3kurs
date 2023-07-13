export function timerSet(timer) {
    let time = 0

    function updateTime() {
        time++
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        const formattedTime = pad(minutes) + ':' + pad(seconds)
        timer.textContent = formattedTime
    }

    function pad(value) {
        return value < 10 ? '0' + value : value
    }

    const timerInterval = setInterval(updateTime, 1000)

    function stopTimer() {
        clearInterval(timerInterval)
        return time
    }

    return {
        stopTimer: stopTimer,
    }
}

export function showAllCards() {
    const cardFrontElements = document.querySelectorAll('.card')
    cardFrontElements.forEach((cardFrontElement) => {
        cardFrontElement.classList.remove('selected')
        cardFrontElement
            .querySelectorAll(
                '.center__suit, .symbol-top-left, .symbol-bottom-right'
            )
            .forEach((element) => {
                element.style.display = 'block'
            })
    })
}
export function changeCardStyle() {
    const cardFrontElements = document.querySelectorAll('.card')

    cardFrontElements.forEach((cardFrontElement) => {
        cardFrontElement
            .querySelectorAll(
                '.center__suit, .symbol-top-left, .symbol-bottom-right'
            )
            .forEach((element) => {
                element.style.display = 'none'
            })

        cardFrontElement.classList.add('selected')

        cardFrontElement.addEventListener('click', () => {
            cardFrontElement
                .querySelectorAll(
                    '.center__suit, .symbol-top-left, .symbol-bottom-right'
                )
                .forEach((element) => {
                    element.style.display = ''
                })

            cardFrontElement.classList.remove('selected')
        })
    })
}
    function clickCardHandler(event) {
        const card = event.target.closest('.card')
        let timeValue = myTimer.format('%m.%s')

        if (
            !card.classList.contains('selected') ||
            card.classList.contains('card-selected') ||
            card.classList.contains('card-paired')
        ) {
            return
        }
        myTimer.start()

        if (!firstCard) {
            firstCard = card
            firstCard.classList.add('card-selected')
        } else {
            let secondCard = card
            if (firstCard && secondCard) {
                if (
                    firstCard.dataset.rank === secondCard.dataset.rank &&
                    firstCard.dataset.suit === secondCard.dataset.suit
                ) {
                    firstCard.classList.add('card-paired')
                    secondCard.classList.add('card-paired')
                    pairsFound++
                    if (pairsFound === cards.length / 2) {
                        myTimer.stop()
                        const popupWin = document.querySelector('#popup-win')
                        popupWin.style.display = 'block'
                        document.getElementById('timeWin').innerHTML = timeValue
                    }
                } else {
                    myTimer.stop()
                    const popupLose = document.querySelector('#popup-lose')
                    popupLose.style.display = 'block'
                    firstCard.classList.remove('card-selected')
                    secondCard.classList.remove('card-selected')
                    showAllCards()
                    document.getElementById('timeLose').innerHTML = timeValue
                }
                firstCard = null
                secondCard = null
            } else {
                firstCard = card
                firstCard.classList.add('card-selected')
            }
        }
    }