const inputElem = document.querySelector("#userInput");
const submitElem = document.querySelector("#submit");
const msg = document.querySelector("#message");
const count = document.querySelector("#span")
const check = document.querySelector("#hide");

const wordsCount = () => {
    
    if (inputElem.value.length === 0){
        msg.innerHTML = "";
        count.innerHTML = 0;
        return
    }
    const wordsCountFunc = WordsCountFactory(inputElem.value);
    const words = wordsCountFunc.getWords();

    const wordList = words.map(word => {
        return `<span class="word ${word.type}">${word.word}
        
        </span>`
    })
    msg.innerHTML = wordList.join("");
    if(msg.innerHTML.length === 0){
        count.innerHTML = 0;
    }else{
        count.innerHTML = `Word Count: ${words.length}`;
    }
}


// const hideWord = () => {
//     if(check.checked){
//         msg.innerHTML = wordsCountFunc.hideShortWord(inputElem.value);
//     }else{
//         msg.innerHTML = wordsCountFunc.setWords(inputElem.value);
//     }
// }



submitElem.addEventListener("click", wordsCount);
// check.addEventListener("change", hideWord);