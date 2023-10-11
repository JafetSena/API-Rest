/**
 * Variable de la frase inical, se llama al inicio de la función
 */
let fraseInicial = "Esta es la frase inicial para la carga síncrona"
/**
 * Arreglo de 5 frases que se puedes mandar a llamar por medio de una función
 */
let frases=[
    "Esta es la frase 1 para la carga asíncrona.",
    "Esta es la frase 2 para la carga asíncrona.",
    "Esta es la frase 3 para la carga asíncrona.",
    "Esta es la frase 4 para la carga asíncrona.",
    "Esta es la frase 5 para la carga asíncrona."
]
/**
 * Función que obtiene una frase de forma aleatoria, generando un número desde el 0 al 4
 * @returns {string} Regresa una frase del arreglo de frases según el índice recibido
 */
export async function ObtenerFrase() {
    let indice = Math.floor(Math.random() * 5);
    return frases[indice];
}
/**
 * Función que obtiene la frase inicial al cargar la aplicación
 * @returns {string} Retorna la frase inicial al iniciar la aplicación
 */
export function ObtenerFraseInicial(){
    return fraseInicial;
}

// export async function resolve(specifier, context, nextResolve) {
//     const { parentURL = null } = context;
  
//     if (Math.random() > 0.5) { // Some condition.
//       // For some or all specifiers, do some custom logic for resolving.
//       // Always return an object of the form {url: <string>}.
//       return {
//         shortCircuit: true,
//         url: parentURL ?
//           new URL(specifier, parentURL).href :
//           new URL(specifier).href,
//       };
//     }
// }