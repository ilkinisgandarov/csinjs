const expect = require('chai').expect;
const { circularArrayLoop } = require('./solution');

describe('Testing circular array loop', () => {
    let arr1 = [-2, 1, -1, -2, -2];
    let arr2 = [-2, 2, -2, -1, 5];
    let arr3 = [2, -1, 1, 2, 2];
    let arr4 = [-1, 2];

    it(`For the array ${arr1} result should be false`, () => {
        expect(circularArrayLoop(arr1)).to.be.false;
    })

    it(`For the array ${arr2} result should be false`, () => {
        expect(circularArrayLoop(arr2)).to.be.true;
    })

    it(`For the array ${arr3} result should be false`, () => {
        expect(circularArrayLoop(arr3)).to.be.true;
    })

    it(`For the array ${arr4} result should be false`, () => {
        expect(circularArrayLoop(arr4)).to.be.false;
    })
})