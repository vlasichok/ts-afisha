const express = require('express');
const eventController = require('../controllers/eventController');

const eventRouter = express.Router();

eventRouter.route('/')
    .get(eventController.getEvents)
    .post(eventController.createEvent);

//middleware that get the event for DB and pass it in req
eventRouter.use('/:id', eventController.findEventById);

eventRouter.route('/:id')
    .get(eventController.getOneEvent)
    .put(eventController.updateEvent)
    .delete(eventController.deleteEvent);

module.exports = eventRouter;