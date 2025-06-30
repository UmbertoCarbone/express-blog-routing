const express = require("express")
const router = express.Router()
const port = 3021

const posts = [
        {
            id:1,
            immagine: `http://localhost:${port}/ciambellone.jpeg`
        },
        {
            id:2,
            immagine: `http://localhost:${port}/cracker_barbabietola.jpeg`
        },
        {
            id:3,
            immagine: `http://localhost:${port}/pane_fritto_dolce.jpeg`
        },
        {
            id:4,
            immagine: `http://localhost:${port}/pasta_barbabietola.jpeg`
        },
        {
            id:5,
            immagine: `http://localhost:${port}/torta_paesana.jpeg`
        }
    ];

//Index 
router.get("/", (req, res) => {
     
    /* res.send("Lista dei post",) */
    res.json(posts)
})
//Show
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id); // stringa
    const post = posts.find((post) => post.id === id);

    res.json(post);
    // res.send("Lista dei posti con ID: "+ req.params.id) 
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