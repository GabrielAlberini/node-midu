import fs from 'node:fs'

const path = process.argv[2] ?? '.'

fs.readdir(path, (err, files) => {
  if (err) {
    return err
  }

  files.forEach((dir) => {
    console.log(dir)
  })
})
