// import model
const userdb = require("../model/model");

//create & save data user
exports.create = (req, res) => {
  //validasi data
  if (!req.body) {
    res.status(400).send({ message: "data tidak boleh kosong" });
    return;
  }

  // get data request dari json
  const user = new userdb({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
  });
  user
    .save()
    .then((data) => {
      res.status(201).json({
        message: "data user sukses dibuat",
        Data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "internal error",
      });
    });
};

exports.find = (req, res) => {
  if (req.query.username) {
    const userName = req.query.username;

    userdb
      .findOne({
        username: userName,
      })
      .then((data) => {
        if (!data) {
          res
            .status(404)
            .send({ message: "tidak bisa menemukan user " + userName });
        } else {
          res.json({
            message: "sukses menemukan semua data user",
            Data: data,
          });
        }
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "internal error",
        });
      });
  } else {
    userdb
      .find()
      .then((data) => {
        res.json({
          message: "sukses menemukan data user",
          Data: data,
        });
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "internal error",
        });
      });
  }
};

//update data user by parameter username
exports.update = (req, res) =>{
    try{
        userdb.findOneAndUpdate({"username" : req.params.username}, req.body, {new : true})
        .then(data=>{
            if(!data){
                res.status(404).send({message: "tidak bisa update data dengan username "+ req.params.username})
            }else{
                res.json({
                    message : "sukses update data user",
                    Data : data
                })
            }
        })
    }catch(err){
        res.status(500).send({message: err.message || "internal error"})
    }
}

//delete data user dari username spesifik
exports.delete = (req, res)=>{
    const userName =req.params.username
    userdb.findOneAndDelete({username: userName})
    .then((data)=>{
        if(!data){
            res.status(404).send({
                message: "tidak bisa delete data dengan username "+ userName
            })
        }else{
            res.json({
                message: "sukses menghapus data",
            })
        }
    })
}

