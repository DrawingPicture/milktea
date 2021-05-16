var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs =require('ejs');
var session = require('express-session');

var mainRouter = require('./routes/main');
var tmRouter = require('./routes/tm');
var twoRouter = require('./routes/two');
var threeRouter = require('./routes/three');
var dlRouter = require('./routes/dl');
var zcRouter = require('./routes/zc');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:'123',
  cookie:{maxAge:8000000}
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRouter);
app.use('/tm', tmRouter);
app.use('/two', twoRouter);
app.use('/three',threeRouter);
app.use('/dl',dlRouter);
app.use('/zc',zcRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err);
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
