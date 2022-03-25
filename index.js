const inputElem = document.querySelector("#userInput");
const submitElem = document.querySelector("#submit");
const msg = document.querySelector("#message");
const count = document.querySelector("#span")
const check = document.querySelector("#hide");

function wordsCount(words) {
    
    const wordList = words.map(word => {
        return `<span class="word ${word.type}">${word.word}
        <span class="small">(${word.length})</span>
        </span>`
    })
    msg.innerHTML = wordList.join("");
    count.innerHTML = words.length

}

submitElem.addEventListener("click", ()=>{
    if (inputElem.value.length === 0){
        msg.innerHTML = "";
        count.innerHTML = 0;
        return
    }
    const wordsCountFunc = WordsCountFactory(inputElem.value);
    const words = wordsCountFunc.getWords();
    wordsCount(words)

});

const hideWords = () => {
    const wordsCountFunc = WordsCountFactory(inputElem.value);
    const words = check.checked ? wordsCountFunc.getLongerwords() : wordsCountFunc.getWords() ; wordsCount(words);
}

check.addEventListener("click", hideWords);