/**
 * Module dependencies.
 */
const express = require('express');
const nunjucks  = require('nunjucks');
const path = require('path');
const dotenv = require('dotenv');

/**
 * Other modules
 */

const helper = require('./helpers');

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });

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
const env = nunjucks.configure('views', {
  autoescape: true,
  express   : app
});

/*navs = [
  {slug: 'impressum' , title: 'Impressum' },
  {slug: 'about-us' , title: 'About Us' },
]

env.addGlobal('navs', navs);*/

helper.getNavs(function(navs) {
  env.addGlobal('navs', navs);
})


/**
 * Controllers
 */
const homeController = require('./controllers/home');
const pageController = require('./controllers/page');
const categoryController = require('./controllers/category');
const postController = require('./controllers/post');

/**
 * Routes
 */
app.get('/', homeController.index)
app.get('/:slug', pageController.view);
app.get('/category/:slug-:cid', categoryController.view);
app.get('/post/:slug', postController.view);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d', app.get('port'));
});