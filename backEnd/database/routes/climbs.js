const router = require('express').Router();
let Climb = require('../models/climb.model');

router.route('/').get((req, res) => {
  Climb.find()
    .then(climbs => res.json(climbs))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const number = Number(req.body.number);
  const area = req.body.area;
  const grade = Number(req.body.grade);
  const wcw = req.body.wcw;
  const color = req.body.color;
  const dateSet = Date.parse(req.body.dateSet);

  const newClimb = new Climb({
    number,
    area,
    grade,
    wcw,
    color,
    dateSet,
  });

  newClimb.save()
    .then(() => res.json('Climb added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Climb.findById(req.params.id)
    .then(climb => res.json(climb))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Climb.findByIdAndDelete(req.params.id)
    .then(() => res.json('Climb deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Climb.findById(req.params.id)
    .then(climb => {
      climb.number = Number(req.body.number);
      climb.area = req.body.area;
      climb.grade = Number(req.body.grade);
      climb.wcw = req.body.wcw;
      climb.color = req.body.color;
      climb.dateSet = Date.parse(req.body.dateSet);

      climb.save()
        .then(() => res.json('Climb updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;