const expect = require('chai').expect;
const selectionSort = require('./solution');

describe('Testing selection sort', () => {
    it('Sorting result should equal [2,3,4,5,5,9,12,1]', () => {
        expect(selectionSort([9, 4, 2, 5, 3, 5, 12, 1])).to.be.deep.equal([1, 2, 3, 4, 5, 5, 9, 12]);
    })
})