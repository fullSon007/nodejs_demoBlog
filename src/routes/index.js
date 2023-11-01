const newsRouter = require('./news');
const sitesRouter = require('./sites');

function route(app) {

  app.use('/news', newsRouter);
  
  app.use('/', sitesRouter);
    // app.get('/', (req, res) => {
    //       res.render('home');
    //     })
      
    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   })

    
      
    // app.get('/search', (req, res) => {
    //   res.render('search');
    // })
      
      
}

module.exports = route;