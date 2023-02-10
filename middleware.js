//Document used to check whatever if the user is logged or not. If not, it will be redirected to home page.

exports.requireLogin = (req, res, next) => {
    if(req.session && req.session.user) {
        return next();
    }
    else {
        return res.redirect('/login');
    }
}