var a, b, c;

a = 7
b = 9
c = 14

if (a + b > c && a + c > b && b + c > a) {
    if (a == b && a == c) {
        console.log("As medidas formam um triângulo Equilátero.")
    } else if (a == b || a == c || b == c){
        console.log("As medidas formam um triângulo Isóceles.")
    } else {
        console.log("As medidas formam um triângulo Escaleno.")
    }
} else {
    console.log("As medidas não formam um triângulo")
}
