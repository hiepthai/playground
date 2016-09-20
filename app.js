/**
 * Module dependencies.
 */
const express = require('express');
const nunjucks  = require('nunjucks');
const path = require('path');

/**
 * Create Express server.
 */
const app = express();

/**
 * App configuration
 */
app.set('public', path.join(__dirname, 'public'));
app.set('port', 3000);

/**
 * Static files
 */
app.use(express.static(app.get('public'), { maxAge: 31557600000 }));

/**
 * Template Engine
 */
nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

/**
 * Controllers
 */
const homeController = require('./controllers/home');

/**
 * Routes
 */
app.get('/', homeController.index);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d', app.get('port'));
});