const setOfWords = [
    "GitHub, Inc. is an American multinational corporation that provides hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features.",
    "JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    "India officially the Republic of India is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia."
]

console.log('attached')
const text_1 = document.getElementById("text-1") 
const text_2 = document.getElementById("text-2")
const timerReminder = document.getElementById("timerReminder")
const btn = document.getElementById("btn")
const result = document.getElementById("result")

// generate random number
const randomGenerator = () => {
    const rnd = Math.floor(Math.random()*setOfWords.length);
    return rnd    // TODO: short
}

const starter = () =>{
    text_1.readOnly = false
    timerReminder.innerText = "1:00"
    text_1.innerText = setOfWords[randomGenerator()]
    text_1.readOnly = true
    // result.innerText = "Start Test?"
    text_2.readOnly = true
}

window.addEventListener('load',()=>{
    starter()
})

const compareWords = (s1,s2)=>{
    let cnt = 0
    s1.forEach((item,index)=>{
        if(item == s2[index]){
            cnt++ ;
        }
    })
    return `${s2.length-cnt} words are wrong out off ${s2.length}.`
}

const calculateResult = (str1,str2) =>{
    console.log('cal',str2)
    const typedWordsCount = str2.trim().split(' ').length
    console.log(typedWordsCount)
    console.log(`Your Typing Speed is ${typedWordsCount} words per minute 
    ${compareWords(str1.trim().split(' '),str2.trim().split(' '))}`)
    return `Your Typing Speed is ${typedWordsCount} words per minute 
    ${compareWords(str1.trim().split(' '),str2.trim().split(' '))}`
}



btn.addEventListener('click',()=>{
    text_2.readOnly = false
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
        result.innerText = calculateResult(text_1.value,text_2.value) 
        starter()
        btn.disabled = false
    },60000)
})


