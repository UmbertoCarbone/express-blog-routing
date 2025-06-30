const express = require("express")
const router = express.Router()


app.use(express.static("public"))

//Index 
app.get("/", (req, res) => {
    res.send("Lista dei post")
})
//Show
app.get("//:id", (req, res) => {
    res.send("Lista dei posti con ID: "+ req.params.id) 
})

//store
app.post("/", (req, res) => {
    res.send("Creazione nuovo post") 
})
//Upgrade
app.put("/:id", (req, res) => {
    res.send("Modifica integrale "+ req.params.id) 
})
app.delete("/:id", (req, res) => {
    res.send("Eliminazione "+ req.params.id) 
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

module.exports = router;