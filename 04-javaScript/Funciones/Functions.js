/**
 * Created by katherinevivanco on 22/5/17.
 */
/*function imprimirHolaMundo() {
    console.log("HOLA MUNDITO")
}
//function imprimirHolaMundo1();
function imprimir(texto) {
    console.log(texto)
}
imprimir("Katherine");
function sumaDosNumeros(a,b) {
    return a+b;
}
sumaDosNumeros(1,2);*/
function operarDosNumeros(n1,n2,funcion) {
    n1 = n1+1;
    n2 = n2+2;
    funcion(n1,n2);
}
operarDosNumeros(2,4,function (primerNumero,segundoNumero) {
    return primerNumero*segundoNumero;
})
/**
 foreach
 [1,2,3,4].forEach(function(valorIteracion, indice,arreglo))
 console.log(valorIteracion)
 */