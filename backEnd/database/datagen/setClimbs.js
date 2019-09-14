const mongoose = require('mongoose');
let Climb = require('../models/climb.model');

mongoose.connect('mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', () => console.log('error connecting to mongo'));
db.once('open', () => console.log('connected to mongo'));

const cave = [];
const corridor = [];
const northeast = [];
const slab = [];
const southeast = [];
const southwest = [];
const toprope = [];
const westwall = [];

const setCave = () => {
  for (let i = 176; i <= 195; i++) {
    let problem = {};
    problem.area = 'cave';
    problem.number = i;
    problem.dateSet = '08 13 2019';
  
    i === 176 ? (problem.color = 'green', problem.grade = 1) : null
    i === 178 ? (problem.color = 'yellow', problem.grade = 3) : null
    i === 179 ? (problem.color = 'purple', problem.grade = 3) : null
    i === 180 ? (problem.color = 'pink', problem.grade = 3) : null
    i === 181 ? (problem.color = 'red', problem.grade = 4) : null
    i === 182 ? (problem.color = 'black', problem.grade = 3) : null
    i === 183 ? (problem.color = 'orange', problem.grade = 5) : null
    i === 184 ? (problem.color = 'orange', problem.grade = 4) : null
    i === 185 ? (problem.color = 'pink', problem.grade = 6) : null
    i === 187 ? (problem.color = 'purple', problem.grade = 7) : null
    i === 188 ? (problem.color = 'yellow', problem.grade = 6) : null
    i === 189 ? (problem.color = 'blue', problem.grade = 7) : null
    i === 190 ? (problem.color = 'black', problem.grade = 8) : null
    i === 191 ? (problem.color = 'green', problem.grade = 6) : null
    i === 192 ? (problem.color = 'red', problem.grade = 8) : null
    i === 193 ? (problem.color = 'yellow', problem.grade = 8) : null
    i === 194 ? (problem.color = 'white', problem.grade = 8) : null
    i === 195 ? (problem.color = 'green', problem.grade = 10) : null
  
    problem.color && problem.grade ? cave.push(problem) : null
  }
  
  Climb.deleteMany({ area: 'cave' }, () => {
    console.log('removed cave problems from collection');
  });
  
  for (let i in cave) {
    const saveClimb = new Climb(cave[i]);
    saveClimb.save((error, caveProblem) =>
      error ? console.log('error saving ', error)
        : console.log('saved ', caveProblem))
  }
}

const setCorridor = () => {
  for (let i = 155; i <= 168; i++) {
    let problem = {};
    problem.area = 'corridor';
    problem.number = i;
    problem.dateSet = '08 06 2019';

    i === 155 ? (problem.color = 'red', problem.grade = 0) : null
    i === 156 ? (problem.color = 'purple', problem.grade = 8) : null
    i === 157 ? (problem.color = 'pink', problem.grade = 1) : null
    i === 158 ? (problem.color = 'orange', problem.grade = 1) : null
    i === 159 ? (problem.color = 'white', problem.grade = 2) : null
    i === 160 ? (problem.color = 'green', problem.grade = 5) : null
    i === 161 ? (problem.color = 'yellow', problem.grade = 6) : null
    i === 162 ? (problem.color = 'purple', problem.grade = 3) : null
    i === 163 ? (problem.color = 'purple', problem.grade = 0) : null
    i === 164 ? (problem.color = 'blue', problem.grade = 4) : null
    i === 165 ? (problem.color = 'pink', problem.grade = 4) : null
    i === 166 ? (problem.color = 'yellow', problem.grade = 7) : null
    i === 167 ? (problem.color = 'red', problem.grade = 5) : null
    i === 168 ? (problem.color = 'yellow', problem.grade = 2) : null

    problem.color && problem.grade ? corridor.push(problem) : null
  }

  Climb.deleteMany({ area: 'corridor' }, () => {
    console.log('removed corridor problems from collection');
  });

  for (let i in corridor) {
    const saveClimb = new Climb(corridor[i]);
    saveClimb.save((error, corridorProblem) =>
      error ? console.log('error saving ', error)
        : console.log('saved ', corridorProblem))
  }
}

