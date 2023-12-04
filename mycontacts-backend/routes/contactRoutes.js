const express = require("express");
const router = express.Router();


router.route("/").get( (req,res)=>{
    res.status(200).json({message: "Get all Contacts"}); // to get all contacts
});

router.route("/").post( (req,res)=>{
    res.status(200).json({message: "Create Contacts"});  // to create a new contact
});

router.route("/:id").get( (req,res)=>{
    res.status(200).json({message: `Get Contact for ${req.params.id}`});  // to require a specific contact
});

router.route("/:id").put( (req,res)=>{
    res.status(200).json({message: `Update Contact for ${req.params.id}`});  // to update a contact
});

router.route("/:id").delete( (req,res)=>{
    res.status(200).json({message: `Delete Contact for ${req.params.id}`}); // to delete a contact
});
module.exports = router;