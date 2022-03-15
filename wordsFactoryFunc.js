const WordsCountFactory = () => {
    let userInput = [];

    const setWords = (inputValue) => {
        userInput = inputValue.split(" ");
    }
    const getWords = () => {
        return userInput;
    }

    return{
        setWords,
        getWords
    }
}