const async = require('async');
const request = require('request');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  async.parallel({
    getCategories: (done) => {
      request.get(process.env.REST_URL + 'categories/', (err, request, body) => {
        done(err, JSON.parse(body));
      });
    },
    getLatestPost: (done) => {
      request.get(process.env.REST_URL + 'posts/', (err, request, body) => {
        done(err, JSON.parse(body));
      });
    }
  },
  (err, results) => {
    if (err) { return next(err); }
    res.render('pages/home.html', {
      title: 'Homepage',
      categories: results.getCategories,
      latestPost: results.getLatestPost,
    });
  })
};