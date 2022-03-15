const inputElem = document.querySelector("#userInput");
const submitElem = document.querySelector("#submit");
const msg = document.querySelector("#message");

const wordsCountFunc = WordsCountFactory()

const wordsCount = () => {

    const userValue = inputElem.value;
    wordsCountFunc.setWords(userValue);
    msg.innerHTML = wordsCountFunc.getWords();
}

submitElem.addEventListener("click", wordsCount);