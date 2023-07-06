import { renderChoosePage } from './index.js'
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

    const suits = [
        '<img src="./src/img/clubs.svg">',
        '<img src="./src/img/diamonds.svg">',
        '<img src="./src/img/hearts.svg">',
        '<img src="./src/img/spades.svg">',
    ]
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

   console.log(allCards);
    let cardsHtml = '<div class="row">'
    for (let i = 0; i < allCards.length; i++) {
        cardsHtml += `
            <div class="card ${allCards[i].rank}" data-rank="${allCards[i].rank}">
                <div class="symbol-top-left"><div>${allCards[i].rank}</div><div class="block-symbol">${allCards[i].suit}</div></div>
                <div class="center__suit">${allCards[i].suit}</div>
                <div class="symbol-bottom-right"><div>${allCards[i].rank}</div><div class="block-symbol">${allCards[i].suit}</div></div>
            </div>
        `
    }
    cardsHtml += '</div>'

    document.querySelector('.card-deck').innerHTML = cardsHtml

    const goBegin = document.getElementById('startGame')
    goBegin.addEventListener('click', () => {
        renderChoosePage()
    })

    const timer = document.getElementById('timer')
    timerSet(timer)

    let firstCard = null;

// Функция, которая будет запускаться при клике на карту
function clickCardHandler(event) {
    const card = event.target.closest('.card')
    if (!firstCard) {
        // Если еще не выбрана первая карта, то просто сохраняем ее в firstCard
        firstCard = card
        firstCard.classList.add('card-selected')
    } else {
        let secondCard = card // сохраняем выбранную вторую карту
        if (firstCard && secondCard) {
            // Если игрок выбрал две карты
            if (firstCard.dataset.rank === secondCard.dataset.rank) {
                // Если карты совпали
                firstCard.classList.add('card-paired')
                secondCard.classList.add('card-paired')
            } else {
                // Если карты не совпали
                alert("Вы проиграли!")
                firstCard.classList.remove('card-selected')
                secondCard.classList.remove('card-selected')
            }
            // Сбрасываем выбор карт
            firstCard = null
        } else {
            // Если игрок выбрал только одну карту
            firstCard = card
            firstCard.classList.add('card-selected')
        }
    }
}

// Добавляем обработчик события для каждой карты
const cards = document.querySelectorAll('.card')

for (const card of cards) {
    card.addEventListener('click', clickCardHandler)
}
}