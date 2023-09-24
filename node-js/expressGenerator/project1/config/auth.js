module.exports ={

    cekuser : function(req, res, next){
        if(req.isAuthenticated()){
            return next()
        }
        res.redirect("/users/login")
    },
    forwarduser : function(req, res, next){
        if(!req.isAuthenticated()){
            return next()
        }
        res.redirect("/dashboard")
}
}