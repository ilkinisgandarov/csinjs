const expect = require('chai').expect;
const { selectionSort } = require('./solution');

describe('Testing selection sort', () => {
    let arr = [9, 4, 2, 5, 3, 5, 12, 1];
    let result = [1, 2, 3, 4, 5, 5, 9, 12];

    it(`For the array ${arr.toString()} result should equal ${result.toString()}`, () => {
        selectionSort(arr);
        expect(arr).to.be.deep.equal(result);
    })
})