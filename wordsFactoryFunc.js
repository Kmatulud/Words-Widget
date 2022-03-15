const WordsCountFactory = () => {
    let userInput;

    const setWords = (inputValue) => {
        userInput = inputValue.filter((val) => val.length > 4 );
    }
    const getWords = () => {
        return userInput;
    }

    return{
        setWords,
        getWords
    }
}