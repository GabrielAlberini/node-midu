import http from 'node:http'
import fs from 'node:fs'

const port = process.env.PORT ?? 3000

const processUrl = (request, response) => {
  response.setHeader('Content-Type', 'text/plain; charset=utf8')

  if (request.url === '/') {
    response.end('Hola desde mi página de inicio.')
  } else if (request.url === '/about') {
    response.end('Hola desde mi página de about.')
  } else if (request.url === '/imagen.png') {
    fs.readFile('./clase-2/imagen.png', (err, data) => {
      if (err) {
        response.statusCode = 500
        response.end('Error interno del servidor.')
      } else {
        response.setHeader('Content-Type', 'image/png')
        response.end(data)
      }
    })
  } else {
    response.statusCode = 404
    response.end('Página no encontrada.')
  }
}

const server = http.createServer(processUrl)

server.listen(port, () => console.log(`Server running on port http://localhost:${server.address().port}`))
