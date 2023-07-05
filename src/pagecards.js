import { renderChoosePage } from './index.js'
import { timerSet } from './modulFunc.js'

export function renderCards() {
    const appEl = document.getElementById('app')
    const PageHtml = `
    <div class="center__second">
          <div  class = "second__main">
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
    const goBegin = document.getElementById('startGame')
    const timer = document.getElementById('timer')
    timerSet(timer)

    goBegin.addEventListener('click', () => {
        renderChoosePage()
    })

    const suits = [
        '<img src="./src/img/clubs.svg">',
        '<img src="./src/img/diamonds.svg">',
        '<img src="./src/img/hearts.svg">',
        '<img src="./src/img/spades.svg">',
    ]
    const ranks = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']

    let deck = []

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            const card = {
                suit: suits[i],
                rank: ranks[j],
            }
            deck.push(card)
        }
    }
    const backCards = Array.from({ length: 36 }, () => ({
        suit: '<img src="./src/img/back.jpg" style="border-radius: 4px;">',
        value: 'backShirt',
    }))

    const allCards = [...deck, ...backCards]
    let cardsHtml = `<div class="row">`
    for (let i = 0; i < 36; i++) {
        cardsHtml += `<div class="card ${allCards[i].rank}">`
        if (allCards[i].value !== 'backShirt') {
            cardsHtml += `<div class="symbol-top-left"><div>${allCards[i].rank}</div><div class="block-symbol">${allCards[i].suit}</div></div>`
            cardsHtml += `<div class="center__suit">${allCards[i].suit}</div>`
            cardsHtml += `<div class="symbol-bottom-right"><div>${allCards[i].rank}</div><div class="block-symbol">${allCards[i].suit}</div></div>`
        } else {
            cardsHtml += `${allCards[i].suit}`
        }
        cardsHtml += `</div> `
    }
    cardsHtml += `</div>`
    document.querySelector('.card-deck').innerHTML = cardsHtml

    let backHtml = '<div class="row">'
    for (let i = 0; i < 36; i++) {
        backHtml += `<div class="card-back">${
            backCards[i % backCards.length].suit
        }</div>`
    }
    backHtml += `</div>`
    document.querySelector('.card-back').innerHTML = backHtml

    // Вывод колоды карт на экран с помощью метода forEach()
    // allCards.forEach((card) => console.log(card))
}
