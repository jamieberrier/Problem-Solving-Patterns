/*
Pseudocode:
- make a variable to store the smallest item (e.g. min) - intially, set the 1st element as the smallest value you've seen so far
- compare min to the next item in the array - until you find a smaller value
- if a smaller number is found, designate that smaller value to be the new min - continue until the end of the array
- if the min is not the value (index) you initially began with, swap the 2 values
- repeat this with the next item until the array is sorted - shrinking the window

*/