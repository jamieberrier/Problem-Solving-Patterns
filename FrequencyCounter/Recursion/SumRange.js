function sumRange(num){
  if(num === 1) return 1; // base case
  return num + sumRange(num-1);
}

sumRange(4)

/*

1. sumRange(3)
    2. return 3 + sumRange(2)
                  3. return 2 + sumRange(1)
                                  4. return 1
----------------------------------------------
4. sumRange(3)
    3. return 3 + sumRange(2)
                  2. return 2 + sumRange(1)
                                  1. return 1
----------------------------------------------
4. 6
    3. 3 + 3 = 6
        2. 2 + 1 = 3
            1. 1

*/
