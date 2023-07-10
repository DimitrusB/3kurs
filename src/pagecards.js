import { level, renderChoosePage } from './index.js'
import { changeCardStyle, showAllCards, timerSet } from './modulFunc.js'
import { Timer, Time, TimerOptions } from 'timer-node'

export function renderCards(pairCount) {
    const myTimer = new Timer()
    const appEl = document.getElementById('app')
    const PageHtml = `
        <div class="center__second">
            <div class="second__main">
                <div>
                    <span class="timerMin">min</span>
                    <span class="timerSec">sec</span>
                    <div id="timer" class="timer">00:00</div>
                </div>
                <button class="game_butt" id="startGame">Начать заново</button>
            </div> 
            <div class="second">
                <div class="card-back"></div>
                <div class="card-deck"></div>  
            </div>
           
        </div>`
    const width = pairCount === 3 ? '400px' : pairCount === 6 ? '650px' : 'auto'

    appEl.innerHTML = PageHtml
    const timer = document.getElementById('timer')
    timerSet(timer)
    const suits = ['clubs', 'diamonds', 'hearts', 'spades']
    const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    const deck = []
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            deck.push({
                suit: suits[i],
                rank: ranks[j],
            })
        }
    }

    const allCards = []
    for (let i = 0; i < pairCount; i++) {
        const randomCard = deck[Math.floor(Math.random() * deck.length)]
        allCards.push(randomCard)
        allCards.push(randomCard)
    }

    allCards.sort(() => Math.random() - 0.5)

    let cardsHtml = `<div class="row" style="width: ${width}" >`
    for (let i = 0; i < allCards.length; i++) {
        cardsHtml += `
            <div class="card ${allCards[i].rank}" data-suit ="${allCards[i].suit}"data-rank="${allCards[i].rank}">
                <div class="symbol-top-left"><div>${allCards[i].rank}</div><div class="block-symbol"><img src="./src/img/${allCards[i].suit}.svg"></div></div>
                <div class="center__suit"><img src="./src/img/${allCards[i].suit}.svg"></div>
                <div class="symbol-bottom-right"><div>${allCards[i].rank}</div><div class="block-symbol"><img src="./src/img/${allCards[i].suit}.svg"></div></div>
            </div>`
    }
    cardsHtml += '</div>'
    cardsHtml += `<div class="popup" id="popup-win">
    <div class="popup-content">
        <img src="./src/img/celebration.svg" alt="Win" style="
        padding-top: 26px">
        <h3 class="popup-header">Вы выиграли!</h3>
        <p class="popup-text">Затраченное время:</p>
        <p class="popup-time" id="timeWin"></p>
        <button class="popup__btn">Играть снова</button>
    </div>
    </div>

    <div class="popup" id="popup-lose">
    <div class="popup-content">
        <img src="./src/img/dead.svg" alt="Lose" style="
        padding-top: 26px">
        <h3 class="popup-header">Вы проиграли!</h3>
        <p class="popup-text">Затраченное время:</p>
        <p class="popup-time" id="timeLose"></p>
        <button class="popup__btn">Играть снова</button>
    </div>
    </div>`

    setTimeout(changeCardStyle, 5000)
    document.querySelector('.card-deck').innerHTML = cardsHtml

    const goBegin = document.getElementById('startGame')
    goBegin.addEventListener('click', () => {
        renderChoosePage()
    })

    let firstCard = null
    let pairsFound = null

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
                        document.querySelector('#popup-win').style.display = 'block'
                        document.getElementById('timeWin').innerHTML = timeValue
                    }
                } else {
                    myTimer.stop()
                    document.querySelector('#popup-lose').style.display = 'block'
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

    const cards = document.querySelectorAll('.card')

    for (const card of cards) {
        card.addEventListener('click', clickCardHandler)
    }

    const popupCloseBtns = document.querySelectorAll('.popup__btn')
    popupCloseBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const popup = this.closest('.popup')
            popup.style.display = 'none'
            renderCards(level)
        })
    })
}
