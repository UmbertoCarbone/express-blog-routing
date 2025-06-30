const express = require("express")
const app = express()
const port = 3021

const postsRouter = require("./router/posts")

app.use(express.static("public"))


app.use("/posts",postsRouter)

/* app.get("/", (req, res) => {
    res.send("Server del mio blog!")
}) */


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

/////////

