const express = require('express');
const app = express();
const routers = require('./routes/router.bitmex');
const cors = require('cors');

app.set('PORT', process.env.PORT || 2000);

app.use(express.json());


//configure cors all user requests
app.use(cors('*'));



app.use("/api/v1", routers);

const port = app.get("PORT");

app.listen(port, ()=>{
    console.log(`Server Available at: http//:localhost:${port}/api/v1`)
})