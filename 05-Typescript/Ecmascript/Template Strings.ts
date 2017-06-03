/**
 * Created by katherinevivanco on 29/5/17.
 */
//ecmascript
//var a = 1
let a = 1;
//que son los templates scripts
let html = "<h1>HOLA</h1>"+
 "<p>Hola amigos</p>"+
 "<img src='algunurl'>"+
 "<a href='google'>Ir a google</a>";

let nombreUsuario = "Katherine Vivanco ";
let htmlConTemplateStrings =`
    <h1>HOLA</h1>+
 <p>${nombreUsuario}</p>
    `;
console.log(htmlConTemplateStrings);