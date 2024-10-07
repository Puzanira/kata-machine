export default function bubble_sort(arr: number[]): void {
    for (let j = arr.length; j > 1; j--) {
        for (let i = 0; i < j - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i+1], arr[i]] = [arr[i], arr[i+1]];
            }
        }
    }
}

function bubble_sort_2(arr: number[]): void {
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
}