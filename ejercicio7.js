//*Completa la función que tomando dos números como argumento devuelva el más alto.

function getMaxNumber(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return numberOne
  } else {
    return numberTwo
  }
}

console.log(getMaxNumber(500, 10))


