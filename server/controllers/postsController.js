const path = require('path');
const db = require('../models/db')
// const { resourceLimits } = require('worker_threads');

const postsController = {};

//get all posts
postsController.getOverallData = (req, res, next) => {
  const query = 'SELECT ROUND(AVG(rating), 2) FROM posts';
  db.query(query)
    .then(response => {
      res.locals.average = response.rows[0];
      return next();
    })
    .catch(err => {
      return next({
        log: `postsController.getOverallData: ERROR: ${err}`,
        message: { err: 'postsController.getOverallData: ERROR: Check server log for details'},
      });
    });
};

//get specific park rating
postsController.getParkData = (req, res, next) => {
    const location = res.locals.location ? res.locals.location : req.params.location
    const query = 'SELECT ROUND(AVG(rating), 2) FROM posts WHERE location = $1'
    const values = [location]
    db.query(query, values)
      .then((response) => {
          res.locals.parkData = response.rows[0]
          console.log('PARK DATA:', res.locals.parkData);
          return next ();
      })
      .catch((err) => {
          return next ({log: `postController.getParkData: ERROR: ${err}`,
          message: {
              err: `postsController.getParkData: ERROR: Check server logs for details`
          }
      })
    })
}

//get all posts from specific park
postsController.getParkPosts = (req, res, next) => {
    const location = res.locals.location ? res.locals.location : req.params.location
    const query = 'SELECT * FROM posts WHERE location = $1'
    const values = [location]
    db.query(query, values)
    .then((response) => {
        res.locals.parkPosts = response.rows
        console.log('PARK POSTS:', res.locals.parkPosts);
        return next ();
    })
    .catch((err) => {
        return next ({log: `postController.getParkPosts: ERROR: ${err}`,
        message: {
            err: `postsController.getParkPosts: ERROR: Check server logs for details`
        }
    })
  })
}

postsController.submitReview = (req, res, next) => {
  const { username, location, rating, review, date } = req.body;
  const query = 'INSERT INTO posts (user_id, location, rating, review, date) VALUES ((SELECT user_id FROM users WHERE username = $1), $2, $3, $4, $5)';
  const values = [ username, location, rating, review, date ];
  db.query(query, values)
    .then(response => {
      res.locals.location = location;
      return next();
    })
    .catch(err => {
      return next({
        log: `postsController.submitReview: ERROR: ${err}`,
        message: { err: 'postsController.submitReview: ERROR: Check error log for details'},
      });
    });
}

module.exports = postsController;