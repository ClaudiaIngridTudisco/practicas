
//filtrar números pares

function filtrarPares(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Ejemplo
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

//Calcular promedio

function calcularPromedio(arr) {
  if (arr.length === 0) return 0;
  const suma = arr.reduce((acc, num) => acc + num, 0);
  return suma / arr.length;
}

// Ejemplo
console.log(calcularPromedio([10, 20, 30])); // 20

//imprimir con retraso

const imprimirConRetraso = (arr) => {
  arr.forEach((elemento, index) => {
    setTimeout(() => {
      console.log(elemento);
    }, 1000 * index);
  });
};

// Ejemplo
imprimirConRetraso(['A', 'B', 'C']); // Imprime A, luego B, luego C con 1 segundo de diferencia


//Operación con callback

function operarConCallback(callback, a, b) {
  return callback(a, b);
}

// Callbacks
const sumar = (x, y) => x + y;
const multiplicar = (x, y) => x * y;

// Ejemplo
console.log(operarConCallback(sumar, 5, 3));       // 8
console.log(operarConCallback(multiplicar, 5, 3)); // 15


//botón que muestra mensaje

function mostrarMensaje() {
      document.getElementById("mensaje").style.display = "block";
    }


//botón que cambia de color el fondo

  const colores = ["#FFDDC1", "#C1FFD7", "#C1D4FF", "#F0C1FF"];
    let indice = 0;

    function cambiarFondo() {
      document.body.style.backgroundColor = colores[indice];
      indice = (indice + 1) % colores.length;
    }



