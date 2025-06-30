const express = require("express")
const router = express.Router()



//Index 
router.get("/", (req, res) => {
    res.send("Lista dei post")
})
//Show
router.get("/:id", (req, res) => {
    res.send("Lista dei posti con ID: "+ req.params.id) 
})

//store
router.post("/", (req, res) => {
    res.send("Creazione nuovo post") 
})
//Upgrade
router.put("/:id", (req, res) => {
    res.send("Modifica integrale "+ req.params.id) 
})
router.delete("/:id", (req, res) => {
    res.send("Eliminazione "+ req.params.id) 
})




module.exports = router;