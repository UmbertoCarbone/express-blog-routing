const express = require("express")
const app = express()
const port = 3021

app.use(express.static("public"))

//Index 
app.get("/posts", (req, res) => {
    res.send("Lista dei post")
})
//Show
app.get("/posts/:id", (req, res) => {
    res.send("Lista dei posti con ID: "+ req.params.id) 
})

//store
app.post("/posts", (req, res) => {
    res.send("Creazione nuovo post") 
})
//Upgrade
app.put("/posts/:id", (req, res) => {
    res.send("Modifica integrale "+ req.params.id) 
})
app.delete("/posts/:id", (req, res) => {
    res.send("Eliminazione "+ req.params.id) 
})


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})