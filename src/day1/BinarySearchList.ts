export default function bs_list(haystack: number[], needle: number): boolean {
    let low_index = 0, high_index = haystack.length;
    let middle_index, middle_value;

    while (low_index < high_index) {
        middle_index = Math.floor(low_index + (high_index - low_index) / 2);
        middle_value = haystack[middle_index];

        if (needle === middle_value) {
            return true;
        } else if (needle > middle_value) {
            low_index = middle_index + 1;
        } else {
            high_index = middle_index;
        }
    }

    return false;
}