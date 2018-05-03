const express = require('express');
const eventController = require('../controllers/eventController');

//@TODO migrate the logic of Event interaction to eventController
const eventRoutes = () => {

    const eventRouter = express.Router();
    
    eventRouter.route('/')
        .get((req, res, next) =>{
            eventController.getEvents(req, res, next);
        })
        .post((req, res, next) => {
            eventController.createEvent(req, res, next);
        });

    //middleware that get the event for DB and pass it in req
    eventRouter.use('/:id', (req, res, next) => {
        eventController.findEventById(req, res, next, req.params.id);
    });

    eventRouter.route('/:id')
        .get((req, res, next) => {
            eventController.getOneEvent(req, res, next);
        })
        .put((req, res, next) => {
            eventController.updateEvent(req, res, next);
        })
        .delete((req, res) => {
            eventController.deleteEvent(req, res, next);
        });

    return eventRouter;
};

module.exports = eventRoutes();