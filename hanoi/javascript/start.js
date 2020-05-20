function hanoiStart(total, from, temp, to) {

    const move = (from, to) => console.log(`${from} -> ${to}`);
    if (total == 1) {
        return move(from, to);
    }
    hanoiStart(total - 1, from, to, temp);
    move(from, to);
    hanoiStart(total - 1, temp, from, to)
}

console.log('first round ------');
/**
 * A -> C
 */
hanoiStart(1, 'A', 'B', 'C');


console.log('second round ------');
/**
 * A -> B
 * A -> C
 * B -> C
 */
hanoiStart(2, 'A', 'B', 'C');


console.log('third round ------');
/**
 * A -> C
 * A -> B
 * C -> B
 * A -> C
 * B -> A
 * B -> C
 * A -> C
 */
hanoiStart(3, 'A', 'B', 'C');
console.log('fourth round ------');
hanoiStart(4, 'A', 'B', 'C');


