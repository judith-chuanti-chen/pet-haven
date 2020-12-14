import {addFavPet, deleteFavPet} from '../store/actions/favPet_actions';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const favorite = (userId, petId) => {
    axios.post(`/api/favoritePets/create/${userId}/${petId}`)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
    
};

const unfavorite = (userId, petId) => {
    axios.delete(`/api/favoritePets/delete/${userId}/${petId}`)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      });
};

const getAllFavPets = (userId, callback) => {
    axios.get(`/api/favoritePets/getAllFavPets/${userId}`)
    .then(res => {
      const petIds = res.data.map(doc => doc.petId);
      return callback(petIds);
    }).catch(err => {
      console.log(err);
    });
}
export {favorite, unfavorite, getAllFavPets};