const mongoose = require("mongoose") ;

const after_salesSchema = new mongoose.Schema({_id: { type: String, unique: true }}, { strict: false, collection: 'after_sales_form' });

const After_Sales = mongoose.model('After_Sales_Form', after_salesSchema, 'after_sales_form');

module.exports = After_Sales ;