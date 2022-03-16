describe("Fruit List", () => {
    let wordsFactoryFunction = WordsCountFactory();

    it("Should return the user input as an array", () => {
        wordsFactoryFunction.setWords("Hi there my name is Kgotso Matuludi");
        assert.equal(["Hi","there", "my", "name", "is", "Kgotso", "Matuludi"], wordsFactoryFunction.getWords())
        wordsFactoryFunction.setWords("I love coding");
        assert.equal(["I", "love", "coding"], wordsFactoryFunction.getWords())
        wordsFactoryFunction.setWords("Could you please pass me the ruler")
        assert.equal(["Could", "you", "please", "pass", "me", "the", "ruler"], wordsFactoryFunction.getWords())
    })
})