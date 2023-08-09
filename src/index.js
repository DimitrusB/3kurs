import { timerSet } from './modulFunc.js'

const renderChoosePage = () => {
    const appEl = document.getElementById('app')

    const choosePageHtml = `
    <div class="center">
    <div class="main__window">
        <div class="main__window_senc">
            <p>Выбери сложность</p>
        </div>
        <form class="main__window_form">
            <div  class="main__window_choose">
            <input type="radio" id="option1" name="options" value="Option 1" > 
            <label for="option1">1</label>
            </div>
            <div  class="main__window_choose">
            <input type="radio" id="option2" name="options" value="Option 2" >
            <label for="option2">2</label>
            </div>
            <div  class="main__window_choose">
            <input type="radio" id="option3" name="options" value="Option 3">
            <label for="option3">3</label>
            </div>
        </form>
            <button class="main__window_butt" id="chooseButton">Старт</button>
    </div>
    `
    appEl.innerHTML = choosePageHtml

    const easyLevel = document.getElementById('option1')
    const middleLevel = document.getElementById('option2')
    const hardLevel = document.getElementById('option3')
    const chooseButton = document.getElementById('chooseButton')
var cards = [
    {
    name: "tuzpik",
    img: "./src/img/туз пики.jpg"
    },
    {
        name: "tuzcherv",
        img: "./src/img/туз черви.jpg"  
    },
    {
        name: "tezkrest",
        img: "./src/img/туз крести.jpg"  
    },
    {
        name: "tezkbub",
        img: "./src/img/туз бубны.jpg"  
    }
]

    function renderLevel(level) {
        const renderLevelPage = `
          <div>
            <div>
              <span class="timerMin">min</span>
              <span class="timerSec">sec</span>
              <button class="game_butt" id="startGame">Начать заново</button>
            </div>
            <div id="timer" class="timer">00:00</div>
          </div>
          <div class="center">
            <form class="main__window_choose">
              <input type="radio" id="option${level}" name="options" value="Option ${level}">
              <label for="option${level}">${level}</label>
            </form>
          </div>
        `

        appEl.innerHTML = renderLevelPage
        const timer = document.getElementById('timer')
        const goBegin = document.getElementById('startGame')
        timerSet(timer)

        goBegin.addEventListener('click', () => {
            renderChoosePage()
        })
    }

    chooseButton.addEventListener('click', (event) => {
        event.preventDefault()

        let level = ''

        if (easyLevel.checked) {
            level = '1'
        } else if (middleLevel.checked) {
            level = '2'
        } else if (hardLevel.checked) {
            level = '3'
        } else if (!level) {
            alert('Выберите уровень сложности!!!')
            return
        }

        renderLevel(level)
    })
}
renderChoosePage()
