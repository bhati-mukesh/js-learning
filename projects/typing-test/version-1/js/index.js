const setOfWords = [
    "GitHub, Inc. is an American multinational corporation that provides hosting for software development and version control using Git. It offers the distributed version control and source code management (SCM) functionality of Git, plus its own features.",
    "JavaScript often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    "India officially the Republic of India is a country in South Asia. It is the second-most populous country, the seventh-largest country by land area, and the most populous democracy in the world. Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar Islands share a maritime border with Thailand and Indonesia."
]

const compareWords = (str1,str2)=>{
    let words1 = str1.split(" ")
    let words2 = str2.split(" ")
    let cnt = 0;
    words1.forEach((word,index)=>{
        if(word == words2[index]){
            cnt ++
        }
    })
    let errorWords = (words1.length - cnt)
    return ` ${cnt} correct out of ${words1.length} words and the Total number of errors are ${errorWords}.  `

}

const playGame = ()=>{
    console.log('Play Game')
    let rndNumber = Math.floor(Math.random()*setOfWords.length)
    msg.innerText = setOfWords[rndNumber]
    let date = new Date();
    startTime = date.getTime()
    btn.innerText = "Done"
}

const wordCounter = (strData) =>{
    return strData.split(' ').length
}

const endGame = ()=>{
    console.log('end')
    let date = new Date();
    endTime = date.getTime()
    let totalTime = ((endTime-startTime)/1000)

    let enteredData = userData.value
    let wordCount = wordCounter(enteredData)

    let speed = Math.floor((wordCount/totalTime)*60)

    let finalMessage = `Your speed is ${speed} words per minutes ${compareWords(msg.innerText,enteredData)} `
    
    msg.innerText = finalMessage


}


const msg = document.getElementById('msg');
const userData = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

btn.addEventListener('click',(event)=>{
    console.log('clicked')
    console.log(event.target.innerText)
    if (event.target.innerText == 'Start'){
        console.log('inside if')
        userData.disabled = false;
        playGame();
    }else if(event.target.innerText == 'Done') { 
        userData.disabled = false;
        btn.innerText = 'Start'
        endGame();
    }
})