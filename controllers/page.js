const request = require('request');

/**
 * GET /:pageSlug
 * Custom page view.
 */
exports.view = (req, res, next) => {
  const endpoint = process.env.REST_URL + 'pages/?slug=' + req.params.slug;

  request.get(endpoint, (err, request, body) => {
    // Error handle
    if(err) return next(err);

    const data =  JSON.parse(body);
    res.render('pages/page.html', {
      title: data[0].title.rendered,
      slug: req.params.slug,
      page: data[0]
    });
  })
};