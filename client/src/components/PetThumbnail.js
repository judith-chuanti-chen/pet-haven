import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { PetContext } from './Contexts/PetContext';

import { useHistory } from "react-router-dom";
import { favorite, unfavorite } from '../utils/manageFavoritePet';
import Card from 'react-bootstrap/Card';
import {Button, Row, Col, ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import Skeleton from 'react-loading-skeleton';

const PetThumbnail = props => {
    const user = useSelector(state => state.user);
    const [like, setLike] = useState(props.isLiked);
    const history = useHistory();
   
    const toggleLike = () => {
      if(like){
        unfavorite(user.userData.id, props.id);
        setLike(false);
      }else{
        favorite(user.userData.id, props.id);
        setLike(true);
      }
    };

    const routeChange = () => {
      console.log(props.p_info);
      let path = `pageDetail/?id=${props.id}&name=${props.name}&age=${props.age}&gender=${props.gender}&image=${props.image}`; 
      history.push(path);
    };

    return(
      <Card className="m-3 shadow" style={{ width: '27rem', height: '29em', borderTopLeftRadius:'0.5em', borderTopRightRadius:'0.5em'}}>
        <Card.Img variant="top" style={{height: '18em', objectFit: 'cover', borderTopLeftRadius:'0.5em', borderTopRightRadius:'0.5em'}} src={props.image} />
          <Card.Body className="d-flex flex-column">
            <Card.Text className="text-center">
              <b>{props.name || <Skeleton />}</b>
              <br/>{props.age } | {props.gender}
            </Card.Text>
            <ButtonGroup className="mt-auto">
              <Button variant="light" onClick={toggleLike}>
                <FontAwesomeIcon icon={like ? solidHeart : regularHeart } size="lg"/>
                </Button>
              <Button  onClick={routeChange} >Check Me Out!</Button>
            </ButtonGroup>
          </Card.Body>
      </Card>
    );
};

export default PetThumbnail;


