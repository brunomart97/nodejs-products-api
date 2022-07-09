import { Router } from 'express'
import ProductController from './controllers/ProductController'

const router = Router()

router.get('/products', ProductController.listProducts)
router.get('/product/:id', ProductController.findProductById)
router.post('/product', ProductController.createProduct)
router.put('/product/:id', ProductController.updateProduct)
router.delete('/product/:id', ProductController.deleteProduct)

export default router
