var a, b, c, maior, menor, medio;

a = 5
b = 3
c = 4

if (a > b && b > c) {
    maior = a
    medio = b
    menor = c
} else if (c > b && b > a) {
    maior = c
    medio = b
    menor = a
} else if (b > c && c > a) {
    maior = b
    medio = c
    menor = a
} else if (c > a && a > b) {
    maior = c
    medio = a
    menor = b
} else if (b > a && a >c) {
    maior = b
    medio = a
    menor = c
} else {
    maior = a
    medio = c
    menor = b
}

console.log(menor, medio, maior)
