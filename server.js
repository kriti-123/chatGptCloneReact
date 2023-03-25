const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const authRoutes = require('./routes/authRoute');
// const openaiRoutes = require('./routes/openaiRoute');
const errorHandler = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();
connectDb();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
const port = 7000;
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", require("./routes/openaiRoute"));
app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})