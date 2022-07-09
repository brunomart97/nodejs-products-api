import { Request, Response } from 'express'
import ProductModel from '../models/ProductModel'

const ProductController = {
  async listProducts(req: Request, res: Response): Promise<Response> {
    const products = await ProductModel.find()

    return res.json(products)
  },

  async findProductById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const product = await ProductModel.findById(id)

    return res.json(product)
  }
}

export default ProductController
