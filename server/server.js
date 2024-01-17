require("dotenv").config();
const workoutRoutes = require('./routes/workouts')
const express = require("express");

//express app
const app = express();

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use('/api/workouts', workoutRoutes)

//listening app
app.listen(process.env.PORT, () => {
  console.log("listening on port", process.env.PORT);
});
