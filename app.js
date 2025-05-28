const express = require('express');
const app = express();
const port = 3000;
const blogRouter = require('./routers/blog')

app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello")
});

app.use("/posts", blogRouter)


app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`)
});