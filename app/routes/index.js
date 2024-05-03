const express = require('express')
const router = express.Router()
const fs = require('node:fs')
const { route } = require('./requestsClients')

const pathRouter = `${__dirname}/`
const removeExtension = (file) => {
  return file.split('.').shift()
}

fs.readdirSync(pathRouter).filter((file) => {
  const fileWithoutExtension = removeExtension(file)
  const skip = ['index'].includes(fileWithoutExtension)
  if (!skip) {
    console.log('Routes')
    router.use(`/${fileWithoutExtension}`, require(`./${fileWithoutExtension}`))
    console.log('--->', fileWithoutExtension)
  }
})

router.get('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'Not Found'
  })
})

module.exports = router