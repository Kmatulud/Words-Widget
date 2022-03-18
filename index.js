const inputElem = document.querySelector("#userInput");
const submitElem = document.querySelector("#submit");
const msg = document.querySelector("#message");
const count = document.querySelector("#span")
const check = document.querySelector("#hide");

const wordsCountFunc = WordsCountFactory()



const wordsCount = () => {

    msg.innerHTML = wordsCountFunc.setWords(inputElem.value);
    count.innerHTML = `Word Count: ${wordsCountFunc.getInputLength()}`
    userValue = "";
}

const hideWord = () => {
    if(check.checked){
        msg.innerHTML = wordsCountFunc.hideShortWord(inputElem.value);
    }else{
        msg.innerHTML = wordsCountFunc.setWords(inputElem.value);
    }
}



submitElem.addEventListener("click", wordsCount);
check.addEventListener("click", hideWord);