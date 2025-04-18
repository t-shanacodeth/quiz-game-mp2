/**
 * @jest-environment jsdom
 * jest-environment-options {"url": "https://jest.js.io/"}
 */

const { TestEnvironment } = require("jest-environment-jsdom");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

// startGame function

const startGame = require(quiz)

describe("Quiz Game", () => {
    describe("Start Game function", () => {
        test("")
    })
    describe("... function", () => {
        
    })
    describe("... function", () => {
        
    })
    describe("... function", () => {
        
    })
})

// shuffleQuestions function

const shuffleQuestions = require(quiz)
