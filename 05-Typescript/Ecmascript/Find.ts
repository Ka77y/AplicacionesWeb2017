/**
 * Created by katherinevivanco on 3/6/17.
 */
//devuelve la primera instancia en el arreglo
    // segun un criterio de busqueda
let arreglo = [
    {
        nombre: "Katherine",
        apellido: "Vivanco",
        id: 1
    },
    {
        nombre: "Geomara",
        apellido: "Vásquez",
        id: 1
    },
    {
        nombre: "Katherine",
        apellido: "Vásquez",
        id: 2
    }
];
arreglo.find(function(value){
    return value.id == 1
})


