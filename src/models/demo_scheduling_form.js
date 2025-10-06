const mongoose = require("mongoose") ;

const demo_schedulingSchema = new mongoose.Schema({_id: { type: String, unique: true }}, { strict: false, collection: 'demo_scheduling_form' });

const Demo_Scheduling = mongoose.model('Demo_Scheduling_Form', demo_schedulingSchema, 'demo_scheduling_form');

module.exports = Demo_Scheduling ;