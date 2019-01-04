const expect = require('chai').expect;
const { twoSum } = require('./solution-1');

describe('Testing two sum - solution-1', () => {
    let testCases = [
        { input: [2, 7, 11, 5], target: 9, result: [0, 1] },
        { input: [3, 8, 12, 6], target: 18, result: [2, 3] },
        { input: [2, 7, 11, 5], target: 8, result: null }
    ];

    for (let testCase of testCases) {
        it(`For the array ${testCase.input} and target ${testCase.target} result should be ${testCase.result}`, () => {
            expect(twoSum(testCase.input, testCase.target)).to.be.deep.equal(testCase.result);
        })
    }
})