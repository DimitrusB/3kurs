import { level, renderChoosePage } from './index'
import { changeCardStyle, showAllCards, timerSet } from './modulFunc'
import  { Timer, Time, TimerOptions } from 'timer-node'

export function renderCards(pairCount:number) {

    const myTimer = new Timer()
    const appEl = document.getElementById('app') as HTMLElement
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
    const suits: Array<string> = ['clubs', 'diamonds', 'hearts', 'spades']
    const ranks: Array<string> = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    

    const deck: { suit: string; rank: string }[] = []

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < ranks.length; j++) {
            deck.push ({
                suit:  suits[i],
                rank:  ranks[j],
            })

        }
    }

    const allCards:{ suit: string; rank: string }[] = []
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

    
    function  setTimeout(changeCardStyle: ()=> void, 5000)

    (document.querySelector('.card-deck') as HTMLDivElement).innerHTML = cardsHtml

    const goBegin = document.getElementById('startGame') as HTMLInputElement
    goBegin.addEventListener('click', () => {
        renderChoosePage()
    })

    let firstCard:any = null
    let pairsFound:any = null

    function clickCardHandler(event: any) {
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
                        // @ts-ignore
                        myTimer.stop()
                        (document.querySelector('#popup-win') as HTMLDivElement).style.display =
                            'block' as String
                        (document.getElementById('timeWin') as HTMLDivElement).innerHTML = timeValue
                    }
                } else {
                    // @ts-ignore
                    myTimer.stop()
                    (document.querySelector('#popup-lose') as HTMLDivElement).style.display =
                        'block'
                        // @ts-ignore
                    showAllCards()
                    (document.getElementById('timeLose') as HTMLDivElement).innerHTML = timeValue
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
// @ts-ignore
    for (const card of cards) {
        card.addEventListener('click', clickCardHandler)
    }

    const popupCloseBtns = document.querySelectorAll('.popup__btn')
    popupCloseBtns.forEach(function (btn) {
        btn.addEventListener('click', function (this:any) {
            const popup = this.closest('.popup')
            popup.style.display = 'none'
            // @ts-ignore
            renderCards(level)
        })
    })
}
