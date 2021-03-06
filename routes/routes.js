var express = require('express');
var path = require('path');
var router = express.Router();
var mongoose = require('mongoose');

var Character = require('../models/Character');
var Movie = require('../models/Movie');
var Deadpool = require('../models/Deadpool');

// Home Page
router.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../public/views', 'index.html'));
});


// Get Characters
router.get('/characters', function(req, res, next) {
	// Character Model
	Character.find(function(err, characters) {
		if(err) return(err);
		res.json(characters);
	});
});


// Get Characters
router.get('/characters/:id', function(req, res, next) {
	// Character Model
	Character.findById(req.params.id, function(err, character) {
		if(err) return(err);
		res.json(character);
	});
});


// Get Movies
router.get('/movies', function(req, res, next) {
	// Character Model
	Movie.find(function(err, movies) {
		if(err) return(err);
		res.json(movies);
	});
});

// Get Movie
router.get('/movies/:id', function(req, res, next) {
	// Character Model
	Movie.findById(req.params.id, function(err, movie) {
		if(err) return(err);
		res.json(movie);
	});
});


// Get Deadpools
router.get('/deadpools', function(req, res, next) {
	// Character Model
	Deadpool.find(function(err, deadpools) {
		if(err) return(err);
		res.json(deadpools);
	});
});


// Get Deadpool
router.get('/deadpools/:id', function(req, res, next) {
	// Character Model
	Deadpool.findById(req.params.id, function(err, deadpool) {
		if(err) return(err);
		res.json(deadpool);
	});
});




module.exports = router;