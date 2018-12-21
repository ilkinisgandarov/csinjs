const expect = require('chai').expect;
const { firstMissingPositive } = require('./solution-2');

describe('Testing first missing positive - solution-2', () => {
    let testCases = [
        { input: [4, 1, 2, 3], result: 5 },
        { input: [6, 8, 9, 1, 2, 12], result: 3 },
        { input: [3, 4, -1, 1], result: 2 },
        { input: [1, 2, 0], result: 3 },
        { input: [2, 1], result: 3 }
    ];

    for (let testCase of testCases) {
        it(`For the array ${testCase.input} result should be ${testCase.result}`, () => {
            expect(firstMissingPositive(testCase.input)).to.be.equal(testCase.result);
        })
    }
})