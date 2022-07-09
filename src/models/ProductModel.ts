import mongoose, { Schema } from 'mongoose'

const ProductModel = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    brand: {
      type: String,
      required: true
    },
    categoryName: {
      type: Object,
      required: true
    },
    stars: {
      type: Number,
      required: true
    },
    imageUrl: {
      type: [String],
      required: true
    },
    price: {
      type: {
        listPrice: Number,
        sellingPrice: Number
      },
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  },
  { timestamps: true }
)

export default mongoose.model('Product', ProductModel)
