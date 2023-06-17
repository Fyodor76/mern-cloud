const Router = require('express')
const router = new Router()
const authMiddleWare = require('../middleware/auth.middleware')
const fileController = require('../controllers/fileController')


router.post('', authMiddleWare, fileController.createDir)
router.post('/upload', authMiddleWare, fileController.uploadFile)
router.post('/avatar', authMiddleWare, fileController.uploadAvatar)
router.put('/', authMiddleWare, fileController.updateDir)
router.get('', authMiddleWare, fileController.getFiles)
router.get('/download', authMiddleWare, fileController.downloadFile)
router.get('/search', authMiddleWare, fileController.searchFile)
router.delete('/', authMiddleWare, fileController.deleteFile)
router.delete('/avatar', authMiddleWare, fileController.deleteAvatar)

module.exports = router;