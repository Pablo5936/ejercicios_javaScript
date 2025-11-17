//*Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

const usersMayores = []
const usersMenores = []

for (const user of users) {
  if (user.years >= 18) {
    usersMayores.push(user.name)
  }
  if (user.years < 18) {
    usersMenores.push(user.name)
  }
}

console.log('Usuarios mayores de edad:', usersMayores)
console.log('Usuarios menores de edad:', usersMenores)
console.log(`Usuarios mayores de edad: ${usersMayores}`)
console.log(`Usuarios menores de edad: ${usersMenores}`)

//*TODO: Solución con bucle for

const users1 = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

const usersMayores1 = []
const usersMenores1 = []

for (let i = 0; i < users.length; i++) {
  if (users1[i].years >= 18) {
    usersMayores1.push(users[i].name)
  } else {
    usersMenores1.push(users[i].name)
  }
}

console.log('Usuarios mayores de edad:', usersMayores1)
console.log('Usuarios menores de edad:', usersMenores1)
