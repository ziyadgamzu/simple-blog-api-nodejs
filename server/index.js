const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/router');

const app = express()
const port = 3003


mongoose.connect('mongodb://localhost:27017/blog', {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("mongoDB connected!")
}).catch((err) => {
    console.log(err)
})


app.use(cors());
app.use(express.urlencoded({extended : true}))



app.use(router);
app.listen(port, () => console.log(`app listening on port ${port}!`))