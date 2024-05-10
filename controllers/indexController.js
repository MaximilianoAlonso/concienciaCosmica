module.exports = {
    index: (req,res) => {
        res.render("index")
    },
    about: (req,res) => {
        res.render("about")
    },
    blog: (req,res) => {
         res.render("blog")
    },
    contacts: (req,res) => {
        res.render("contacts")
    }

}