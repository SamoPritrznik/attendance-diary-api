
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Constructions = require('./Constructions');

//doda admina
router.post('/', function (req, res) {
    Constructions.create({
            location : req.body.location,
            site_name: req.body.site_name,
            used : req.body.used,
        }, 
        function (err, construction) {
            if (err) return res.status(500).send("Prišlo je do težave z shranjevanjem admina");
            res.status(200).send(construction);
        });
});

//vrne vse admine
router.get('/', function (req, res) {
    Constructions.find({}, function (err, construction) {
        if (err) return res.status(500).send("Prišlo je do težave z branjem adminov");
        res.status(200).send(construction);
    });
});

//vrne enega admina
router.get('/:id', function (req, res) {
    Constructions.findById(req.params.id, function (err, admconstructionin) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!construction) return res.status(404).send("No user found.");
        res.status(200).send(construction);
    });
});

//izbriše enega admina
router.delete('/:id', function (req, res) {
    Constructions.findByIdAndRemove(req.params.id, function (err, construction) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ construction.site_name +" was deleted.");
    });
});

//posodobi enega admina
router.put('/:id', function (req, res) {
    Constructions.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, construction) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(construction);
    });
});
module.exports = router;