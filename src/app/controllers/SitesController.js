
const blogPost = require('../models/Blog');

class SitesController {

    // [Get] /
    frontface(req, res, next) {
        res.render('frontface');
    
    }

    // [Get] /
    home(req, res, next) {
         res.render('home');

        // blogPost.find({}) 
        //     .then(blogposts => res.json(blogposts))
        //     .catch(next)
    }


    // [Get] /search
    search(req, res) {
        res.render('search');
    }

}



module.exports = new SitesController;