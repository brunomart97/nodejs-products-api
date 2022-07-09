import { Router } from 'express'
import ProductController from '../controllers/ProductController'

const router = Router()

router.get('/list', ProductController.list)
router.get('/:id', ProductController.findById)
router.post('/create', ProductController.create)
router.put('/update/:id', ProductController.update)
router.delete('/delete/:id', ProductController.delete)

export default router
