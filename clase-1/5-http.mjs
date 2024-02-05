import http from 'node:http'
import { validateDesirePort } from './5-desirePort.mjs'

const port = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  res.end('Hello World')
}
)

const connectServer = async (port) => {
  const selectPort = await validateDesirePort(port)
  server.listen(selectPort, () => console.log(`Server running on port ${server.address().port}`))
}

connectServer(port)
