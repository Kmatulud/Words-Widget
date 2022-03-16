const WordsCountFactory = () => {
    let userInput = [];

    const setWords = (inputValue=[]) => {
        userInput = inputValue.trim().split(" ");
    }

    const getWords = () => {
        return userInput;
    }

    const getInputLength = () => {
        return getWords().length;
    }

    return{
        setWords,
        getWords,
        getInputLength
    }
}