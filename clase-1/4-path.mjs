import path from 'node:path'

// separador de rutas según SO
console.log(path.sep)

// unir rutas con NODE
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

// obtener el nombre del archivo
const base = path.basename(filePath)
console.log(base)

// extensión de archivo base
const ext = path.extname(filePath)
console.log(ext)
