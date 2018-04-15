const express = require('express');


const routes = (Event) => {

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
            event.save();
            res.status(201).send(event);
        });

    eventRouter.route('/:id')
        .get((req, res) => {
            Event.findById(req.params.id, (err, event) =>{
                if(err){
                    res.status(500).send(err);
                } else {
                    res.json(event);
                }
            });
        })
        .post();
    return eventRouter;
}

module.exports = routes;