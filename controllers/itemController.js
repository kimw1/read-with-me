const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Library
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }, 
    findById: function (req, res) {
        db.Library
            .findById( {_id: req.params.id} )
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        const text=req.body.Text;
        const url=req.body.url;
        const VoiceId=req.body.VoiceId;
        db.Library
            .create({
                Text: text,
                url: url,
                VoiceId: VoiceId
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },  
    remove: function (req, res) {
        db.Library
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};