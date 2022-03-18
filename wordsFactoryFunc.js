const WordsCountFactory = () => {
    let longWord = "";
    let str = "";

    const setWords = inputValue => {
        let splitValue = inputValue.trim().split(" ");
        splitValue.forEach(val => {
            if(val.length > 4){
                str += `<mark> ${val} </mark>`;
            }
             else{
                str += val + " ";
            }
        })
        return str;   
    }

    const hideShortWord = (userInput) => { 
        let splitInput = userInput.trim().split(" ");
        splitInput.forEach(val => {
            if(val.length < 5){
                userInput = userInput.replace(val, '');
            }
            else{
                userInput = `<mark> ${userInput} </mark>`;
            }
        })
        return userInput;
    }

    const getInputLength = () => {
        return str.length;
    }

    return{
        setWords,
        hideShortWord,
        getInputLength
    }
}