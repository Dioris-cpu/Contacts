const express = require('express');
const router = express.Router();

// @route       GET api/contacts
// @desc        Get all users contacts
// @access      Private
router.get('/',(req, res) =>{
    res.send('Get all users contacts')
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
