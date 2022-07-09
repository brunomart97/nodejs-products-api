import { Router } from 'express'
import CategoryController from '../controllers/CategoryController'

const router = Router()

router.get('/list', CategoryController.list)
router.get('/:id', CategoryController.findById)
router.post('/create', CategoryController.create)
router.put('/update/:id', CategoryController.update)
router.delete('/delete/:id', CategoryController.delete)

export default router
