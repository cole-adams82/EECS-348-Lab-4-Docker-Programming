#include "isEven.h"
#include "isOdd.h"

#include <stdio.h>

int main() {
    int num;
    printf("Enter an integer: "); // Receive integer from user.
    scanf("%d", &num);
    isEven(num); // Check if the integer is even.
    isOdd(num); // Check if the integer is odd.
    return 0;
}
