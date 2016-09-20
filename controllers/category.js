const request = require('request');
const async = require('async');

/**
 * GET /:pageSlug
 * Custom page view.
 */
exports.view = (req, res, next) => {
  /*const endpoint = process.env.REST_URL + 'categories/?slug=' + req.params.slug;

  request.get(endpoint, (err, request, body) => {
    // Error handle
    if(err) return next(err);

    const data =  JSON.parse(body);
    res.render('pages/category.html', {
      title: data[0].name.rendered,
      slug: req.params.slug,
      category: data[0]
    });
  })*/
  async.parallel({
    getCategory: (done) => {
      request.get(process.env.REST_URL + 'categories/?slug=' + req.params.slug, (err, request, body) => {
        done(err, JSON.parse(body));
      });
    },
    getPosts: (done) => {
      request.get(process.env.REST_URL + 'posts/?categories=' + req.params.cid, (err, request, body) => {
        done(err, JSON.parse(body));
      });
    }
  },
  (err, results) => {
    if (err) { return next(err); }
    res.render('pages/category.html', {
      title: results.getCategory[0].name,
      category: results.getCategory[0],
      posts: results.getPosts,
    });
  })
};