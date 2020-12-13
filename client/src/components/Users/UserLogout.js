import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavPet } from '../../store/actions/favPet_actions';
import { logoutUser } from '../../store/actions/user_actions';

const Logout = (props) => {

    const logout = useSelector(state => state.user);
    const favPets = useSelector(state => state.favPets);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(logoutUser());
        favPets.forEach(petId => dispatch(deleteFavPet(petId)));
    },[dispatch]);

    useEffect(()=>{
        if(logout.auth === null){
            setTimeout(()=>{
                props.history.push('/')
            },2000)
        }
    },[logout,props])



    return(
        <div className="logout_container">
            <h1>
                Pets will miss you. Sorry to see you go :(
            </h1>
        </div>
    )
}

export default Logout;