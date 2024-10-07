export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let high_index = 0;

    while ((high_index += jumpAmount) < breaks.length) {
        if (breaks[high_index]) {
            break;
        }
    }
    
    if (high_index > breaks.length) return -1;

    while (breaks[--high_index]) /* skip body */;
    return high_index += 1;
}