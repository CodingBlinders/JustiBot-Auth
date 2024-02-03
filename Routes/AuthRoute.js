const { Signup, Login } = require('../Controllers/AuthController')
const { userVerification} = require('../Middleware/AuthMiddleware')

const router = require('express').Router()
const passport = require('passport');

router.post('/signup', Signup);
router.post('/login', Login);
router.post('/', userVerification);

// Google authentication routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  // Successful authentication, redirect to the home page or handle it as needed
  res.redirect('/');
});

module.exports = router;
