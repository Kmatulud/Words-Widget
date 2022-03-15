const inputElem = document.querySelector("#userInput");
const submitElem = document.querySelector("#submit");
const wordsCountFunc = WordsCountFactory()

const wordsCount = () => {
    
    const userValue = inputElem.value;
    wordsCountFunc.setWords(userValue);
    wordsCountFunc.getWords();

}

submitElem.addEventListener("click", wordsCount);