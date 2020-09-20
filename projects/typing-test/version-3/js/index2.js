const text_1 = document.getElementById("text-1") 
const text_2 = document.getElementById("text-2")
const timerReminder = document.getElementById("timerReminder")
const btn = document.getElementById("btn")
const result = document.getElementById("result")
const wordCounter = document.getElementById("wordCounter")

var wordCount = 0

const RANDOM_QUOTE_API = 'http://api.quotable.io/random'

text_2.addEventListener('input',()=>{
    const arrayQuote = text_1.querySelectorAll('span')
    const arrayValue = text_2.value.split('')
    

    let correct = true
    
    arrayQuote.forEach((characterSpan,index)=>{
        const character = arrayValue[index]

        if(character == null){
            characterSpan.classList.remove('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
        else if(character == characterSpan.innerText){
            characterSpan.classList.remove('incorrect')
            characterSpan.classList.add('correct')
            if(arrayValue[arrayValue.length-1] === ' '){
                wordCounter.innerText = text_2.value.split(' ').length 
            }
        }
        else{
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
    })
    if(correct) {
        wordCount += text_2.value.split(' ').length
        wordCounter.innerText = wordCount
        renderNewQuote()
    }
})


function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API)
    .then(response => response.json() )
    .then ( data => data.content)
}

async function renderNewQuote(){
    const quote = await getRandomQuote()
    text_1.innerHTML = ''
    quote.split('').forEach(character =>{
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        console.log(characterSpan)
        text_1.appendChild(characterSpan)
    })
    text_2.value = null
} 

renderNewQuote()


btn.addEventListener('click',()=>{
    wordCount = 0
    text_2.readOnly = false
    text_2.autofocus  = true
    text_2.value = ""
    result.innerText = "" 
    let time = 59;
    const timer = setInterval(()=>{
        console.log("0:"+time)
        timerReminder.innerText = "0:"+time
        time -= 1;
        btn.disabled = true
    },1000)
    const clearSession = setTimeout(()=>{
        clearInterval(timer)
        text_2.readOnly = true
        result.innerText = "Result!!" 
        btn.disabled = false
        wordCounter.innerText = wordCount
    },60000)
})

text_2.readOnly = true