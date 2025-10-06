const mongoose = require("mongoose") ;

const meeting_linksSchema = new mongoose.Schema({_id: { type: String, unique: true }}, { strict: false, collection: 'meeting_links' });

const Meeting_Links = mongoose.model('Meeting_Links', meeting_linksSchema, 'meeting_links');

module.exports = Meeting_Links ;