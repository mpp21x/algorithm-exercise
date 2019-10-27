function hanoiStart(plateTotal, from, temp, to) {
  if (plateTotal == 1) {
    return console.log(from + ' -> ' + to);
  }

  hanoiStart(plateTotal - 1, from, to, temp);
  console.log(from + ' -> ' + to);
  hanoiStart(plateTotal - 1, temp, from, to);
}

console.log('first round ------');
/**
 * A -> C
 */
hanoiStart(1, 'A', 'B' ,'C');


console.log('second round ------');
/**
 * A -> B
 * A -> C
 * B -> C
 */
hanoiStart(2, 'A', 'B' ,'C');


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


