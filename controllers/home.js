/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('index.html', {
    title: 'Homepage'
  });
};