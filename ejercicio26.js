//* Usa un bucle para recorrer el array de productos (products) y añade al array goodProducts los que tengan más de 20 ventas (sellCount) y al array badProducts los que tengan menos.

const goodProducts = []
const badProducts = []
const products = [
  { name: 'Funko Dr. Strange', sellCount: 10 },
  { name: 'Mochila de protones: Ghostbusters', sellCount: 302 },
  { name: 'Sable laser FX', sellCount: 23 },
  { name: 'Varita de Voldemort', sellCount: 6 }
]

for (const product of products) {
  if (product.sellCount >= 20) {
    goodProducts.push(product)
  } else if (product.sellCount < 20) {
    badProducts.push(product)
  }
}

console.log('Productos con más ventas:', goodProducts)
console.log('Productos con menos ventas:', badProducts)

//! Solucion con metodo .filter

const goodProducts1 = products.filter((product) => product.sellCount >= 20)
const badProducts1 = products.filter((product) => product.sellCount < 20)

console.log('Productos con más ventas:', goodProducts1)
console.log('Productos con menos ventas:', badProducts1)
