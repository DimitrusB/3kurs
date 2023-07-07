import { level, renderChoosePage } from './index.js'
import { timerSet } from './modulFunc.js'

export function renderCards(pairCount) {
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
           
        </div>
        
    `
    appEl.innerHTML = PageHtml
    const clubs ='<img src="./src/img/clubs.svg">'
    const diamonds = '<img src="./src/img/diamonds.svg">'
    const hearts = '<img src="./src/img/hearts.svg">'
    const spades = '<img src="./src/img/spades.svg">'
    const suits = [clubs, diamonds, hearts, spades]
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
    let stoppedTime = 0
    console.log(allCards)
    let cardsHtml = '<div class="row">'
    for (let i = 0; i < allCards.length; i++) {
        cardsHtml += `
            <div class="card ${allCards[i].rank}" data-rank="${allCards[i].rank}">
                <div class="symbol-top-left"><div>${allCards[i].rank}</div><div class="block-symbol">${allCards[i].suit}</div></div>
                <div class="center__suit">${allCards[i].suit}</div>
                <div class="symbol-bottom-right"><div>${allCards[i].rank}</div><div class="block-symbol">${allCards[i].suit}</div></div>
            </div>`
    }
    cardsHtml += '</div>'
    cardsHtml += `<div class="popup" id="popup-win">
    <div class="popup-content">
        <img src="./src/img/celebration.svg" alt="Win">
        <h3 class="popup-header">Вы выиграли!</h3>
        <p class="popup-text">Затраченное время:</p>
        <p class="popup-text">${stoppedTime}</p>
        <button class="popup__btn">Играть снова</button>
    </div>
    </div>

    <div class="popup" id="popup-lose">
    <div class="popup-content">
        <img src="./src/img/dead.svg" alt="Lose">
        <h3 class="popup-header">Вы проиграли!</h3>
        <p class="popup-text">Затраченное время:</p>
        <p class="popup-text">${stoppedTime}</p>
        <button class="popup__btn">Играть снова</button>
    </div>
    </div>
    <button class="game_butt_down" id="chooseLevel">Выбрать уровень</button>`
    document.querySelector('.card-deck').innerHTML = cardsHtml

    const goBegin = document.getElementById('startGame')
    goBegin.addEventListener('click', () => {
        renderCards(level)
    })
    const chooseLevel = document.getElementById('chooseLevel')
    chooseLevel.addEventListener('click', () => {
        renderChoosePage()
    })

    const myTimer = timerSet(document.getElementById('timer'))
    timerSet(timer)
    
    let firstCard = null
    let pairsFound = 0
    
    // Функция, которая будет запускаться при клике на карту
    function clickCardHandler(event) {
        
        const stoppedTime = myTimer.stopTimer()
        const card = event.target.closest('.card')

        if (card.classList.contains('card-paired')) {
            return;
        }

        if (!firstCard) {
            firstCard = card
            firstCard.classList.add('card-selected')
        } else {
            let secondCard = card
            if (firstCard && secondCard) {
                if (firstCard.dataset.rank === secondCard.dataset.rank) {
                    firstCard.classList.add('card-paired')
                    secondCard.classList.add('card-paired')
                    pairsFound++
                    if (pairsFound === cards.length / 2) {
                        const popupWin = document.querySelector('#popup-win')
                        popupWin.style.display = 'block'
                        myTimer.stopTimer()
                    }
                } else {
                    const popupLose = document.querySelector('#popup-lose')
                    popupLose.style.display = 'block'
                    firstCard.classList.remove('card-selected')
                    secondCard.classList.remove('card-selected')
                    myTimer.stopTimer()
                }
                firstCard = null
                secondCard = null
            } else {
                firstCard = card
                firstCard.classList.add('card-selected')
                stoppedTime = myTimer.stopTimer()
            }
        }
    }

    const cards = document.querySelectorAll('.card')

    for (const card of cards) {
        card.addEventListener('click', clickCardHandler)
    }
    const popupCloseBtns = document.querySelectorAll('.popup__btn');
    popupCloseBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const popup = this.closest('.popup');
        popup.style.display = 'none';
        renderChoosePage()
      });
    });
}
