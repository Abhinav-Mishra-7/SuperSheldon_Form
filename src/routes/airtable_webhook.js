const express = require("express");
const router = express.Router();

const After_Sales = require("../models/after_sales_form");
const Demo_Booking = require("../models/demo_booking_form");
const Demo_Completion = require("../models/demo_completion_form");
const Demo_Scheduling = require("../models/demo_scheduling_form");
const Meeting_Links = require("../models/meeting_links");
const Onboarding = require("../models/onboarding_form");
const Teacher = require("../models/teacher");

const models = {
    after_sales_form: After_Sales,
    demo_booking_form: Demo_Booking,
    demo_completion_form: Demo_Completion,
    demo_scheduling_form: Demo_Scheduling,
    meeting_links: Meeting_Links,
    onboarding_form: Onboarding,
    teacher: Teacher
};

router.post("/airtable-webhook", async (req, res) => {
    try {
        const { id, table, fields } = req.body;

        if (!models[table]) return res.status(400).send("Unknown table");

        const Model = models[table];
        await Model.updateOne(
            { id },
            { $set: fields },
            { upsert: true }
        );

        res.status(200).send("Record synced successfully");
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});

module.exports = router;