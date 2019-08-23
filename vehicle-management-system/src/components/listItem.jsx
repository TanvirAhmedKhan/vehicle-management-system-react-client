import React, { Component } from 'react';
import carPhoto from './../images/4.jpg';
import bikePhoto from './../images/bike.jpg';
import { Row,Col, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

class ListItem extends Component {
   state={
        HideListItemAfterDelete:false
   };
        
    deleteVehicle = id => e => {
        alert(id);
        axios.delete('https://localhost:44320/api/vehicles/'+id, {
            headers: {
                'Content-Type': 'application/json'
            },
          })
          .then(function (response) {
            alert("Car has been deleted Successfully.");
          })
          .catch(function (error) {
            console.log(error);
          });
         // this.props.someMethod;
    };
    render() { 
        return (  
                <div className="vehicle-card">
                    <Row>
                        <Col sm={5}>
                            {this.props.item.vehicleType=="car" && 
                                <img src={carPhoto} className="card-image" alt="logo" />
                            }
                            {this.props.item.vehicleType=="bike" && 
                                <img src={bikePhoto} className="card-image" alt="logo" />
                            }
                        </Col>
                        <Col sm={7}>
                            <div className="vehicle-card-info">
                                <div>Model: {this.props.item.make}</div>
                                <div>Engine:{this.props.item.engineDetail}</div>
                                {this.props.item.vehicleType=="car" && 
                                    <div>Doors: {this.props.item.doors}</div>
                                }
                                <div>Wheels:{this.props.item.wheels}</div>
                                <div>BodyType:{this.props.item.bodyType}</div>
                            </div>
                        </Col>
                        <Col sm={12}>
                            <div className="card-lower-info-box">
                                <Row>
                                    <Col sm={3}> Logo </Col>
                                    <Col sm={5}> 
                                        <div>
                                            Model: {this.props.item.model}
                                        </div>
                                    </Col>
                                    <Col sm={4}>
                                        <Button className="btn btn-danger"
                                                onClick={this.props.deleteVehicle(this.props.item.id)}>
                                                Delete</Button> 
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>    
        );
    }
}
 
export default ListItem;