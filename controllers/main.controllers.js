const axios = require('axios');

const favorites = []
const uniqueFavorites= []


const home = async (req, res) => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character');
    res.render('index', { characters : data.results, favouriteCount: favorites.length });
} 

const character = async (req, res) => {
    const id = req.params.id
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    //console.log(data)
    res.render('character' , { character: data, favouriteCount: favorites.length });
}

const handleFavorites = async (req, res) => {
    const name = req.params.name
    favorites.push(name)
}

const favoritesView = async (req, res) => {
    let redirectIfFavoritesEmpty = favorites.length
    if(redirectIfFavoritesEmpty == 0){
        res.redirect('/')
    }

    // return only unique values in array
    let uniqueValues = [...new Set(favorites)];
    uniqueFavorites.push(uniqueValues)
    res.render('favorites', { favorites: uniqueValues , favouriteCount: favorites.length})   
}

const deleteFavorite = async (req, res) => {
    const nameToDelete = req.params.name

    for(let i = 0; i < favorites.length; i++){
        if(favorites[i] == nameToDelete){
            favorites.splice(i, 1)
        }
    }
}





module.exports = { 
    home ,
    character,
    handleFavorites,
    favoritesView,
    deleteFavorite
}