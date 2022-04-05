const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const postsController = require('./controllers/postsController')
const loginController = require('./controllers/loginController')
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

// app.use('/', (req, res) => {
//     res.json('heyyyyy there http://localhost:3000!')
// })

// serve static files
app.use(express.static(path.resolve(__dirname, '../dist')));

if (process.env.NODE_ENV === 'production') {
    app.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, './src/index.html'));
    });
}

//check login credentials
app.post('/login', loginController.findUser, loginController.verifyUser, (req, res) => {
    res.redirect('/');
})

//create user
app.post('/signup', loginController.findUser, loginController.createUser, (req, res) => {
    res.redirect('/');
})

//get overallall bloom ratings from the last week
app.get('/getOverallData', postsController.getOverallData, (req, res) => {
    res.status(200).json(res.locals.average.round);
});

//get bloom ratings for specific park from last week
app.get('/getParkData/:location', postsController.getParkData, postsController.getParkPosts, (req, res) => {
    res.status(200).json({rating: res.locals.parkData.round, posts: res.locals.parkPosts});
})

//submit a comment
app.post('/submitReview', loginController.verifyLogin, postsController.submitReview, postsController.getParkData, postsController.getParkPosts, (req, res) => {
  res.status(200).json({rating: res.locals.parkData.round, posts: res.locals.parkPosts});
})

// catch-all route handler for requests made to unknown route
app.use((req, res) => res.status(404).send('Request sent to unknown page'));

//error handling (standard & global)
app.use((err, req, res, next) => {
    const defaultErr = {
        log: 'Express error handler caught unknown middleware error',
        status: 500,
        message: {err: 'An error occured'},
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.stats).json(errorObj.message);
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});
module.exports = app;