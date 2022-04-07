const express = require("express")
const app = express()
//import
const indexRouter = require("./routes/index.router")
const usersRouter = require("./routes/users.router")

app.use("/", indexRouter)
app.use("/users", usersRouter)


app.listen(4000, ()=>{
    console.log("🚀 Server up and running")
})
