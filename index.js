const express = require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

app.engine('handlebars', engine());
app.set('view engine', 'handlebars')

app.use(
  express.urlencoded({
      extended: true
  })
)
app.use(express.json())

//  Session Middleware

app.use(
  session({
    name: "session",
    secret: "noss_secret",
    resave: false,
    saveUninitialized: false,
    store: new FileStore({
      logFn: function() {},
      path: require('path').join(require('os').tmpdir(), 'sessions'),
    }),
  }),
)


conn
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))