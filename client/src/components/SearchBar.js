import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {setType, setGender, setSize, setAge, setDistance, setLocation} from '../store/actions/filter_actions';

// Note: If user choose 'All' as the option for each filter, then the value is set to '' (emply string)
const SearchBar = props => {
    const filters  = useSelector(state => state.filter);
    const {type, age, size, gender, distance} = filters;
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        const query = `type=${type}&age=${age}&size=${size}&gender=${gender}&distance=${distance}`
        history.push(`/search/?${query}`);
        console.log(history);
    }
    //Only for debugging
    useEffect(() => {
        console.log(filters);
    }, [dispatch, filters])
 
    return(
        <>
            <Form inline>
                <Form.Row>
                    <Form.Group className="mr-3">
                        <Form.Label className="mr-2">Pet Type</Form.Label>
                        <Form.Control as="select" onChange={e => dispatch(setType(e.target.value))}>
                            <option value="0">Choose...</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mr-3">
                        <Form.Label className="mr-2">Age</Form.Label>
                        <Form.Control as="select" onChange={e => dispatch(setAge(e.target.value))}>
                            <option value="">All</option>
                            <option value={type === "cat" ? "kitten" : "puppy"}>{type === "cat" ? "Kitten" : "Puppy"}</option>
                            <option value="young">Young</option>
                            <option value="adult">Adult</option>
                            <option value="senior">Senior</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mr-3">
                        <Form.Label className="mr-2">Size</Form.Label>
                        <Form.Control as="select" onChange={e => dispatch(setSize(e.target.value))}>
                            <option value="">All</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="extra large">Extra Large</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mr-3">
                        <Form.Label className="mr-2">Gender</Form.Label>
                        <Form.Control as="select" onChange={e => dispatch(setGender(e.target.value))}>
                            <option value="">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mr-3">
                        <Form.Label className="mr-2">Distance</Form.Label>
                        <Form.Control as="select" onChange={e => dispatch(setDistance(e.target.value))}>
                            <option value="Anywhere">Anywhere</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option>50</option>
                            <option>100</option>
                        </Form.Control>
                    </Form.Group>
                    <Button className="mr-3" variant="primary" type="submit" onClick={handleSubmit}>
                        Search
                    </Button>
                </Form.Row>
          
            </Form>
        </>
    )
}

export default SearchBar;