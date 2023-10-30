// Declarar un array para almacenar vinos
var vinos = [];

// Función para agregar un vino
function agregarVino() {
    var nombre = prompt("Ingresa el nombre del vino:");
    var año = prompt("Ingresa el año del vino:");
    var tipo = prompt("Ingresa el tipo de vino:");

    var vino = {
        nombre: nombre,
        año: año,
        tipo: tipo
    };

    vinos.push(vino);
    alert("Vino agregado:", vino);
}

// Función para eliminar un vino
function eliminarVino() {
    var nombre = prompt("Ingresa el nombre del vino que deseas eliminar:");

    for (var i = 0; i < vinos.length; i++) {
        if (vinos[i].nombre === nombre) {
            vinos.splice(i, 1);
            alert("Vino eliminado:", nombre);
            return;
        }
    }

   alert("Vino no encontrado:", nombre);
}

// Función para mostrar la lista de vinos
function mostrarVinos() {
  alert("Lista de vinos en la vinoteca:");
    for (var i = 0; i < vinos.length; i++) {
        alert("Nombre: " + vinos[i].nombre + ", Año: " + vinos[i].año + ", Tipo: " + vinos[i].tipo);
    }
}