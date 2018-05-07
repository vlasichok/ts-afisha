const Event = require('../models/eventModel');
const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');

const eventController = {
    getOneEvent: (req, res) => {
       Event.getOneEvent(req.params.id)
            .then((event) => {
                if (!event) {
                    return res.status(404).json(ErrorBuilder(404, ERROR_LIST.EVENT_NOT_FOUND));
                } else {
                    return res.status(200).json(event); //req.event is passed thought next from "findEventById"
                }
            }, (error) => {
                return res.status(500).json(ErrorBuilder(500, error.message));
            });
    },
    getEvents: (req, res) => {
        Event.getEvents()
            .then((events) => {
                return res.status(200).json(events);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(500, error.message));
            });
    },
    updateEvent: (req, res) => {
        Event.updateEvents(req.params.id, req.body)
            .then((updatedEvent) => {
                return res.status(200).json(updatedEvent);
            },(error) => {
                return res.status(500).json(ErrorBuilder(500, error.message));
            });
    },
    createEvent: (req, res) => {
        Event.create(req.body)
            .then((event) => {
                return res.send(201).json(event);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(500, error.message));
            });
    },
    deleteEvent: (req, res) => {
        Event.findByIdAndRemove(req.params.id)
            .then((removedEvent) => {
                return res.status(200).json(removedEvent);
            },(error) => {
                return res.status(500).json(ErrorBuilder(500, error.message));
            });
    }
};

module.exports = eventController;