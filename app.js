const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Login',(req, res) => {
    res.render("login")
})

app.get('/Login/expense-tracker',(req, res) => {
    res.render("expense-tracker")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})