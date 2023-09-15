const Contact = require("./contactModel")

//handle index
//metode untuk menampilkan isi database dengan Contact.find({})
// Contact bentuk data yang diimport dari contactmodel 
exports.index = async function (req, res) {
    try {
        const contacts = await Contact.find({}); 
        res.json({
            status: "success",
            message: "Contact berhasil diterima",
            data: contacts,
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message,
        });
    }
};

// metode create contact
exports.new = function(req, res){
    let contact = new Contact()
    contact.name = req.body.name
    contact.gender = req.body.gender
    contact.email = req.body.email
    contact.phone = req.body.phone
    contact
    .save()
    .then((data) =>{
        res.json({
            status: "success",
            message: "contact baru dibuat",
            Contact: data,
        })
    })
    .catch((err)=>{
        res.status(500).send({
            message: err.message || "internal error"
        })
    })
}

//metode view contact
exports.view = async function(req, res) {
    try {
        const contact = await Contact.findById(req.params.contact_id);

        if (!contact) {
            return res.json({
                status: "error",
                message: "Contact not found",
            });
        }
        res.json({
            message: 'Contact detail loaded...',
            data: contact,
        });
    } catch (err) {
        res.status(500).json({
            status: "error",
            message: err.message || "Internal error",
        });
    }
};


//metode update contact
exports.update = async function (req, res) {
    try {
        const contactbaru = await Contact.findById(req.params.contact_id);
        
        contactbaru.name = req.body.name || contactbaru.name;
        contactbaru.gender = req.body.gender || contactbaru.gender;
        contactbaru.email = req.body.email || contactbaru.email;
        contactbaru.phone = req.body.phone || contactbaru.phone;

        const updatedContact = await contactbaru.save();

        res.json({
            status: "success",
            message: "Contact Updated",
            Contact: updatedContact,
        });
    } catch (err) {
        res.status(500).json({
            status: "error 1",
            message: err.message || "Internal error",
        });
    }
};

// exports.update = function (req, res) {
//     Contact.findById(req.params.contact_id, function (err, contact) {
//         if (err) {
//             res.status(500).json({
//                 status: "error",
//                 message: err.message || "internal error",
//             });
//         } else if (!contact) {
//             res.status(404).json({
//                 status: "error",
//                 message: "Contact not found",
//             });
//         } else {
//             contact.name = req.body.name || contact.name;
//             contact.gender = req.body.gender || contact.gender;
//             contact.email = req.body.email || contact.email;
//             contact.phone = req.body.phone || contact.phone;

//             contact
//                 .save()
//                 .then((data) => {
//                     res.json({
//                         status: "success",
//                         message: "Contact Updated",
//                         Contact: data,
//                     });
//                 })
//                 .catch((err) => {
//                     res.status(500).json({
//                         status: "error",
//                         message: err.message || "internal error",
//                     });
//                 });
//         }
//     });
// };
//metode delete contact
exports.delete =async function(req,res){
    try{ 
         const IDdelete = await Contact.deleteOne({_id : req.params.contact_id})
       if (IDdelete.deleteCount === 0){
        return res.status(404).json({
            status: "error",
            message: "contact not found"
        })
       }
           

        res.json({
            status: "success",
            message:"delete berhasil",
        })
}catch(err){
    res.status(500).json({
        status: "success",
        message:err.message,
    })
}

}
