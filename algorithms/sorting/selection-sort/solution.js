/**
 * Sorting array with selection sort.
 * @param {number[]} arr - input array of numbers.
 */
function selectionSort(arr) {
    // traversing array and move boundary of unsorted array
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        // find the minimum of unsorted array
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex == i) continue;

        // swap the value in found minimum index with the current index value
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

module.exports.selectionSort = selectionSort;