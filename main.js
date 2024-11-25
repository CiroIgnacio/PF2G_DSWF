// 1. Contar vocales en una cadena
function contarVocales(texto) {
    return (texto.match(/[aeiouáéíóú]/gi) || []).length;
}

// Ejemplos de contar vocales
console.log("Solución 1: Contar vocales");
console.log("Ejemplo a: 'JavaScript'");
console.log("//Resultado: ", contarVocales("JavaScript")); // Resultado: 3
console.log("Ejemplo b: 'Programación'");
console.log("//Resultado: ", contarVocales("Programación")); // Resultado: 4
console.log("Ejemplo c: 'HTML'");
console.log("//Resultado: ", contarVocales("HTML")); // Resultado: 0
console.log("______________");

/* 
Para contar las vocales:
1. Usar una expresión regular que busca vocales tanto en mayúsculas como minúsculas y que considera las tildes
2. El flag 'g' busca todas las coincidencias y 'i' hace que sea insensible a mayúsculas/minúsculas
3. El operador || [] maneja el caso cuando no hay vocales, evitando que match retorne null
4. Se retorna la longitud del array de coincidencias
5. Esta solución es más eficiente que iterar manualmente la cadena
*/

// 2. Mostrar el mayor número de un array
function maxNum(array) {
    return Math.max(...array);
}

// Ejemplos de número mayor
console.log("Solución 2: Número mayor del array");
console.log("Ejemplo a: [1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8]");
console.log("//Resultado: ", maxNum([1, 2, 3, 4, 5, 8, 6, 3, 3, 2, 9, 1, 6, 7, 8])); // Resultado: 9
console.log("Ejemplo b: [10, 20, 5, 15]");
console.log("//Resultado: ", maxNum([10, 20, 5, 15])); // Resultado: 20
console.log("Ejemplo c: [-1, -5, -2, -8]");
console.log("//Resultado: ", maxNum([-1, -5, -2, -8])); // Resultado: -1
console.log("______________");

/* 
Para encontrar el número mayor:
1. Usar Math.max() que retorna el mayor número de una serie de argumentos
2. El operador spread (...) convierte el array en una lista de argumentos
3. Esta solución es más eficiente que iterar manualmente el array
*/

// 3. Calcular la media de un array
function calcularMedia(array) {
    return array.reduce((acc, val) => acc + val, 0) / array.length;
}

// Ejemplos de media
console.log("Solución 3: Calcular media");
console.log("Ejemplo a: [10, 20, 30, 40]");
console.log("//Resultado: ", calcularMedia([10, 20, 30, 40])); // Resultado: 25
console.log("Ejemplo b: [1, 2, 3, 4, 5]");
console.log("//Resultado: ", calcularMedia([1, 2, 3, 4, 5])); // Resultado: 3
console.log("Ejemplo c: [100, 200, 300]");
console.log("//Resultado: ", calcularMedia([100, 200, 300])); // Resultado: 200
console.log("______________");

/* 
Para calcular la media:
1. Usar reduce() para sumar todos los elementos del array
2. Dividir la suma total por la longitud del array
3. El acumulador inicial es 0 para evitar problemas con arrays vacíos
*/

// 4. Invertir array
function invertirArray(array) {
    return [...array].reverse();
}

// Ejemplos de invertir array
console.log("Solución 4: Invertir array");
console.log("Ejemplo a: [1, 2, 3, 4, 5]");
console.log("//Resultado: ", JSON.stringify(invertirArray([1, 2, 3, 4, 5]))); // Resultado: [5,4,3,2,1]
console.log("Ejemplo b: ['a', 'b', 'c']");
console.log("//Resultado: ", JSON.stringify(invertirArray(['a', 'b', 'c']))); // Resultado: ["c","b","a"]
console.log("Ejemplo c: [true, false, true]");
console.log("//Resultado: ", JSON.stringify(invertirArray([true, false, true]))); // Resultado: [true,false,true]
console.log("______________");

/* 
Para invertir el array:
1. Usar el operador spread para crear una copia del array original
2. Aplicar reverse() a la copia para no modificar el array original
3. Esta solución mantiene el array original intacto
*/

// 5. Eliminar duplicados
function eliminarDuplicados(array) {
    return [...new Set(array)];
}

// Ejemplos de eliminar duplicados
console.log("Solución 5: Eliminar duplicados");
console.log("Ejemplo a: [1, 2, 2, 3, 4, 4, 5]");
console.log("//Resultado: ", JSON.stringify(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]))); // Resultado: [1,2,3,4,5]
console.log("Ejemplo b: ['a', 'b', 'a', 'c', 'b']");
console.log("//Resultado: ", JSON.stringify(eliminarDuplicados(['a', 'b', 'a', 'c', 'b']))); // Resultado: ["a","b","c"]
console.log("Ejemplo c: [1, 1, 1, 1]");
console.log("//Resultado: ", JSON.stringify(eliminarDuplicados([1, 1, 1, 1]))); // Resultado: [1]
console.log("______________");

/* 
Para eliminar duplicados:
1. Utilizar Set que automáticamente elimina duplicados
2. Convertir el Set de vuelta a array usando el operador spread
3. Esta solución es más eficiente que filtrar manualmente
*/

// 6. Capitalizar palabras
function capitalizarPalabras(texto) {
    return texto.split(' ')
               .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
               .join(' ');
}

// Ejemplos de capitalizar
console.log("Solución 6: Capitalizar palabras");
console.log("Ejemplo a: 'hola mundo desde javascript'");
console.log("//Resultado: ", capitalizarPalabras("hola mundo desde javascript")); // Resultado: "Hola Mundo Desde Javascript"
console.log("Ejemplo b: 'programación web'");
console.log("//Resultado: ", capitalizarPalabras("programación web")); // Resultado: "Programación Web"
console.log("Ejemplo c: 'html css js'");
console.log("//Resultado: ", capitalizarPalabras("html css js")); // Resultado: "Html Css Js"
console.log("______________");

/* 
Para capitalizar palabras:
1. Dividir el texto en array de palabras usando split
2. Usar map para transformar cada palabra
3. En cada palabra, capitalizar la primera letra y concatenar el resto
4. Unir las palabras nuevamente con espacios usando join
*/

// 7. Fibonacci
function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    
    const resultado = [0, 1];
    for (let i = 2; i < n; i++) {
        resultado.push(resultado[i-1] + resultado[i-2]);
    }
    return resultado;
}

// Ejemplos de Fibonacci
console.log("Solución 7: Secuencia Fibonacci");
console.log("Ejemplo a: n = 5");
console.log("//Resultado: ", JSON.stringify(fibonacci(5))); // Resultado: [0,1,1,2,3]
console.log("Ejemplo b: n = 7");
console.log("//Resultado: ", JSON.stringify(fibonacci(7))); // Resultado: [0,1,1,2,3,5,8]
console.log("Ejemplo c: n = 3");
console.log("//Resultado: ", JSON.stringify(fibonacci(3))); // Resultado: [0,1,1]
console.log("______________");

/* 
Para generar Fibonacci: Ver contexto en https://es.wikipedia.org/wiki/Sucesi%C3%B3n_de_Fibonacci
1. Manejar casos especiales (n <= 0 y n === 1)
2. Inicializar el array con los dos primeros números [0, 1]
3. Usar un bucle para generar los siguientes números sumando los dos anteriores
4. La solución es iterativa en lugar de recursiva para mejor rendimiento
*/