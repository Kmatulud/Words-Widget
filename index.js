const inputElem = document.querySelector("#userInput");
const submitElem = document.querySelector("#submit");
const msg = document.querySelector("#message");
const count = document.querySelector("#span")

const wordsCountFunc = WordsCountFactory()

const wordsCount = () => {

    const userValue = inputElem.value;
    wordsCountFunc.setWords(userValue);
    const value = wordsCountFunc.getWords();

    let str = "";
    value.forEach(element => {
         if(element.length > 4){
            str += "<mark> " + element + "</mark> ";
        }else{
            str += element + " ";
        }
    })
    msg.innerHTML = str + " ";
    count.innerHTML = `Count: ${wordsCountFunc.getInputLength()}`
}


submitElem.addEventListener("click", wordsCount);