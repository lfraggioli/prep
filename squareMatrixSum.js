// Para recorrer una diagonal de una matriz cuadrada, puedes utilizar un solo bucle for y utilizar el índice del bucle para acceder a los elementos de la diagonal.

//? La lógica es la siguiente:

//* Para la diagonal principal (la que va de la esquina superior izquierda a la esquina inferior derecha), los índices de las filas y las columnas son iguales. Por ejemplo, en una matriz de 3x3, los elementos de la diagonal principal son los que están en las posiciones (0,0), (1,1) y (2,2).

//* Para la diagonal secundaria (la que va de la esquina superior derecha a la esquina inferior izquierda), el índice de la columna es el complemento del índice de la fila. En una matriz de 3x3, los elementos de la diagonal secundaria están en las posiciones (0,2), (1,1) y (2,0).
/*La expresión matriz.length - i - 1 se utiliza para calcular el índice de la columna para la diagonal secundaria en una matriz cuadrada.

 La lógica detrás de esto es que, en la diagonal secundaria, el índice de la columna comienza desde el final de la matriz y disminuye en 1 en cada paso, mientras que el índice de la fila comienza desde el principio de la matriz y aumenta en 1 en cada paso.
Por ejemplo, en una matriz cuadrada de 3x3, los índices de la fila y la columna para la diagonal secundaria serían (0,2), (1,1) y (2,0). Como puedes ver, el índice de la columna disminuye en 1 en cada paso, mientras que el índice de la fila aumenta en 1.

Por lo tanto, para obtener el índice de la columna para la diagonal secundaria, restamos el índice de la fila actual (i) y 1 del tamaño total de la matriz (matriz.length). Esto nos da el índice de la columna correcto para la diagonal secundaria en cada paso. */
//? ejemplo de matriz cuadrada: let matriz = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

//! Given a square matrix, calculate the absolute difference between the sums of its diagonals.

function diagonalDifference(arr) {
  let diagonalPrincipal = 0;
  let diagonalSecundaria = 0;

  for (let i = 0; i < arr.length; i++) {
    diagonalPrincipal += arr[i][i]; //👉🏻 Suma de la diagonal principal, coordenadas [i][i], son iguales porque esa es la propiedad de una matriz cuadrada.
    diagonalSecundaria += arr[i][arr.length - i - 1]; //👉🏻 Suma de la diagonal secundaria, coordenadas [i][arr.length - i - 1], son diferentes porque el recorrido empieza desde el final.
  }

  return Math.abs(diagonalPrincipal - diagonalSecundaria); //👉🏻 Math.abs() devuelve el valor absoluto de un número, es decir, su valor sin signo.
}