const setNorthEast = () => {
  for (let i = 243; i <= 259; i++) {
    let problem = {};
    problem.area = 'north east';
    problem.number = i;
    problem.dateSet = '09 10 2019';

    i === 243 ? (problem.color = 'black', problem.grade = 1) : null
    i === 244 ? (problem.color = 'orange', problem.grade = 2) : null
    i === 245 ? (problem.color = 'green', problem.grade = 1) : null
    i === 246 ? (problem.color = 'blue', problem.grade = 3) : null
    i === 247 ? (problem.color = 'red', problem.grade = 3) : null
    i === 248 ? (problem.color = 'green', problem.grade = 2) : null
    i === 249 ? (problem.color = 'blue', problem.grade = 4) : null
    i === 250 ? (problem.color = 'pink', problem.grade = 4) : null
    i === 251 ? (problem.color = 'pink', problem.grade = 5) : null
    i === 252 ? (problem.color = 'orange', problem.grade = 5) : null
    i === 253 ? (problem.color = 'white', problem.grade = 6) : null
    i === 254 ? (problem.color = 'purple', problem.grade = 6) : null
    i === 255 ? (problem.color = 'white', problem.grade = 7) : null
    i === 256 ? (problem.color = 'orange', problem.grade = 8) : null
    i === 257 ? (problem.color = 'purple', problem.grade = 8) : null
    i === 258 ? (problem.color = 'yellow', problem.grade = 9) : null
    i === 259 ? (problem.color = 'yellow', problem.grade = 0) : null

    northeast.push(problem)
  }

  Climb.deleteMany({ area: 'north east' }, () => {
    console.log('removed north east problems from collection');
  });

  for (let i in northeast) {
    const saveClimb = new Climb(northeast[i]);
    saveClimb.save((error, northeastProblem) =>
      error ? console.log('error saving ', error)
        : console.log('saved ', northeastProblem))
  }
} 

const setSlab = () => {
  for (let i = 137; i <= 154; i++) {
    let problem = {};
    problem.area = 'slab';
    problem.number = i;
    problem.dateSet = '07 30 2019';

    i === 137 ? (problem.color = 'green', problem.grade = 0) : null
    i === 138 ? (problem.color = 'yellow', problem.grade = 7) : null
    i === 139 ? (problem.color = 'blue', problem.grade = 4) : null
    i === 140 ? (problem.color = 'purple', problem.grade = 1) : null
    i === 141 ? (problem.color = 'blue', problem.grade = 1) : null
    i === 142 ? (problem.color = 'red', problem.grade = 4) : null
    i === 143 ? (problem.color = 'pink', problem.grade = 3) : null
    i === 144 ? (problem.color = 'orange', problem.grade = 3) : null
    i === 145 ? (problem.color = 'red', problem.grade = 3) : null
    i === 146 ? (problem.color = 'green', problem.grade = 5) : null
    i === 147 ? (problem.color = 'black', problem.grade = 5) : null
    i === 148 ? (problem.color = 'white', problem.grade = 6) : null
    i === 149 ? (problem.color = 'orange', problem.grade = 5) : null
    i === 150 ? (problem.color = 'purple', problem.grade = 6) : null
    i === 151 ? (problem.color = 'yellow', problem.grade = 0) : null
    i === 152 ? (problem.color = 'black', problem.grade = 2) : null

    problem.color && problem.grade ? slab.push(problem) : null
  }

  Climb.deleteMany({ area: 'slab' }, () => {
    console.log('removed slab problems from collection');
  });

  for (let i in slab) {
    const saveClimb = new Climb(slab[i]);
    saveClimb.save((error, slabProblem) =>
      error ? console.log('error saving ', error)
        : console.log('saved ', slabProblem))
  }
} 

const setSouthEast = () => {
  for (let i = 219; i <= 227; i++) {
    let problem = {};
    problem.area = 'south east';
    problem.number = i;
    problem.dateSet = '08 27 2019';

    i === 219 ? (problem.color = 'green', problem.grade = 5) : null
    i === 220 ? (problem.color = 'blue', problem.grade = 5) : null
    i === 221 ? (problem.color = 'black', problem.grade = 6) : null
    i === 222 ? (problem.color = 'yellow', problem.grade = 5) : null
    i === 223 ? (problem.color = 'orange', problem.grade = 7) : null
    i === 224 ? (problem.color = 'yellow', problem.grade = 8) : null
    i === 225 ? (problem.color = 'red', problem.grade = 8) : null
    i === 226 ? (problem.color = 'white', problem.grade = 9) : null
    i === 227 ? (problem.color = 'purple', problem.grade = 9) : null

    problem.color && problem.grade ? southeast.push(problem) : null
  }

  for (let i = 229; i <= 238; i++) {
    let problem = {};
    problem.area = 'south east';
    problem.number = i;
    problem.dateSet = '09 03 2019';

    i === 229 ? (problem.color = 'red', problem.grade = 0) : null
    i === 232 ? (problem.color = 'blue', problem.grade = 2) : null
    i === 235 ? (problem.color = 'yellow', problem.grade = 4) : null
    i === 238 ? (problem.color = 'orange', problem.grade = 5) : null

    problem.color && problem.grade ? southeast.push(problem) : null
  }

  Climb.deleteMany({ area: 'south east' }, () => {
    console.log('removed south east problems from collection');
  });

  for (let i in southeast) {
    const saveClimb = new Climb(southeast[i]);
    saveClimb.save((error, southeastProblem) =>
      error ? console.log('error saving ', error)
        : console.log('saved ', southeastProblem))
  }
}

