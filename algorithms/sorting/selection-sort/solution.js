/**
 * Sorting array with selection sort.
 * @param {number[]} arr - input array of numbers.
 */
function selectionSort(arr) {
    let len = arr.length;

    for (let i = 0; i < len; i++) {
        let minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex == i) continue;

        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

module.exports.selectionSort = selectionSort;