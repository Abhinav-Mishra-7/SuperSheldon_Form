const mongoose = require("mongoose") ;

const demo_bookingSchema = new mongoose.Schema({_id: { type: String, unique: true }}, { strict: false, collection: 'demo_booking_form' });

const Demo_Booking = mongoose.model('Demo_Booking_Form', demo_bookingSchema, 'demo_booking_form');

module.exports = Demo_Booking ;