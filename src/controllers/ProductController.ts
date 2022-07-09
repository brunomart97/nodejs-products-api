import { Request, Response } from 'express'
import ProductModel from '../models/ProductModel'

const ProductController = {
  async listProducts(req: Request, res: Response): Promise<Response> {
    const products = await ProductModel.find()

    res.status(200)
    return res.json(products)
  },

  async findProductById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const product = await ProductModel.findById(id)

    res.status(200)
    return res.json(product)
  },

  async createProduct(req: Request, res: Response): Promise<Response> {
    const product = await ProductModel.create(req.body)

    res.status(200)
    return res.json(product)
  },

  async updateProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    await ProductModel.findByIdAndUpdate(id, req.body)

    res.status(200)
    return res.json({message: "Product edited successfully!"})
  },

  async deleteProduct(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    await ProductModel.findByIdAndDelete(id)

    res.status(200)
    return res.json({message: "Product deleted successfully!"})
  },
}

export default ProductController

// const {
//   name,
//   brand,
//   stars,
//   imageUrl,
//   price,
//   slug,
//   quantity
// } = req.body
