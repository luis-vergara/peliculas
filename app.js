'use strict'

var express = require('express'),
    path = require('path'),
    morgan = require('morgan'),
    restFull = require('express-method-override')('_method'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    jade = require('jade'),
    routes = require('./routes/movie-router'),
    faviconURL = `${__dirname}/public/img/nodejs.png`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    app = express()

app
    .set('views',viewDir)
    .set('view engine','jade')
    .set('port',port)

    .use(favicon(faviconURL))
    .use(bodyParser.json())
    .use( bodyParser.urlencoded({extended:false}))
    .use(morgan('dev'))
    .use(restFull)
    .use(publicDir)
    .use(routes)

module.exports = app
