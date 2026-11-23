#include <stdio.h>

int main(void) {
    int n;
    printf("Entre un entier : ");
    scanf("%d", &n);
    if (n % 2 == 0) printf("%d est pair\n", n);
    else printf("%d est impair\n", n);
    if (n > 0) printf("Il est positif\n");
    else if (n < 0) printf("Il est négatif\n");
    else printf("Il est nul\n");
    return 0;
}
