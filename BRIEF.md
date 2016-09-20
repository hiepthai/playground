# Briefing Test Project for Job Candidate

## Objective

Create a small, decoupled Web-Fontend, which displays content from a CMS via an API.

### Schema:

```
 - ----+      +====================+      +------------------+     +----- -
       |      ||                  ||      |                  |     |
       |      ||   Frontend-App   ||      |                  |     |
    W  |      ||                  ||      |                  |     |  C
    E  | <--> ||  - Navigation    || <--> |     REST-API     | <-- |  M
    B  |      ||  - Page-Content  ||      |                  |     |  S
       |      ||                  ||      |                  |     |
       |      ||                  ||      |                  |     |
 - ----+      +====================+      +------------------+     +----- -
```

### Pre-Requisites:

You will be given with access to a running Wordpress Installation. This Installation is built "headless", meaning
it would not output anything on it's own, but it provides an API to authenticate and access the content.

The Wordpress is a vanilla installation, along with the [WP-API Plugin](http://v2.wp-api.org/).

### Access data:

* Admin: http://playground.finaldream.de/wp-admin
* API-Endpoint: http://playground.finaldream.de/wp-json/wp/v2/

## Expectation:

### Technical Requirements:
* the application is implemented in node.js via the Express-framework (a recent node.js version can be used)
* Javascript should be written in ES6
* the preferred module for templating is [nunjucks](https://www.npmjs.com/package/nunjucks)
* the final result is provided as a git-repository
* steps to run the application should be as simple as:
  * `git clone`
  * `npm install && npm run start`
* the application serves to localhost
* there are no special requirements to the design, a simple UI based on Bootstrap or Foundation is totally fine.


### Behavior:

* The resulting website should:
  * display a navigation
  * highlight the current navigation-point
  * display the content for the requested page
  * the pages can be navigated with readable URLs (no IDs)
* The content is requested live via the REST-API from the CMS
