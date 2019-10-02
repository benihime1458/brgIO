const router = require('express').Router();
let Problem = require('../models/problem.model');

router.route('/').get((req, res) => {
  Problem.find()
    .then(problems => res.json(problems))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const number = Number(req.body.number);
  const area = req.body.area;
  const grade = Number(req.body.grade);
  const color = req.body.color;
  const dateSet = new Date(req.body.dateSet);
  const attempts = Number(req.body.attempts);
  const sends = Number(req.body.sends);
  const flashed = req.body.flashed;
  const project = req.body.project;
  const notes = '';

  const newProblem = new Problem({
    number,
    area,
    grade,
    color,
    dateSet,
    attempts,
    sends,
    flashed,
    project,
    notes,
  });

  newProblem.save()
    .then(() => res.json('Problem added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').get((req, res) => {
//   Problem.findById(req.params.id)
//     .then(problem => res.json(problem))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/:area').get((req, res) => {
  Problem.find({area: req.params.area.toLowerCase()})
    .then(problem => res.json(problem))
    .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').delete((req, res) => {
//   Problem.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Problem deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });

router.route('/update/:id').post((req, res) => {
  Problem.findById(req.params.id)
    .then(problem => {
      problem.number = Number(req.body.number);
      problem.area = req.body.area;
      problem.grade = Number(req.body.grade);
      problem.color = req.body.color;
      problem.dateSet = new Date(req.body.dateSet);

      problem.save()
        .then(() => res.json('Problem updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;