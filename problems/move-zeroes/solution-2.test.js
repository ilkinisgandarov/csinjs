const expect = require('chai').expect;
const { moveZeroes } = require('./solution-2');

describe('Testing move zeroes - solution-2', () => {
    let testCases = [
        { input: [0, 1, 0, 3, 12, 0, 0], result: [1, 3, 12, 0, 0, 0, 0] },
        { input: [3, 2, 5, 0, 4, 0, 3], result: [3, 2, 5, 4, 3, 0, 0] }
    ];

    for (let testCase of testCases) {
        it(`For the array ${testCase.input} result should be ${testCase.result}`, () => {
            moveZeroes(testCase.input);
            expect(testCase.input).to.be.deep.equal(testCase.result);
        })
    }
})