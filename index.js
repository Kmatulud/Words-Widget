const inputElem = document.querySelector("#userInput");
const submitElem = document.querySelector("#submit");
const msg = document.querySelector("#message");
const count = document.querySelector("#span")
const checked = document.querySelector("#hide:checked");

const wordsCountFunc = WordsCountFactory()



const wordsCount = () => {

    let userValue = inputElem.value;
    msg.innerHTML = wordsCountFunc.setWords(userValue);
    userValue = "";
    count.innerHTML = `Word Count: ${wordsCountFunc.getInputLength()}`
}

const hideAndHighlight = () => {
    const userValue = inputElem.value;
    wordsCountFunc.setWords(userValue);
    const value = wordsCountFunc.getWords();

    let str = "";
    value.forEach(element => {
        if(checked){
            str += "<mark> " + element + "</mark> ";
        }
        else{
            str += element + " ";
        }     
    })
    msg.innerHTML = str + " "; 
    count.innerHTML = `Word Count: ${wordsCountFunc.getInputLength()}`

}



submitElem.addEventListener("click", wordsCount);
