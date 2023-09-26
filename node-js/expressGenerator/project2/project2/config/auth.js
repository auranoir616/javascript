module.exports ={
    cekuser: function(req, res, nex){
        if(req.isAuthenticated()){
            return next()
        }
        res.redirect("/users/login")
    },
    forwarduser: function(req, res, nex){
        if(!req.isAuthenticated()){
            return next()
        }
        res.redirect("/dashboard")
    },
}