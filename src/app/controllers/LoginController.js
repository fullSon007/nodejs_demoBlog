class LoginController {

    // [Post] /login
    login(req, res) {
        console.log(req.body);
    }
}

module.exports = new LoginController;