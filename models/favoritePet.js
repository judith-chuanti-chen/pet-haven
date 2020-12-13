const mongoose = require('mongoose');
const config = require('../config/config').get(process.env.NODE_ENV);

const favoritePetSchema = new mongoose.Schema({
    petId:{
        type: Number,
        required: true,
    },
    userId:{
        type: String,
        required: true
    } 
});
// Each combination of {petId, userId} should be unique 
favoritePetSchema.index({petId: 1, userId: 1}, {unique: true});



const FavoritePet = mongoose.model('FavoritePet', favoritePetSchema);
module.exports = { FavoritePet };
