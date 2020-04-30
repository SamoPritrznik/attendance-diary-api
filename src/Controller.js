
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Admins = require('./Admins');
var Constructions = require('./Constructions');
var Workers = require('./Workers');

//doda admina
router.post('/admins', function (req, res) {
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
router.get('/admins', function (req, res) {
    Admins.find({}, function (err, admin) {
        if (err) return res.status(500).send("Prišlo je do težave z branjem adminov");
        res.status(200).send(admin);
    });
});

//vrne enega admina
router.get('/admins/:id', function (req, res) {
    Admins.findById(req.params.id, function (err, admin) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!admin) return res.status(404).send("No user found.");
        res.status(200).send(admin);
    });
});

//izbriše enega admina
router.delete('/admins/:id', function (req, res) {
    Admins.findByIdAndRemove(req.params.id, function (err, admin) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ admin.name +" was deleted.");
    });
});

//posodobi enega admina
router.put('/admins/:id', function (req, res) {
    Admins.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, admin) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(admin);
    });
});

//doda gradbišče
router.post('/constructions', function (req, res) {
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

//vrne vsa gradbišča
router.get('/constructions', function (req, res) {
    Constructions.find({}, function (err, construction) {
        if (err) return res.status(500).send("Prišlo je do težave z branjem adminov");
        res.status(200).send(construction);
    });
});

//vrne eno gradbišče
router.get('/constructions/:id', function (req, res) {
    Constructions.findById(req.params.id, function (err, construction) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!construction) return res.status(404).send("No user found.");
        res.status(200).send(construction);
    });
});

//izbriše eno gradbišče
router.delete('/constructions/:id', function (req, res) {
    Constructions.findByIdAndRemove(req.params.id, function (err, construction) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ construction.site_name +" was deleted.");
    });
});

//posodobi eno gradbišče 
router.put('/constructions/:id', function (req, res) {
    Constructions.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, construction) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(construction);
    });
});

//doda delavca
router.post('/workers', function (req, res) {
    Workers.create({
            name : req.body.name,
            surname: req.body.surname,
            phone_num : req.body.phone_num,
        }, 
        function (err, worker) {
            if (err) return res.status(500).send("Prišlo je do težave z shranjevanjem admina");
            res.status(200).send(worker);
        });
});

//vrne vse delavce
router.get('/workers', function (req, res) {
    Workers.find({}, function (err, worker) {
        if (err) return res.status(500).send("Prišlo je do težave z branjem adminov");
        res.status(200).send(worker);
    });
});

//vrne enega delavca
router.get('/workers/:id', function (req, res) {
    Workers.findById(req.params.id, function (err, worker) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!construction) return res.status(404).send("No user found.");
        res.status(200).send(worker);
    });
});

//izbriše enega delavca
router.delete('/workers/:id', function (req, res) {
    Workers.findByIdAndRemove(req.params.id, function (err, worker) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User "+ worker.name + worker.surname +" was deleted.");
    });
});

//posodobi enega delavca 
router.put('/workers/:id', function (req, res) {
    Workers.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, worker) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(worker);
    });
});
module.exports = router;