const setSouthWest = () => {
  for (let i = 213; i <= 218; i++) {
    let problem = {};
    problem.area = 'south west';
    problem.number = i;
    problem.wcw = false;
    problem.dateSet = '08 27 2019';

    i === 213 ? (problem.color = 'pink', problem.grade = 2) : null
    i === 214 ? (problem.color = 'purple', problem.grade = 3) : null
    i === 215 ? (problem.color = 'yellow', problem.grade = 0) : null
    i === 216 ? (problem.color = 'white', problem.grade = 1) : null
    i === 217 ? (problem.color = 'green', problem.grade = 3) : null
    i === 218 ? (problem.color = 'red', problem.grade = 5) : null

    problem.color && problem.grade ? southwest.push(problem) : null
  }

  for (let i = 228; i <= 242; i++) {
    let problem = {};
    problem.area = 'south west';
    problem.number = i;
    problem.dateSet = '09 03 2019';

    i === 228 ? (problem.color = 'orange', problem.grade = 0) : null
    i === 230 ? (problem.color = 'purple', problem.grade = 1) : null
    i === 231 ? (problem.color = 'purple', problem.grade = 2) : null
    i === 233 ? (problem.color = 'pink', problem.grade = 3) : null
    i === 234 ? (problem.color = 'yellow', problem.grade = 5) : null
    i === 236 ? (problem.color = 'blue', problem.grade = 4) : null
    i === 237 ? (problem.color = 'white', problem.grade = 6) : null
    i === 239 ? (problem.color = 'purple', problem.grade = 7) : null
    i === 240 ? (problem.color = 'green', problem.grade = 9) : null
    i === 241 ? (problem.color = 'yellow', problem.grade = 8) : null
    i === 242 ? (problem.color = 'black', problem.grade = 8) : null

    problem.color && problem.grade ? southwest.push(problem) : null
  }

  Climb.deleteMany({ area: 'south west' }, () => {
    console.log('removed south west problems from collection');
  });

  for (let i in southwest) {
    const saveClimb = new Climb(southwest[i]);
    saveClimb.save((error, southwestProblem) =>
      error ? console.log('error saving ', error)
        : console.log('saved ', southwestProblem))
  }
} 

const setTopRope = () => {
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

  Climb.deleteMany({ area: 'top rope' }, () => {
    console.log('removed top rope problems from collection');
  });

  for (let i in toprope) {
    const saveClimb = new Climb(toprope[i]);
    saveClimb.save((error, topropeProblem) =>
      error ? console.log('error saving ', error)
        : console.log('saved ', topropeProblem))
  }
} 

const setWestWall = () => {
  for (let i = 196; i <= 212; i++) {
    let problem = {};
    problem.area = 'west wall';
    problem.number = i;
    problem.dateSet = '08 17 2019';

    i === 196 ? (problem.color = 'white', problem.grade = 5) : null
    i === 197 ? (problem.color = 'pink', problem.grade = 4) : null
    i === 198 ? (problem.color = 'blue', problem.grade = 4) : null
    i === 199 ? (problem.color = 'orange', problem.grade = 4) : null
    i === 200 ? (problem.color = 'yellow', problem.grade = 7) : null
    i === 201 ? (problem.color = 'green', problem.grade = 3) : null
    i === 202 ? (problem.color = 'purple', problem.grade = 4) : null
    i === 203 ? (problem.color = 'red', problem.grade = 6) : null
    i === 204 ? (problem.color = 'pink', problem.grade = 5) : null
    i === 205 ? (problem.color = 'yellow', problem.grade = 5) : null
    i === 206 ? (problem.color = 'black', problem.grade = 1) : null
    i === 207 ? (problem.color = 'black', problem.grade = 1) : null
    i === 208 ? (problem.color = 'purple', problem.grade = 8) : null
    i === 209 ? (problem.color = 'white', problem.grade = 5) : null
    i === 210 ? (problem.color = 'blue', problem.grade = 3) : null
    i === 211 ? (problem.color = 'green', problem.grade = 2) : null
    i === 212 ? (problem.color = 'yellow', problem.grade = 5) : null

    westwall.push(problem)
  }

  Climb.deleteMany({ area: 'west wall' }, () => {
    console.log('removed west wall problems from collection');
  });

  for (let i in westwall) {
    const saveClimb = new Climb(westwall[i]);
    saveClimb.save((error, westwall) =>
      error ? console.log('error saving ', error)
        : console.log('saved ', westwall))
  }
} 

// setCave();
// setCorridor();
// setNorthEast();
// setSlab(); 
// setSouthEast();
// setSouthWest();
// setTopRope();
// setWestWall();

const getClimb = (err, resClimb) => {
  err ? console.log('error: ', err) : 
  Climb.find({area: 'cave'}).exec((err, climbs) => err ? console.log('error: ', err) : (climbs.sort((a, b) => a.number - b.number, resClimb(null, climbs))));
} 

module.exports.getClimb = getClimb;
