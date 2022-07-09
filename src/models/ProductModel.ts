import mongoose, { Schema } from 'mongoose'

const ProductModel = new Schema(
  {
    name: String,
    brand: String,
    stars: Number,
    imageUrl: String,
    price: {
      listPrice: Number,
      sellingPrice: Number
    },
    slug: String,
    quantity: Number
  },
  { timestamps: true }
)

export default mongoose.model('Product', ProductModel)
