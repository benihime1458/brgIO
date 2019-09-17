// May use in future for larger climbing database

const mongoose = require('mongoose');
let Climb = require('../models/climb.model');

mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const cave = (err, resClimb) => {
  if (err) {
    console.log('error: ', err);
  } else {
    Climb.find({ area: 'cave'}).exec((err, climbs) => {
      if (err) {
        console.log('error: ', error)
      } else {
        climbs.sort((a, b) => a.number - b.number);
        resClimb(null, climbs);
      }
    })
  }
}

const corridor = (err, resClimb) => {
  if (err) {
    console.log('error: ', err);
  } else {
    Climb.find({ area: 'corridor' }).exec((err, climbs) => {
      if (err) {
        console.log('error: ', error)
      } else {
        climbs.sort((a, b) => a.number - b.number);
        resClimb(null, climbs);
      }
    })
  }
}

const northeast = (err, resClimb) => {
  if (err) {
    console.log('error: ', err);
  } else {
    Climb.find({ area: 'north east' }).exec((err, climbs) => {
      if (err) {
        console.log('error: ', error)
      } else {
        climbs.sort((a, b) => a.number - b.number);
        resClimb(null, climbs);
      }
    })
  }
}

const slab = (err, resClimb) => {
  if (err) {
    console.log('error: ', err);
  } else {
    Climb.find({ area: 'slab' }).exec((err, climbs) => {
      if (err) {
        console.log('error: ', error)
      } else {
        climbs.sort((a, b) => a.number - b.number);
        resClimb(null, climbs);
      }
    })
  }
}

const southeast = (err, resClimb) => {
  if (err) {
    console.log('error: ', err);
  } else {
    Climb.find({ area: 'south east' }).exec((err, climbs) => {
      if (err) {
        console.log('error: ', error)
      } else {
        climbs.sort((a, b) => a.number - b.number);
        resClimb(null, climbs);
      }
    })
  }
}

const southwest = (err, resClimb) => {
  if (err) {
    console.log('error: ', err);
  } else {
    Climb.find({ area: 'south west' }).exec((err, climbs) => {
      if (err) {
        console.log('error: ', error)
      } else {
        climbs.sort((a, b) => a.number - b.number);
        resClimb(null, climbs);
      }
    })
  }
}

const toprope = (err, resClimb) => {
  if (err) {
    console.log('error: ', err);
  } else {
    Climb.find({ area: 'top rope' }).exec((err, climbs) => {
      if (err) {
        console.log('error: ', error)
      } else {
        climbs.sort((a, b) => a.number - b.number);
        resClimb(null, climbs);
      }
    })
  }
}

const westwall = (err, resClimb) => {
  if (err) {
    console.log('error: ', err);
  } else {
    Climb.find({ area: 'west wall' }).exec((err, climbs) => {
      if (err) {
        console.log('error: ', error)
      } else {
        climbs.sort((a, b) => a.number - b.number);
        resClimb(null, climbs);
      }
    })
  }
}

module.exports = {cave, corridor, slab, northeast, southeast, southwest, toprope, westwall};
