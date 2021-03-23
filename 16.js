var a, b, c, maior, menor, medio;

a = 5
b = 10
c = 13

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
} else {
    maior = b
    medio = a
    menor = c
}

console.log(menor, medio, maior)
