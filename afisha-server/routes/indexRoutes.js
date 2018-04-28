const express = require("express"),
      eventRoutes = require("./eventRoutes");

const indexRoutes = () => {

    const indexRouter = express.Router();

    indexRouter.use('/events', eventRoutes);

    indexRouter.get('/', (req, res) => {
        res.status(200).send("Welcome to the API");
    });
    
    return indexRouter;
};

module.exports = indexRoutes();