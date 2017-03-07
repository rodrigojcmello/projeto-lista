// Express ---------------------------------------------------------------------

const app = require('express')();

// Webpack ---------------------------------------------------------------------

const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');
const compiler = require('webpack')(webpackConfig);

// -----------------------------------------------------------------------------

app.use(webpackMiddleware(compiler));
app.get('*');
app.listen(3000);
