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

    let cardsHtml = '<div class="row">'
    for (let i = 0; i < allCards.length; i++) {
        cardsHtml += `
            <div class="card ${allCards[i].rank}">
                <div class="symbol-top-left"><div>${allCards[i].rank}</div><div class="block-symbol">${allCards[i].suit}</div></div>
                <div class="center__suit">${allCards[i].suit}</div>
                <div class="symbol-bottom-right"><div>${allCards[i].rank}</div><div class="block-symbol">${allCards[i].suit}</div></div>
            </div>
        `
    }
    cardsHtml += '</div>'

    document.querySelector('.card-deck').innerHTML = cardsHtml

    let backHtml = '<div class="row">'
    for (let i = 0; i < allCards.length; i++) {
        backHtml += `<div class="card-back"><img src="./src/img/back.jpg" style="border-radius: 4px;"></div>`
    }
    backHtml += '</div>'

    document.querySelector('.card-back').innerHTML = backHtml

    const goBegin = document.getElementById('startGame')
    goBegin.addEventListener('click', () => {
        renderChoosePage()
    })

    const timer = document.getElementById('timer')
    timerSet(timer)
}