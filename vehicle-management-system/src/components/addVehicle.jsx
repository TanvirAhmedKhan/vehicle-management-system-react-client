import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import { Row,Col,Button } from 'react-bootstrap';
import topPhoto from './../images/form.jpg';
import axios from 'axios';

class AddVehicle extends Component {
    state={
        model:'',
        make:'',
        engine:'',
        type:'',
        doors:0,
        wheels:0,
        bodyType:'',
        typesLoaded: false,
        AllBodyTypes:null
    }

    componentDidMount() {
        var ReactCom = this;
        axios.get('https://localhost:44320/api/BodyTypes/getBodyTypesByVehicleType/car', {
          headers: {
              'Content-Type': 'application/json'
          },
        })
        .then(function (response) {
          console.log(response.data);
            
            ReactCom.setState({
              AllBodyTypes: response.data,
              typesLoaded: true,
            });
            
        })
        .catch(function (error) {
          console.log(error);
        });
       // event.preventDefault();
    }

    handleModelInput =(event)=>{
        this.setState({
            model: event.target.value
        });
    }
    handleMakeInput =(event)=>{
        this.setState({
            make: event.target.value
        });
    }
    handleEngineInput =(event)=>{
        this.setState({
            engineDetail: event.target.value
        });
    }
    handleTypeInput =(event)=>{
        this.setState({
            bodyType: event.target.value
        });
    }
    handleDoorInput =(event)=>{
        this.setState({
            doors: event.target.value
        });
    }
    handleWheelInput =(event)=>{
        this.setState({
            wheels: event.target.value
        });
    }
   
    handleSubmit = event =>{
        
        let data = JSON.stringify({
                    model:this.state.model,
                    make:this.state.make,
                    engineDetail:this.state.engineDetail,
                    bodyType:this.state.bodyType,
                    doors:this.state.doors,
                    wheels:this.state.wheels,
                    vehicleType:"car"
        });

        axios.post('https://localhost:44320/api/vehicles', data,{
            headers: {
                'Content-Type': 'application/json'
            },
          })
          .then(function (response) {
            alert("Car has been added Successfully.");
          })
          .catch(function (error) {
            console.log(error);
          });
          //  event.preventDefault();

    }
    
    
    render() { 
        return (
                <div>
                    <Header />
                    <div className="body-content">
                        <div className="container">
                            <Row>
                                <Col sm={12} md={7} lg={7}>
                                {this.state.typesLoaded?(
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="add-vehicle-form-top">
                                            <h2>Add Vehicle</h2>
                                        </div>
                                        <div className="add-vehicle-form">
                                            <Row>
                                                <Col sm={4}>  <label>Model :</label> </Col>
                                                <Col sm={8}> <input className="form-control" type="text" value={this.state.model} onChange={this.handleModelInput}/> </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}> <label>Make :</label> </Col>
                                                <Col sm={8}> <input className="form-control"  type="text" value={this.state.make} onChange={this.handleMakeInput}/> </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}> <label>Engine :</label> </Col>
                                                <Col sm={8}> <input className="form-control"  type="text" value={this.state.engineDetail} onChange={this.handleEngineInput}/> </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>  <label>Body Type :</label> </Col>
                                                <Col sm={8}> 
                                                        <select className="form-control"  onChange={this.handleTypeInput}>
                                                            <option value="">Select a body type</option>
                                                            {this.state.AllBodyTypes.map((eachItem) =>
                                                                <option key={eachItem.bodyType} value={eachItem.bodyType}>{eachItem.bodyType}</option>
                                                            )}
                                                        </select> 
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}> <label>Doors :</label> </Col>
                                                <Col sm={8}> <input className="form-control"  type="number" value={this.state.doors} onChange={this.handleDoorInput}/> </Col>
                                            </Row>
                                            <Row>
                                                <Col sm={4}>  <label>Wheels :</label> </Col>
                                                <Col sm={8}>  <input className="form-control"  type="number" value={this.state.wheels} onChange={this.handleWheelInput}/> </Col>
                                            </Row>  
                                        </div>   
                                        <div className="add-form-submit-area">
                                            <Button type="submit">Submit</Button>
                                        </div>
                                    </form>
                                    ): (<h1>No Body Type found.</h1>)}
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <Footer />
                </div>
        );
    }
}
 
export default AddVehicle;


   