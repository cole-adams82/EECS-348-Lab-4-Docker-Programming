#include "isOdd.h"

#include <stdio.h>

int isOdd(int num)
{
    if (num % 2 != 0){ // Odd integers will have some remainder when divided by 2.
        printf("%d is odd.\n", num);
    }
    return 0;
}
