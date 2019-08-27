const express = require('express');
const path = require('path');
const OktaJwtVerifier = require('@okta/jwt-verifier'); //okta
const cors = require('cors');
const mongoose = require('mongoose'); // connect to db
const app = express();

// env variables
require('dotenv').config();

const uri = 'mongodb+srv://benihime1458:benihime1458@exercises-tf92l.azure.mongodb.net/test?retryWrites=true&w=majority';
const port = process.env.PORT || 5635;

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-743134.okta.com/oauth2/default',
  clientId: '0oa17exa9n7RgEs8A357',
  assertClaims: {
    aud: 'api://default',
  },
});

function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];
  const expectedAudience = 'api://default';

  return oktaJwtVerifier.verifyAccessToken(accessToken, expectedAudience)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch((err) => {
      res.status(401).send(err.message);
    });
}

//cors
app.use(cors());

// okta
/**
 * An example route that requires a valid access token for authentication, it
 * will echo the contents of the access token if the middleware successfully
 * validated the token.
 */
app.get('/secure', authenticationRequired, (req, res) => {
  res.json(req.jwt);
});

/**
 * Another example route that requires a valid access token for authentication, and
 * print some messages for the user if they are authenticated
 */
app.get('/api/messages', authenticationRequired, (req, res) => {
  res.json([{
    message: 'Hello, word!'
  }]);
});

app.use(express.json());

app.use((req, res, next) => {
  console.log('from server app.use ', req.method, req.path);
  next();
});

// server static assets
app.use(express.static(path.join(__dirname, '../../frontEnd/client/dist')));

// mongoose
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connected!')
})

// routers
const exercisesRouter = require('../database/routes/exercises');
const usersRouter = require('../database/routes/users');

// middleware from routers
app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

// server connection
app.listen(port, () => console.log(`Listening on port ${port}!`));

