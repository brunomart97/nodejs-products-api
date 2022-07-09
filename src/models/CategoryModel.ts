import mongoose, { Schema } from 'mongoose'

const CategoryModel = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default mongoose.model('Category', CategoryModel)
