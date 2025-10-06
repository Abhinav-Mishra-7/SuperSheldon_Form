const After_Sales = require("../models/after_sales_form") ;
const Demo_Booking = require("../models/demo_booking_form") ;
const Demo_Completion = require("../models/demo_completion_form") ;
const Demo_Scheduling = require("../models/demo_scheduling_form") ;
const Meeting_Links = require("../models/meeting_links") ;
const Onboarding = require("../models/onboarding_form") ;
const Teacher = require("../models/teacher") ;

const after_sales = async (req,res) => {

    try{

        const after = await After_Sales.updateOne(req.body , { upsert: true }) ;
        console.log("Successful") ;
        res.send(after) ;

    }
    catch(err){
        res.send(err) ;
    }

}

const demo_booking = async (req,res) => {

    try{

        const demo_booking = await Demo_Booking.updateOne(req.body , { upsert: true }) ;
        console.log("Successful") ;
        res.send(demo_booking) ;

    }
    catch(err){
        res.send(err) ;
    }

}

const demo_completion = async (req,res) => {

    try{

        const demo_completion = await Demo_Completion.updateOne(req.body , { upsert: true }) ;
        console.log("Successful") ;
        res.send(demo_completion) ;

    }
    catch(err){
        res.send(err) ;
    }

}

const demo_scheduling = async (req,res) => {

    try{

        const demo_scheduling = await Demo_Scheduling.updateOne(req.body , { upsert: true }) ;
        console.log("Successful") ;
        res.send(demo_scheduling) ;

    }
    catch(err){
        res.send(err) ;
    }

}

const meeting_links = async (req,res) => {

    try{

        const meeting = await Meeting_Links.updateOne(req.body , { upsert: true }) ;
        console.log("Successful") ;
        res.send(meeting) ;

    }
    catch(err){
        res.send(err) ;
    }

}

const onboarding = async (req,res) => {

    try{

        const onboarding = await Onboarding.updateOne(req.body , { upsert: true })  ;
        console.log("Successful") ;
        res.send(onboarding) ;

    }
    catch(err){
        res.send(err) ;
    }

}

const teacher = async (req,res) => {

    try{

        const teacher = await Teacher.updateOne(req.body , { upsert: true })  ;
        console.log("Successful") ;
        res.send(teacher) ;

    }
    catch(err){
        res.send(err) ;
    }

}

module.exports = {after_sales , demo_booking , demo_completion , demo_scheduling , meeting_links , onboarding , teacher} ;