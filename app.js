var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var resourceRouter = require('./routes/resource');
var usersRouter = require('./routes/users');
var gemsRouter = require('./routes/gems');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var gems = require("./models/gems");
var app = express();

async function recreateDB(){
  // Delete everything
await gems.deleteMany();
  let instance1 = new
  gems({gems_color:"brown",gems_breed:"German Shepherd",gems_price:2000});
  let instance2 = new
  gems({gems_color:"white",gems_breed:"Labrador Retriever",gems_price:1500});
  let instance3 = new
  gems({gems_color:"black",gems_breed:"Poodle",gems_price:4080});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)});
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)});
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)});
  }
  let reseed = true;
  if (reseed) { recreateDB();
  }


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/gems', gemsRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
