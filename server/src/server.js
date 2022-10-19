const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.disable('x-powered-by');

// Add middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Tell express to use your routers here
const userRouter = require('./routes/users');
const authRouter = require('./routes/auth');

app.use('/users', userRouter);
app.use('/', userRouter);
app.use('/', authRouter) // login


module.exports = app
