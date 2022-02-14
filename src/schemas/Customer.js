const {Schema, model} = require("mongoose")

const CustomerSchema = new Schema({
      name: {
          type: String,
          required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
    },
    company: {
        type: String,
        required: true,
    },
    phone: {
        type: String
    }
});    

exports.module = model('Customer', CustomerSchema, 'Customers')