
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Admins = require('./Admins');

//doda admina
router.post('/', function (req, res) {
    Admins.create({
            name : req.body.name,
            surname: req.body.surname,
            email : req.body.email,
            password : req.body.password
        }, 
        function (err, admin) {
            if (err) return res.status(500).send("Prišlo je do težave z shranjevanjem admina");
            res.status(200).send(admin);
        });
});

//vrne vse admine
router.get('/', function (req, res) {
    Admins.find({}, function (err, admin) {
        if (err) return res.status(500).send("Prišlo je do težave z branjem adminov");
        res.status(200).send(admin);
    });
});

//vrne enega admina
router.get('/:id', function (req, res) {
    Admins.findById(req.params.id, function (err, admin) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!admin) return res.status(404).send("No user found.");
        res.status(200).send(useadminr);
    });
});

//izbriše enega admina
router.delete('/:id', function (req, res) {
    Admins.findByIdAndRemove(req.params.id, function (err, admin) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ admin.name +" was deleted.");
    });
});

//posodobi enega admina
router.put('/:id', function (req, res) {
    Admins.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, admin) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(admin);
    });
});
module.exports = router;