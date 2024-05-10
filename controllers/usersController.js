module.exports = {
    profile: (req,res) => {
        res.render("users/profile")
    },
    register: (req,res) => {
        res.render("users/register")
    },
    saveUser: (req,res) => { 
        res.redirect("users/profile")
    },
    login: (req,res) => {
        res.render("users/login")
    },
    processLogin: (req,res) => {
        res.redirect("users/index")
    },
    logout: (req,res) => {
        res.redirect("users/login")
    }

}