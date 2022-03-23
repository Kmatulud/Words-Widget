const WordsCountFactory = (inputValue) => {

    const splitValue = inputValue.trim().split(" ");
 
    const getWords = () => {
        const wordList = splitValue.map(word=>{
            return {
                word,
                length : word.length,
                type : word.length > 4? "longer": ""
            }
        })
        let longestWord = {
            length: 0
        };
        wordList.forEach((word,index) => {
            if (word.length > longestWord.length){
                longestWord = {...word, index};
            }
        })

        wordList[longestWord.index].type = "longest";
        wordList.filter(word => {word.length ===longestWord.length})
                .forEach(word => word.type = "longest");
        return wordList; 
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
    


    return{
        getWords,
        hideShortWord,
    }
}