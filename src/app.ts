/// <reference path="../typings/index.d.ts" />

import * as express from 'express'
import * as path from 'path'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import * as proxy from 'express-http-proxy'

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
const blogProxy = proxy('localhost:4200', {
    forwardPath: function (req, res) {
      return require('url').parse(req.url).path;
    }
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/*', blogProxy)

app.listen(4000)
