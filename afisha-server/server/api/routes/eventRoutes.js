const express = require('express');
const eventController = require('../controllers/eventController');

const eventRoutes = () => {

    const eventRouter = express.Router();
    
    eventRouter.route('/')
        .get((req, res) =>{
            eventController.getEvents(req, res);
        })
        .post((req, res) => {
            eventController.createEvent(req, res);
        });

    //middleware that get the event for DB and pass it in req
    eventRouter.use('/:id', (req, res, next) => {
        eventController.findEventById(req, res, next, req.params.id);
    });

    eventRouter.route('/:id')
        .get((req, res) => {
            eventController.getOneEvent(req, res);
        })
        .put((req, res) => {
            eventController.updateEvent(req, res);
        })
        .delete((req, res) => {
            eventController.deleteEvent(req, res);
        });

    return eventRouter;
};

module.exports = eventRoutes();