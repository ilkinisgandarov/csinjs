const expect = require('chai').expect;
const selectionSort = require('./solution');

describe('Testing selection sort', () => {
    it('Sorting result should equal [2,3,4,5,5,9,12]', () => {
        expect(selectionSort([9, 4, 2, 5, 3, 5, 12])).to.be.deep.equal([2, 3, 4, 5, 5, 9, 12]);
    })
})