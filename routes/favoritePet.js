const express = require('express');
const router = express.Router();
const { FavoritePet } = require('../models/favoritePet');

router.get('/getAllFavPets/:userId', async(req, res) => {
    const userId = req.params.userId;
    try{
        let petIds = await FavoritePet.find({userId: userId});
        return res.status(200).json(petIds);
    }catch(err){
        console.log("Get FavoritePets err: " + err);
        return res.status(500).json(`Server error occured when getting FavoritePets for user: ${userId}`);
    }    

});

router.post('/create/:userId/:petId', async (req, res) => {
    const { userId, petId } = req.params;
    try{
        let favoritePet = new FavoritePet({petId: petId, userId: userId});
        await favoritePet.save();
        return res.status(200).json(favoritePet);
    }catch(err){
        console.log("Create FavoritePet " + err);
        return res.status(500).json(`Server error occured when creating new FavoritePet: {${userId}, ${petId}}`);
    }
    
});

router.delete('/delete/:userId/:petId', async (req, res) =>{
    const { userId, petId } = req.params;
    try {
        await FavoritePet.findOneAndDelete({petId, userId});
        return res.status(200).json(`Successfully deleted: {${userId}, ${petId}}`);
    } catch (err) {
        console.log("Delete FavoritePet " + err);
        return res.status(500).json(`Server error occured when deleting FavoritePet: {${userId}, ${petId}}`)
    };
});

module.exports = router;