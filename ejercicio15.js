//*Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
const products = [
  'Camiseta de Pokemon',
  'Pantalón coquinero',
  'Gorra de gansta',
  'Camiseta de Basket',
  'Cinrurón de Orión',
  'AC/DC Camiseta'
]

function incluida(param) {
  const valores = []

  for (i = 0; i < param.length; i++) {
    if (param[i].includes('Camiseta')) {
      valores.push(param[i])
    }
  }

  return valores
}

console.log(incluida(products))
