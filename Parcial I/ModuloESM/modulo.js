let fraseInicial = "Esta es la frase inicial para la carga síncrona"

let frases=[
    "Esta es la frase 1 para la carga asíncrona.",
    "Esta es la frase 2 para la carga asíncrona.",
    "Esta es la frase 3 para la carga asíncrona.",
    "Esta es la frase 4 para la carga asíncrona.",
    "Esta es la frase 5 para la carga asíncrona."
]

export async function ObtenerFrase() {
    let indice = Math.floor(Math.random() * 5);
    return frases[indice];
}

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