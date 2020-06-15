const router = require('express').Router();
let User = require('../models/user.model');
let Problem = require('../models/problem.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:username/').get((req, res) => {
  User.findOne({username: req.params.username})
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:username/problemLog').get((req, res) => {
  User.findOne({ username: req.params.username })
    .then(user => res.json(user.problemLog))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:username/problemLog/:area').get((req, res) => {
  User.findOne({username: req.params.username})
  .then(user => res.json(user.problemLog.filter(problem => problem.area === req.params.area)))
  .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:username/problemLog/:area/update').post((req, res) => {
  User.findOne({username: req.params.username})
    .then(user => {
      Problem.find({area: req.params.area})
      .then(problem => {
        user.problemLog = [...user.problemLog.filter(problems => problems.area != req.params.area), ...problem]
        // res.json(user.problemLog)
        user.save()
          .then(() => res.json(`${req.params.area} updated`))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const problemLog = req.body.problemLog;

  const newUser = new User({ username, email, problemLog });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/savelog').post((req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const problemLog = req.body.problemLog;

  User.findOne({username: `${username}`, email: `${email}`})
    .then(user => {
      user.problemLog = problemLog
      
      user.save()
        .then(() => res.json('Log updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;