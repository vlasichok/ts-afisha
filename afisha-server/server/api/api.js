const router = require('express').Router();
const eventRoutes = require('./routes/eventRoutes');

//api router will mount other routers used in the API
router.use('/events', eventRoutes);


router.get('/', (req, res) => {
    res.status(200).send("Welcome to the API");
});

module.exports = router;