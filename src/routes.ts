import { Router } from 'express'
import ProductController from './controllers/ProductController'

const router = Router()

router.get('/products', ProductController.listProducts)
router.get('/product/:id', ProductController.findProductById)

export default router
