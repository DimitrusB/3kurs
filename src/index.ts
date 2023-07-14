import { renderCards } from './pagecards'

export let level = null
export const renderChoosePage = () => {
    const appEl = document.getElementById('app') as HTMLInputElement

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

    const easyLevel  = document.getElementById('option1') as HTMLInputElement
    const middleLevel = document.getElementById('option2') as HTMLInputElement
    const hardLevel  = document.getElementById('option3') as HTMLInputElement
    const chooseButton = document.getElementById('chooseButton') as HTMLInputElement
    
    
    chooseButton.addEventListener('click', (event) => {
        event.preventDefault()

       

        if (easyLevel.checked) {
            renderCards(3)
            level === 3
        } else if (middleLevel.checked) {
            renderCards(6)
            level === 6
        } else if (hardLevel.checked) {
            renderCards(9)
            level === 9
        } else{
            alert('Выберите уровень сложности!!!')
            return
        }
    })
}
renderChoosePage()
