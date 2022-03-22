const express = require("express");
const mongoose = require("mongoose");
//const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

//routes
//const userRoutes = require('./src/routes/user');
const divisionRoutes = require('./src/routes/division');
const sectionRoutes = require('./src/routes/section');
const plantingRoutes = require('./src/routes/planting');
const fertilizingRoutes = require('./src/routes/fertilizing');
const pruningRoutes = require('./src/routes/pruning');
const pluckingRoutes = require('./src/routes/plucking');
const reservePlantRoutes = require('./src/routes/reservePlant');
const reserveFertilizerRoutes = require('./src/routes/reserveFertilizer');
const reportIncidenceRoutes = require('./src/routes/reportIncidence');



require("dotenv").config();

const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(express.json());
//app.use('/api', userRoutes);
app.use('/api',divisionRoutes);
app.use('/api',sectionRoutes);
app.use('/api',plantingRoutes);
app.use('/api',fertilizingRoutes);
app.use('/api',pruningRoutes);
app.use('/api',pluckingRoutes);
app.use('/api',reservePlantRoutes);
app.use('/api',reserveFertilizerRoutes);
app.use('/api',reportIncidenceRoutes);

const URL = process.env.MONGODB_URL;

// mongoose.connect(URL,{
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedTopology:true,
//     useFindAndModify: false
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//     console.log("Mongodb Connection success!");   
// })

mongoose.connect( URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true , useFindAndModify: false})
     .then(() => console.log( 'Database Connected' ))
     .catch(err => console.log( err ));

// const divisionRouter = require("./routes/division.js");
// app.use("/division",divisionRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})