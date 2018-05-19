const Event = require('../models/eventModel');
const ErrorBuilder = require('../errors/errorBuilder');
const ERROR_LIST = require('../errors/errorList');

const eventController = {
    getOneEvent: (req, res) => {
       Event.getOneEvent(req.params.id)
            .then((event) => {
                if (!event) {
                    return res.status(404).json(ErrorBuilder(ERROR_LIST[1]));
                } else {
                    return res.status(200).json(event); //req.event is passed thought next from "findEventById"
                }
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST[2], error));
            });
    },
    getEvents: (req, res) => {
        Event.getEvents()
            .then((events) => {
                return res.status(200).json(events);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST[2], error));
            });
    },
    updateEvent: (req, res) => {
        Event.updateEvents(req.params.id, req.body)
            .then((updatedEvent) => {
                return res.status(200).json(updatedEvent);
            },(error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST[2], error));
            });
    },
    createEvent: (req, res) => {
        Event.create(req.body)
            .then((event) => {
                return res.send(201).json(event);
            }, (error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST[2], error));
            });
    },
    deleteEvent: (req, res) => {
        Event.findByIdAndRemove(req.params.id)
            .then((removedEvent) => {
                return res.status(200).json(removedEvent);
            },(error) => {
                return res.status(500).json(ErrorBuilder(ERROR_LIST[2], error));
            });
    }
};

module.exports = eventController;