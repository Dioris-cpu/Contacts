const express = require('express');
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../model/User");
const auth = require('../middleware/auth')
const Contact = require('../model/Contact')



// @route       GET api/contacts
// @desc        Get all users contacts
// @access      Private
router.get('/',auth, async (req, res) =>{
    try {
        const contacts = await Contact.find({ user: req.user.id}).sort({ date: -1});
        res.json(contacts)
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error ')
        
    }
});

// @route       POST api/contacts
// @desc        Add new contacts
// @access      Private
router.post('/',(req, res) =>{
    res.send('add new contacts')
});

// @route       PUT api/contacts/:id
// @desc        update contacts
// @access      Private
router.put('/:id',(req, res) =>{
    res.send('update contacts')
});

// @route       DELETE api/contacts/:id
// @desc        Delete contacts
// @access      Private
router.delete('/:id',(req, res) =>{
    res.send(' Delete contacts')
});


module.exports = router
