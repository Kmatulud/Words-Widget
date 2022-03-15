const inputElem = document.querySelector("#userInput");
const submitElem = document.querySelector("#submit");
const msg = document.querySelector("#message");

const wordsCountFunc = WordsCountFactory()

const wordsCount = () => {

    const userValue = inputElem.value;
    wordsCountFunc.setWords(userValue);
    const value = wordsCountFunc.getWords();

    let str = "";
    for (let i = 0; i < value.length; i++) {
        const element = value[i];
        if(element.length > 4){
            str += "<mark style='color: red'>" + element + " </mark> ";
        }else{
            str += element + " ";
        }
    }
    msg.innerHTML = str;
}


submitElem.addEventListener("click", wordsCount);