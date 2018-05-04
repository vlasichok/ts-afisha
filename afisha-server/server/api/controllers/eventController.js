const Event = require('../models/eventModel');
const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');

const eventController = {
    findEventById: (req, res, next, id) => {
        Event.findById(id)
            .populate('Author Comments')
            .exec()
            .then((event) => {
                if (!event) {
                    return res.status(404).json(ErrorBuilder(404, ERROR_LIST.NOT_FOUND));
                } else {
                    //we bind the event to the req and call next
                    //so that we can then use it for get, delete or put methods
                    req.event = event;
                    next();
                }
            }, (error) => {
                return res.status(500).json(ErrorBuilder(500, ERROR_LIST.UNKNOWN_ERROR, error.message));
            });
    },
    getEvents: (req, res) => {
        Event.find({})
            .populate('Author Comments')
            .exec()
            .then((events) => {
                return res.status(200).json(events);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(500, ERROR_LIST.UNKNOWN_ERROR, error.message));
            });
    },
    getOneEvent: (req, res) => {
        return res.status(200).json(req.event); //req.event is passed thought next from "findEventById"
    },
    updateEvent: (req, res) => {
        let event = req.event;
        let update = req.body;
        Object.assign(event, update);
        event.save((error, updatedEvent) => {
            if(error) {
                return res.status(500).json(ErrorBuilder(500, ERROR_LIST.UNKNOWN_ERROR, error.message));
            } else {
                return res.status(200).json(updatedEvent);
            }
        })
    },
    createEvent: (req, res) => {
        Event.create(req.body)
            .then((event) => {
                return res.send(201).json(event);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(500, ERROR_LIST.UNKNOWN_ERROR, error.message));
            });
    },
    deleteEvent: (req, res) => {
        req.event.remove((error, removedEvent) => {
            if(error){
                return res.status(500).json(ErrorBuilder(500, ERROR_LIST.UNKNOWN_ERROR, error.message));
            } else {
                return res.send(200).end();
            }
        });
    }
};

module.exports = eventController;