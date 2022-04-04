const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
//const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//app.use(cookieParser());

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
app.post('/login', (req, res, next) => {
})

//create user
app.post('/signup', (req, res, next) => {
})

//get overall bloom ratings from the last week
app.get('/getoverallData', (req,res,next) => {
})

//get bloom ratings for specific park from last week
app.get('/getParkData/:location', (req, res, next) => {
})

//submit a comment
app.post('/submitReview', (req, res, next) => {
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