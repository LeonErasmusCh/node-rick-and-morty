const express = require('express');
const { home, character, handleFavorites, favoritesView, deleteFavorite } = require('../controllers/main.controllers');


const router = express.Router();

router.get('/', home);
router.get('/character/:id', character);
router.post('/character/:name', handleFavorites);
router.get('/favorites', favoritesView);
router.delete('/deleteName/:name', deleteFavorite)









































router.get('/character/:id', handleFavorites);

module.exports = router;