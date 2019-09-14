const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose'); // connect to db
const app = express();
const db = require('../database/datagen/setClimbs.js')

// env variables
require('dotenv').config();
const uri = 'mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority';
const port = process.env.PORT || 5635;

//cors
app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  console.log('from server app.use ', req.method, req.path);
  next();
});

// server static assets
app.use(express.static(path.join(__dirname, '../../frontEnd/client/dist')));

// mongoose
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected!')
})

// routers
const exercisesRouter = require('../database/routes/exercises');
const usersRouter = require('../database/routes/users');
const climbsRouter = require('../database/routes/climbs');

// middleware from routers
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/climbs', climbsRouter);

app.get('/climb/cave', (req, res) => {
  db.getClimb(null, (err, data) => {
    err ? console.log(err) : res.send(data);
  })
})

// server connection
app.listen(port, () => console.log(`Listening on port ${port}!`));

