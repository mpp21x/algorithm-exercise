<?php


function hanoiStart(int $plateTotal, string $from, string $temp, string $to)
{

}

echo "first round ------\n";
/**
 * A -> C
 */
hanoiStart(1, "A", "B", "C");


echo "second round ------\n";
/**
 * A -> B
 * A -> C
 * B -> C
 */
hanoiStart(2, "A", "B", "C");

echo "third round ------\n";
/**
 * A -> C
 * A -> B
 * C -> B
 * A -> C
 * B -> A
 * B -> C
 * A -> C
 */
hanoiStart(3, "A", "B", "C");
