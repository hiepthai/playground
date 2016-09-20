const request = require('request');
const _ = require('underscore');

/**
 * getNavs
 */
exports.getNavs = (callback) => {
  const endpoint = process.env.REST_URL + 'pages/';

  request.get(endpoint, (err, request, body) => {
    if(err || body == undefined)
      callback([
        {slug: 'impressum' , title: 'Impressum' },
        {slug: 'imprint', title: 'Imprint'},
        {slug: 'about-us' , title: 'About Us' },
      ]);

    callback(
      _.map(JSON.parse(body), (page) => {
        return { title: page.title.rendered, slug: page.slug }
      })
    );
  })
};