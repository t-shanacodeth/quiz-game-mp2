/**
 * @jest-environment jsdom
 * jest-environment-options {"url": "https://jest.js.io/"}
 */

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})