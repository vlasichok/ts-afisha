const Event = require('../models/eventModel');
const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');

const eventController = {
    getOneEvent: (req, res) => {
       Event.getOneEvent(req.params.id)
            .then((event) => {
                if (!event) {
                    return res.status(404).json(ErrorBuilder(ERROR_LIST.EVENT_NOT_FOUND));
                } else {
                    return res.status(200).json(event);
                }
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.INTERNAL_SERVER_ERROR, error));
            });
    },
    getEvents: (req, res) => {
        Event.getEvents()
            .then((events) => {
                return res.status(200).json(events);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.INTERNAL_SERVER_ERROR, error));
            });
    },
    updateEvent: (req, res) => {
        Event.updateEvents(req.params.id, req.body)
            .then((updatedEvent) => {
                return res.status(200).json(updatedEvent);
            },(error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.INTERNAL_SERVER_ERROR, error));
            });
    },
    createEvent: (req, res) => {
        Event.create(req.body)
            .then((event) => {
                return res.send(201).json(event);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.INTERNAL_SERVER_ERROR, error));
            });
    },
    deleteEvent: (req, res) => {
        Event.findByIdAndRemove(req.params.id)
            .then((removedEvent) => {
                return res.status(200).json(removedEvent);
            },(error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST.INTERNAL_SERVER_ERROR, error));
            });
    }
};

module.exports = eventController;