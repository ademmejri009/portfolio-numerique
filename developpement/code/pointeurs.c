#include <stdio.h>

void echanger(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

int factorielle(int n) {
    int r = 1;
    for (int i = 2; i <= n; i++) r *= i;
    return r;
}

int main(void) {
    int x = 4, y = 9;
    printf("Avant : x=%d y=%d\n", x, y);
    echanger(&x, &y);
    printf("Après : x=%d y=%d\n", x, y);
    printf("5! = %d\n", factorielle(5));
    return 0;
}
