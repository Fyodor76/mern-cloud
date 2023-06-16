const fs = require('fs')
const File = require('../models/File')


class FileService {

  createDir(file) {
    const filePath = `${process.env.FILE_PATH}\\${file.user}\\${file.path}`
    console.log(filePath)
    return new Promise(((resolve, reject) => {
      try {
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath)
          return resolve({message: "FileList was created"})
        } else {
          return reject({message: "FileList already exists"})
        }
      } catch (e) {
        console.log(e)
          return reject({message: 'FileList error'})
      }
    }))
  }

  deleteFile(file) {
    const path = this.getPath(file)

    if (file.type === 'dir') {
      fs.rmdirSync(path)
    } else {
      fs.unlinkSync(path)
    }
  }

  getPath(file) {
    return process.env.FILE_PATH + '\\' + file.user + '\\' + file.path
  }
}

module.exports = new FileService()