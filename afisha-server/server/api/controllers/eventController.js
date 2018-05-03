const Event = require('../models/eventModel');

const eventController = {
    findEventById: (req, res, next, id) => {
        Event.findById(id)
            .populate('Author Comments')
            .exec()
            .then((event) => {
                if (!event) {
                    next(new Error('No event with ' + id + ' is found'));
                } else {
                    //we bind the event to the req and call next
                    //so that we can then use it for get, delete or put methods
                    req.event = event;
                    next();
                }
            }, (error) => {
                next(error);
            });
    },
    getEvents: (req, res, next) => {
        Event.find({})
            .populate('Author Comments')
            .exec()
            .then((events) => {
                res.json(events);
            }, (error) => {
                next(error);
            });
    },
    getOneEvent: (req, res, next) => {
        res.json(req.event); //req.event is passed thought next from "findEventById"
    },
    updateEvent: (req, res, next) => {
        let event = req.event;
        let update = req.body;
        Object.assign(event, update);

        event.save((error, updatedEvent) => {
            if(error) {
                next(error);
            } else {
                res.json(updatedEvent);
            }
        })
    },
    createEvent: (req, res, next) => {
        Event.create(req.body)
            .then((event) => {
                res.json(event);
            }, (error) => {
                next(error);
            });
    },
    deleteEvent: (req, res, next) => {
        req.event.remove((error, removedEvent) => {
            if(error){
                next(error);
            } else {
                res.json(removedEvent);
            }
        });
    }
};

module.exports = eventController;