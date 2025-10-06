const mongoose = require("mongoose") ;

const onboardingSchema = new mongoose.Schema({}, { strict: false, collection: 'onboarding_form' });

const Onboarding = mongoose.model('Onboarding', onboardingSchema, 'onboarding_form');

module.exports = Onboarding ;