// necesito que la funcion haga esto:
/**
1- La base de la escalera tiene un ancho y un alto de n.
2- Cada escalón tiene como máximo un ancho de n - 1 y un mínimo de 1.
3- A medida que el escalón disminuye en ancho, aumenta en altura y suma un espacio vacío.
4- La escalera tiene un total de n escalones.
5- La escalera no puede tener un ancho negativo.
6- La máxima cantidad de espacios vacíos que puede haber en un escalón es n - 1. 


*/

function staircase(n) {
  // Write your code here

  for (let i = 1; i <= n; i++) {
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}
