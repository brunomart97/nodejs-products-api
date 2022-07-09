import { Request, Response } from 'express'
import ProductModel from '../models/ProductModel'
import CategoryModel from '../models/CategoryModel'

const ProductController = {
  // Product list
  async list(req: Request, res: Response): Promise<Response> {
    try {
      const products = await ProductModel.find()

      res.status(200)
      return res.json(products)
    } catch (error) {
      return res.status(400).json({
        message: 'An error occurred while trying to access a list of products!',
        error: error
      })
    }
  },

  // Find product by id
  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const product = await ProductModel.findById(id)

      if (!product) {
        return res.status(404).json({ message: 'Product not found!' })
      }

      return res.status(200).json(product)
    } catch (error) {
      return res.status(404).json({
        message: 'Product not found!',
        error: error
      })
    }
  },

  // Create product
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const {
        name,
        brand,
        categoryName,
        stars,
        imageUrl,
        price,
        slug,
        quantity
      } = req.body

      if (!name) {
        return res.status(400).json({ message: 'Name is required!' })
      }

      if (!brand) {
        return res.status(400).json({ message: 'Brand is required!' })
      }

      if (!categoryName) {
        return res.status(400).json({ message: 'Category is required!' })
      }

      if (!stars) {
        return res.status(400).json({ message: 'Stars is required!' })
      }

      if (!imageUrl) {
        return res.status(400).json({ message: 'Image URL is required!' })
      }

      if (!price) {
        return res.status(400).json({ message: 'Price is required!' })
      }

      if (!slug) {
        return res.status(400).json({ message: 'Slug is required!' })
      }

      if (!quantity) {
        return res.status(400).json({ message: 'Slug is required!' })
      }

      const category = await CategoryModel.findOne({ name: categoryName })

      if (!category) {
        return res.status(400).json({ message: 'Category not found!' })
      }

      const product = await ProductModel.create(req.body)

      res.status(200)
      return res.json({
        message: 'Product registered successfully!',
        product: product
      })
    } catch (error) {
      return res.status(400).json({
        message: 'Error trying to register a product!',
        error: error
      })
    }
  },

  // Update product
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const {
        name,
        brand,
        categoryName,
        stars,
        imageUrl,
        price,
        slug,
        quantity
      } = req.body
      const { id } = req.params

      if (!name) {
        return res.status(400).json({ message: 'Name is required!' })
      }

      if (!brand) {
        return res.status(400).json({ message: 'Brand is required!' })
      }

      if (!categoryName) {
        return res.status(400).json({ message: 'Category is required!' })
      }

      if (!stars) {
        return res.status(400).json({ message: 'Stars is required!' })
      }

      if (!imageUrl) {
        return res.status(400).json({ message: 'Image URL is required!' })
      }

      if (!price) {
        return res.status(400).json({ message: 'Price is required!' })
      }

      if (!slug) {
        return res.status(400).json({ message: 'Slug is required!' })
      }

      if (!quantity) {
        return res.status(400).json({ message: 'Slug is required!' })
      }

      const category = await CategoryModel.findOne({ name: categoryName })

      if (!category) {
        return res.status(400).json({ message: 'Category not found!' })
      }

      await ProductModel.findByIdAndUpdate(id, req.body)

      res.status(200)
      return res.json({ message: 'Product edited successfully!' })
    } catch (error) {
      return res.status(400).json({
        message: 'Error trying to edit a product!',
        error: error
      })
    }
  },

  // Delete product
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      await ProductModel.findByIdAndDelete(id)

      res.status(200)
      return res.json({ message: 'Product deleted successfully!' })
    } catch (error) {
      return res.status(400).json({
        message: 'Error trying to delete a product!',
        error: error
      })
    }
  }
}

export default ProductController
