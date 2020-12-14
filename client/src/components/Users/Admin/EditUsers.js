import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Row } from 'react-bootstrap';


const EditUsers = props => {
    const [users, setUsers] = useState([]);
    const history = useHistory();
    const getAllUsers = () => {
        axios.get('/api/users/all')
        .then(res => {
            setUsers(res.data);
        }).catch(err => {
            console.log(err);

        }).finally(() => {

        })
    }

    useEffect(() => {
        if(props.user.auth && props.user.userData.role === 1){
            getAllUsers();
        }
    }, []);

    return(
        <div className="row py-5">
        <div className="col-lg-10 mx-auto">
            <div className="card rounded shadow border-0">
                <div className="card-body bg-white rounded">
                    <div className="table-responsive">
                        <table
                            id="example"
                            className="table table-striped table-bordered">
                            <thead className="thead-light">
                                <tr>
                                    <th>UserID</th>
                                    <th>User Email</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map(user => {
                                    // console.log(Date.parse(url.date));
                                    return (
                                        <tr key={user._id}>
                                            <td>{user._id}</td>
                                            <td>{user.email}</td>
                                            <td>{user.firstname}</td>
                                            <td>{user.lastname}</td>
                                            <td>
                                                <Row className="d-flex justify-content-center">
                                                    <Button
                                                        variant="danger"
                                                        size="lg"
                                                        onClick={()=>{console.log("click")}}>
                                                        Remove
                                                    </Button>
                                                </Row>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );

}

export default EditUsers;