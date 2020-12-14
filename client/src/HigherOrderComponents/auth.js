import React, {Component} from 'react';
import { auth } from '../store/actions/user_actions';
import { addFavPet } from '../store/actions/favPet_actions';
import { connect } from 'react-redux';
import { getAllFavPets } from '../utils/manageFavoritePet';
const authentication = function(ComposedClass, reload){
    class AuthenticationCheck extends Component{
        state ={
            loading:true
        }
     
        componentDidMount(){
            this.props.dispatch(auth()).then(() =>{
                let user = this.props.user;
                this.setState({loading:false});
                if(!user.auth){
                    if(reload){this.props.history.push('/log-in');}
                } else {
                    // Populate initial favPets in the app once user logged in
                    if(this.props.favPets.size === 0){
                        getAllFavPets(user.userData.id, (petIds) => {
                            petIds.forEach(petId => {
                                this.props.dispatch(addFavPet(petId));
                            });   
                        });     
                    }
                    console.log("Populated initial favPets: ");
                    console.log(this.props.favPets);
                    if(reload === false){
                        this.props.history.push('/admin');
                    }
                }
            });
        }

        render(){
            if(this.state.loading){
                return <div className="loader">Loading...</div>
            }
            return (
                <ComposedClass {...this.props} user={this.props.user} favPets={this.props.favPets}/>
            )
        }
    }

    function mapStateToProps(state){
        return {
            user:state.user,
            favPets: state.favPets
        }
    }

    return connect(mapStateToProps)(AuthenticationCheck);
}

export default authentication;