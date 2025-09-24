#include "isEven.h"

#include <stdio.h>

int isEven(int num)
{
	if (num % 2 == 0){ // Even integers will have no remainder when divided by 2.
		 printf("%d is even.\n", num);
	}
	return 0;
}
