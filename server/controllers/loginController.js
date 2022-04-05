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

// loginController.verifyUser = (req, res, next) => {
//     const { password } = req.body
//     if (!res.locals.user.length || password !== res.locals.password) 
// }

module.exports = loginController