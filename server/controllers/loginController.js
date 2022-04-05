const path = require('path');
const { resourceLimits } = require('worker_threads');
const db = require('../models/db')

const loginController = {};

//verify username is there
//verify username matches password
    //if username and password do not match, send a message?
    //if there is a matching username and password , redirect page to dashboard and send a cookie

loginController.findUser = (req, res, next) => {
    const { username } = req.body;
    const query = `SELECT * FROM users WHERE username = $1`
    const values = [username]
    db.query(query, values)
      .then((response) => {
          res.locals.user = response.rows[0]
          return next();
      })
      .catch(err => {
        return next({
            log: `loginController.findUser: ERROR: ${err}`,
            message: { err: 'loginController.findUser: ERROR: Check server log for details'},
          });
      })
}

loginController.verifyUser = (req, res, next) => {
    const { username, password } = req.body
    if (!res.locals.user || password !== res.locals.user.password) res.send('Username or password invalid. Try again or sign up.')
    else {
        res.cookie('signin', username), {httpOnly: true}
        return next()
    }
}

loginController.createUser = (req, res, next) => {
    if (res.locals.user) res.send('Please try a different username.');
    else {
      const { username, password } = req.body;
      const query = 'INSERT INTO users (username, password) VALUES ($1, $2)';
      const values = [ username, password ];
      db.query(query, values)
        .then(response => {
          res.cookie('signin', username), {httpOnly: true};
          return next();
        })
        .catch(err => {
            return next({
              log: `loginController.createUser: ERROR: ${err}`,
              message: { err: 'loginController.createUser: ERROR: Check server log for details'}
            })
        })
    }
}

loginController.verifyLogin = (req, res, next) => {
    if (req.cookies && req.cookies.signin) return next()
    else res.send('user not logged in')
}

module.exports = loginController