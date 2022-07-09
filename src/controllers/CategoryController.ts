import { Request, Response } from 'express'
import CategoryModel from '../models/CategoryModel'

const CategoryController = {
  // Category list
  async list(req: Request, res: Response): Promise<Response> {
    try {
      const category = await CategoryModel.find()

      res.status(200)
      return res.json(category)
    } catch (error) {
      return res.status(400).json({
        message:
          'An error occurred while trying to access a list of categories!',
        error: error
      })
    }
  },

  // Find category by id
  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const category = await CategoryModel.findById(id)

      if (!category) {
        return res.status(404).json({ message: 'Category not found!' })
      }

      return res.status(200).json(category)
    } catch (error) {
      return res.status(404).json({
        message: 'Category not found!',
        error: error
      })
    }
  },

  // Create category
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { name, slug } = req.body

      if (!name) {
        return res.status(400).json({ message: 'Name is required!' })
      }

      if (!slug) {
        return res.status(400).json({ message: 'Slug is required!' })
      }

      const category = await CategoryModel.create(req.body)

      res.status(200)
      return res.json({
        message: 'Category registered successfully!',
        category: category
      })
    } catch (error) {
      return res.status(400).json({
        message: 'Error trying to register a category!',
        error: error
      })
    }
  },

  // Update category
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { name, slug } = req.body
      const { id } = req.params

      if (!name) {
        return res.status(400).json({ message: 'Name is required!' })
      }

      if (!slug) {
        return res.status(400).json({ message: 'Slug is required!' })
      }

      await CategoryModel.findByIdAndUpdate(id, req.body)

      res.status(200)
      return res.json({ message: 'Category edited successfully!' })
    } catch (error) {
      return res.status(400).json({
        message: 'Error trying to edit a category!',
        error: error
      })
    }
  },

  // Delete category
  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      await CategoryModel.findByIdAndDelete(id)

      res.status(200)
      return res.json({ message: 'Category deleted successfully!' })
    } catch (error) {
      return res.status(400).json({
        message: 'Error trying to delete a category!',
        error: error
      })
    }
  }
}

export default CategoryController
