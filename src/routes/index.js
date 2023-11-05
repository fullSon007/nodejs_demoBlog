const newsRouter = require('./news');
const sitesRouter = require('./sites');
const loginRouter = require('./login');
const logoutRouter = require('./logout');
const registerRouter = require('./register');
const {requireSignin, isAdmin} = require('../app/midlewares/auth')

function route(app) {

  app.use('/logout', logoutRouter);

  app.use('/login', loginRouter );

  app.use('/register', registerRouter);

  app.use('/news', newsRouter);
  
  app.use('/', sitesRouter);
    // app.get('/', (req, res) => {
    //       res.render('home');
    //     })
      
  app.get('/admin',requireSignin, isAdmin, (req, res) => {
        res.json({message: "You got access to admin secret page"})
  })

    
      
    // app.get('/search', (req, res) => {
    //   res.render('search');
    // })
      
      
}

module.exports = route;