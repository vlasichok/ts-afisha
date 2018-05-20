const express = require('express');
const eventController = require('../controllers/eventController');

const eventRoutes = () => {

    const eventRouter = express.Router();
    
    eventRouter.route('/')
        .get(eventController.getEvents)
        .post(eventController.createEvent);

    //middleware that get the event for DB and pass it in req
    eventRouter.route('/:id')
        .get(eventController.getOneEvent)
        .put(eventController.updateEvent)
        .delete(eventController.deleteEvent);

    return eventRouter;
};

module.exports = eventRoutes();