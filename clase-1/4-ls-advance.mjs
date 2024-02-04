import fs from 'node:fs/promises'
import path from 'node:path'

const directoryPath = process.argv[2] ?? '.'

const ls = async (path) => {
  try {
    return await fs.readdir(path)
  } catch (error) {
    console.error(`Error reading directory: ${path}`)
    process.exit(1)
  }
}

const mappedData = async (files) => {
  const fileDataPromises = files.map(async (file) => {
    try {
      const filePath = path.join(directoryPath, file)
      const stats = await fs.stat(filePath)
      return {
        isDirectory: stats.isDirectory() ? '✅' : '❌',
        name: path.basename(file, path.extname(file)),
        extension: path.extname(file),
        size: stats.size,
        creationTime: new Date(stats.birthtime).toLocaleString(),
        modificationTime: new Date(stats.mtime).toLocaleString()
      }
    } catch (error) {
      console.error(`Error processing file ${file}: ${error.message}`)
      return null
    }
  })

  const fileDataArray = await Promise.all(fileDataPromises)
  const sortedFiles = fileDataArray.sort((a, b) => b.size - a.size)
  const filesWithFormattedSize = sortedFiles.map((file) => ({
    ...file,
    size: `${file.size} bytes`
  }))
  return filesWithFormattedSize
}

const main = async () => {
  const filesNames = await ls(directoryPath)
  const data = await mappedData(filesNames)

  console.table(data)
}

main()
