//@desc get all contacts
//route GET /api/contacts
//@access is public will be changed to private when auth is enabled



const getContacts = (req,res)=>{
    res.status(200).json({message: "Get all Contacts"});
}

//@desc get all contacts
//route POST /api/contacts
//@access is public will be changed to private when auth is enabled
const createContact =(req,res)=>{
    console.log("the requested body is", req.body)
    res.status(201).json({message: "Create Contacts"})
};
//@desc get all contacts
//route GET /api/contacts
//@access is public will be changed to private when auth is enabled
const getContact= (req,res)=>{
    res.status(200).json({message: `Get Contact for ${req.params.id}`});  // to require a specific contact
}
//@desc get all contacts
//route PUT /api/contacts
//@access is public will be changed to private when auth is enabled

const updateContact = (req,res)=>{
    res.status(200).json({message: `Update Contact for ${req.params.id}`});
}
//@desc get all contacts
//route DELETE /api/contacts
//@access is public will be changed to private when auth is enabled
const deleteContact = (req,res)=>{
    res.status(200).json({message: `Delete Contact for ${req.params.id}`});
}


module.exports = {
    getContacts, 
    createContact, 
    getContact, 
    updateContact,
    deleteContact


}