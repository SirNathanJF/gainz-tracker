const router = require('express').Router();
const { Workout } = require('../models');

// Gets all previous workouts
router.get('/api/workouts', async (req, res) => {
    const workouts = await Workout.find();
    console.log(workouts);
    try {
      res.json(workouts);
    } catch (error) {
      res.status(400).json(error);
    }
  });

// Add user's new workout
router.post('/api/workouts', async ({ body }, res) => {
  const newWorkout = await Workout.create(body);
  try {
    res.status(200).json(newWorkout);
  } catch (error) {
    res.status(400).json(error);
  }
});

// route for updating workout exercises by id
router.put('/api/workouts/:id', async (req, res) => {
  const updateWorkout = await Workout.findByIdAndUpdate(req.params.id, {
    $push: {
      exercises: req.body,
    },
  });
  try {
    res.status(200).json(updateWorkout);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.get('/api/workouts/range', (req, res) => {
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.status(400).json(err)
    })
})

module.exports = router;
