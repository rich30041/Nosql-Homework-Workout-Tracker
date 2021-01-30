const db = require("../models");

module.exports = function(app) {
    // Pull up info for the workouts page
    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbwork => {
            res.json(dbwork);
        })
        .catch(err => {
            res.status(400).json(err);
        });
    })
    // Pull up info for the range page
    app.get("/api/workouts/range", ({}, res) => {
      db.Workout.find({}).then((dbwork) => {
        res.json(dbwork);
      }).catch(err => {
        res.status(400).json(err);
      });
    });
    // Submit new completed workouts
    app.post("/api/workouts/", (req, res) => {
        db.Workout.create(req.body).then((dbwork) => {
          res.json(dbwork);
        }).catch(err => {
            res.status(400).json(err);
          });
      });
      // Update workouts by _id value and update the exercsise body
      app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(
          { _id: req.params.id }, { exercises: req.body }
        ).then((dbwork) => {
          res.json(dbwork);
        }).catch(err => {
          res.status(400).json(err);
        });
    });
};