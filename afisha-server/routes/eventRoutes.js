const express = require('express');
const Event = require('../models/eventModel');

//@TODO migrate the logic of Event interaction to eventController
const eventRoutes = () => {

    const eventRouter = express.Router();
    
    eventRouter.route('/')
        .get((req, res) =>{
            Event.find((err, events) => {
                if(err){
                    res.status(500).send(err);
                } else {
                    res.json(events);
                }
            });
        })
        .post((req, res) => {
            let event = new Event(req.body);
            event.save((err)=> {
                if(err){
                    res.status(500).send(err);
                } else {
                    res.json(req.event);
                }
            });
            res.status(201).send(event);
        });

    //middleware that get the event for DB and pass it in req
    eventRouter.use('/:id', (req, res, next) => {
        Event.findById(req.params.id, (err, event) => {
            if (err) {
                res.status(500).send(err);
            } else if (event) {
                req.event = event;
                next();
            } else {
                res.status(404).send('No event found with this ID');
            }
        });
    });

    eventRouter.route('/:id')
        .get((req, res) => {
            res.json(req.event);
        })
        .put((req, res) => {
            updateEvent(req.body, req.event);
            req.event.save((err)=> {
                if(err){
                    res.status(500).send(err);
                } else {
                    res.json(req.event);
                }
            });

        })
        .delete((req, res) => {
            req.event.remove((err) => {
                if(err){
                    res.status(500).send(err);
                } else {
                    res.status(204).send('Removed successfully');
                }
            });
        });

    return eventRouter;
};

const updateEvent = (newEventData, event) =>{
    for(let i in event){
        if(newEventData[i] && event[i]) {
            event[i] = newEventData[i];
        }
    }
};

module.exports = eventRoutes();