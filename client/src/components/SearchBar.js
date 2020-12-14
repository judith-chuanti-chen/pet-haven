import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import {setType, setGender, setSize, setAge, setDistance, setLocation} from '../store/actions/filter_actions';



// Note: If user choose 'All' as the option for each filter, then the value is set to '' (emply string)
const SearchBar = props => {
    const filters  = useSelector(state => state.filter);
    const [valid, setValid] = useState(true);
    const {type, age, size, gender, distance, location} = filters;
    const dispatch = useDispatch();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        if(type === "0"){
            setValid(false);
            return
        }else{
            setValid(true);
        }
        const query = `location=${location}&distance=${distance}&type=${type}&age=${age}&size=${size}&gender=${gender}`;
        console.log(query);
        history.push(`/search/?${query}`);
    };
 
    //Only for debugging
    useEffect(() => {
        console.log(filters);
        console.log(valid);
    }, [dispatch, filters])
    
  
    return(
        <>
        <Form inline>
            <Form.Row className="d-flex align-items-center">
                    <Form.Group className="mr-3 d-flex align-items-center">
                        <Form.Label className="mr-2">Location</Form.Label>
                        <Form.Control className="mb-0" type="text" custom placeholder="Enter City, State, or ZIP" 
                                        name="location" value={location} 
                                        onChange={e => dispatch(setLocation(e.target.value))}/>
                    </Form.Group>
                    <Form.Group className="mr-3">
                        <Form.Label className="mr-2">Pet Type</Form.Label>
                        <Form.Control className="mb-0" custom size="lg" as="select" defaultValue={type} onChange={e => dispatch(setType(e.target.value))}>
                            <option value="0">Choose...</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mr-3">
                        <Form.Label className="mr-2">Age</Form.Label>
                        <Form.Control className="mb-0" custom size="lg" as="select" defaultValue={age} onChange={e => dispatch(setAge(e.target.value))}>
                            <option value="all">All</option>
                            <option value={type === "cat" ? "kitten" : "puppy"}>{type === "cat" ? "Kitten" : "Puppy"}</option>
                            <option value="young">Young</option>
                            <option value="adult">Adult</option>
                            <option value="senior">Senior</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mr-3">
                        <Form.Label className="mr-2">Size</Form.Label>
                        <Form.Control className="mb-0" custom size="lg" as="select" defaultValue={size} onChange={e => dispatch(setSize(e.target.value))}>
                            <option value="all">All</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xlarge">Extra Large</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mr-3">
                        <Form.Label className="mr-2">Gender</Form.Label>
                        <Form.Control className="mb-0" custom size="lg" as="select" defaultValue={gender} onChange={e => dispatch(setGender(e.target.value))}>
                            <option value="all">All</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group className="mr-3">
                        <Form.Label className="mr-2">Distance</Form.Label>
                        <Form.Control className="mb-0" custom size="lg" as="select" defaultValue={distance} onChange={e => dispatch(setDistance(e.target.value))}>
                            <option value="anywhere">Anywhere</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </Form.Control>
                    </Form.Group>
                <div className="p-3">
                    <Button className="mr-3 mb-0" variant="primary" type="submit" onClick={handleSubmit}>
                        Search
                    </Button>
                </div>
                
            </Form.Row>
        </Form>
        {valid ? null : <div className="error-label">For 'Pet Type', please choose either 'Dog' or 'Cat'</div>}

    </>
   
    );
}

export default SearchBar;