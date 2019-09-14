const mongoose = require('mongoose');
let Climb = require('../models/climb.model');

mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const toprope = [];

for (let i = 260; i <= 261; i++) {
  let problem = {};
  problem.area = 'top rope';
  problem.number = i;
  problem.wcw = true;
  problem.dateSet = '09 10 2019';
  
  i === 260 ? (problem.color = 'purple') : null 
  i === 261 ? (problem.color = 'white') : null 

  toprope.push(problem)
}

// Remove collection in database if it already exists
Climb.deleteMany({area: 'top rope'}, () => {
  console.log('removed from collection');
});

for (let i in toprope) {
  const saveClimb = new Climb(toprope[i]);
  saveClimb.save((error, topropeProblem) => 
    error ? console.log('error saving ', error) 
    : console.log('saved ', topropeProblem))
}


