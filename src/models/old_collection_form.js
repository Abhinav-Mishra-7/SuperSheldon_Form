const mongoose = require("mongoose") ;

const oldCollectionSchema = new mongoose.Schema({_id: { type: String, unique: true }}, { strict: false, collection: 'old_collection_form' });

const Old_Collection = mongoose.model('Old_Collection_Form', oldCollectionSchema, 'old_collection_form');

module.exports = Old_Collection ;