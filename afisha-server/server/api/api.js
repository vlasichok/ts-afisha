const router = require('express').Router();
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const auth = require('./auth/auth');
const checkAuthenticated = require('./middlewares/checkAuthenticated');

//api router will mount other routers used in the API
router.use('/events', checkAuthenticated, eventRoutes);
router.use('/users', userRoutes);
router.post('/login', auth.loginUser);
router.post('/register', auth.registerUser);

router.get('/', (req, res) => {
    res.status(200).send("Welcome to the API");
});

module.exports = router;