/**
 * Created by katherinevivanco on 22/5/17.
 */
/**var texto = "";
var texto2 = "";
var numero = 1;
var booleano = false;
var decimal = 1.2;
var fecha = new Date();
var objeto = {};

texto = 2;
texto = booleano;
texto = decimal;
texto = fecha;
texto = objeto;
//Comentario en linea
/**
 * comentario en bloque
 * */
/**var arregloNumeros = [1,2,3,4,5];
var arregloStrings = ["a","b","c"];
var arregloBooleanos = [true,false,true];

arregloNumeros = [1,"a",true,[1,"b"],{}];
var matriz = [[1,2],[3,4]]
//Objeto JSON

var objetoNotacion = {};
var objeto2 = {
    llave:"valor",
    llave2:"valor",
    llave3:"valor"
};

objeto2.llave;
objeto2.llave2;
objeto2.llave3;*/
var objetoComplejo = {
    nombre:"",
    apellido:"",
    fechaNacimiento: new Date(),
    mayorEdad:true,
    peso:70.2,
    altura:127,
    saltar:function(){
        console.log("saltar")
    },
    correr:function () {
        console.log("correr")
    },
    sumar:function (a,b) {
        return a+b
    },
    imprimirNombre:function () {
        //return objetoComplejo.nombre + " " + objetoComplejo.apellido
        return this.nombre + " " + this.apellido;
    }
};

objetoComplejo.altura;
objetoComplejo.nombre;
objetoComplejo.apellido;

objetoComplejo.nombre = "Katherine"
objetoComplejo.nombre;
objetoComplejo.apellido = "Vivanco";
objetoComplejo.nombre;
objetoComplejo.titulo = "Ingeniero";
delete  objetoComplejo.nombre;
var arregloStrings = ["1","2"];
arregloStrings.push("3");
arregloStrings.pop();
console.log(arregloStrings.splice(1,0,"3"));

