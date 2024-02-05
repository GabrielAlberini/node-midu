import fs from 'node:fs'

console.time()
console.log('Leyendo el primero archivo de forma sincrónica.')
const data = fs.readFileSync('./clase-1/input.txt', 'utf8')
console.log('data del primer archivo:', data)

console.log('---- Haciendo otras tareas ----')

console.log('Leyendo el segundo archivo de forma sincrónica.')
const data2 = fs.readFileSync('./clase-1/input2.txt', 'utf8')
console.log('data del segundo archivo:', data2)
console.timeEnd()
