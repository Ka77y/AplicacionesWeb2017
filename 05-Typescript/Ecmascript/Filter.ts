/**
 * Created by katherinevivanco on 3/6/17.
 */
let arreglo = [
    {
        nombre: "Katherine",
        apellido: "Vivanco",
        id: 1,
        nota: 1
    },
    {
        nombre: "Geomara",
        apellido: "Vásquez",
        id: 1,
        nota: 2
    },
    {
        nombre: "Katherine",
        apellido: "Vásquez",
        id: 3
        nota: 2
    }
];
arreglo.find(function(value){
    return value.id == 1
})


