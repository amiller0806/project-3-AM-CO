const {Schema, model, Types} = require('mongoose');

const ProductSchema = new Schema(
    {
        productId: {
            type: Schema.Types.ObjectId
        },

        title: {
            type: String, 
            required: true, 
            unique: true
        },

        category: {
            type: String, 
            required: true
        },

        description: {
            type: String, 
            
        },

        price: {
            type: String,
            
        },

        main_image: {
            type: String,
        
        },

        rating: {
            type: Number
        },

        ratings_total: {
            type: Number 

        },

        brand: {
            type: String 
        },

        link: {
            type: String
        }



    }
);

const Product = model('Product', ProductSchema);
module.exports = Product;