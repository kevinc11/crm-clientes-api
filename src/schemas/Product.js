const {Schema, model} = require("mongoose")

const ProductSchema = new Schema({
      name: {
          type: String,
          required: true,
      },
      stock: {
          type: Number,
          default: 0,
      },
      price: {
          type: Number,
          required: true,
      }
}, 
{
timestamps: true,
versionKey: false,
}
);

exports.module = model('Product', ProductSchema, 'Products')