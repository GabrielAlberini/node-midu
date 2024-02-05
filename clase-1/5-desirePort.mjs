import net from 'node:net'

const validateDesirePort = async (port, timeout = 1000) => {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    const timeoutId = setTimeout(() => {
      server.close()
      reject(new Error(`Timeout while validating port ${port}`))
    }, timeout)

    server.listen(port, () => {
      clearTimeout(timeoutId)
      server.close()
      resolve(port)
    })
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(0)
      } else {
        reject(err)
      }
    })
  })
}

export { validateDesirePort }
