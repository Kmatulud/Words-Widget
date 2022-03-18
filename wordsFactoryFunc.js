const WordsCountFactory = () => {
    let longWord = "";
    let str = "";

    const setWords = inputValue => {
        let userInput = inputValue.trim().split(" ");
        userInput.forEach(input => {
            if(input.length > 4){
                str += `<mark> ${input} </mark>`;
            }
             else{
                str += input + " ";
            }
        })
        return str;   
    }

    const getInputLength = () => {
        return setWords(inputValue).length;
    }

    return{
        setWords,
        getInputLength
    }
}