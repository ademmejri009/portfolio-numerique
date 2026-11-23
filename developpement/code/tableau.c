#include <stdio.h>

int main(void) {
    int t[5] = {12, 7, 19, 3, 15};
    int somme = 0, max = t[0];
    for (int i = 0; i < 5; i++) {
        somme += t[i];
        if (t[i] > max) max = t[i];
    }
    printf("Somme = %d\n", somme);
    printf("Moyenne = %.2f\n", somme / 5.0);
    printf("Maximum = %d\n", max);
    return 0;
}
