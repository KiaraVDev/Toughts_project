const express = require('express')
const { engine } = require('express-handlebars')
const session = require('express-session')
const FileStore = require('session-file-store')(session)
const flash = require('express-flash')

const app = express()

const conn = require('./db/conn')

// Models

const Tought = require('./models/Tought')
const User = require('./models/User')

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

    // Esse cookie faz com que expire o login em 24h

    cookie: {
      secure: false,
      maxAge: 360000,
      expires: new Date(Date.now() + 360000),
      httpOnly: true
    }
  }),
)

// Flash messages
app.use(flash())

// Public path
app.use(express.static('public'))

// Set session to res

app.use((req, res, next) => {
  if(req.session.userid){
    res.locals.session = req.session
  }

  next()
})

conn
  // .sync({ force: true})
  .sync()
  .then(() => {
    app.listen(3000)
  })
  .catch((err) => console.log(err))