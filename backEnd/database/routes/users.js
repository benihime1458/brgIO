const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
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