const mongoose = require("mongoose") ;

const demo_completionSchema = new mongoose.Schema({}, { strict: false, collection: 'demo_completion_form' });

const Demo_Completion = mongoose.model('Demo_Completion_Form', demo_completionSchema, 'demo_completion_form');

module.exports = Demo_Completion ;