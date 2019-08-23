import React, { Component } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Header from './header';
import Footer from './footer';
import Ad from './ad';
import ListItem from './listItem';
import axios from 'axios';

class List extends Component {
    state={
        isLoaded:false,
        myList: null
    };
    deleteVehicle = id => e => {
        var self =this;
        axios.delete('https://localhost:44320/api/vehicles/'+id, {
            headers: {
                'Content-Type': 'application/json'
            },
          })
          .then(function (response) {
            self.componentDidMount();
            alert("The vehicle has been deleted Successfully.");
          })
          .catch(function (error) {
            console.log(error);
          });
    };
    componentDidMount() {
        fetch("https://localhost:44320/api/vehicles")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                myList: result,
              });
              console.log(result);
            },
        
            (error) => {
              this.setState({
                isLoaded: false,
                error
              });
            }
          )
      }
    
    render() { 
        return (  
            <div>
                <Header />
                <div className="body-content">
                    <div className="container">
                        <Container>
                            <Row>
                                <Col sm={0} md={4} lg={4}>
                                    <div>
                                        <Ad/>
                                    </div>
                                </Col>
                                <Col sm={12} md={8} lg={8}>
                                    {this.state.isLoaded?(
                                        <div>
                                            {this.state.myList.map((eachItem)=>{
                                                return <ListItem item={eachItem} key={eachItem.id} deleteVehicle={this.deleteVehicle}/>
                                            })}
                                        </div>
                                    ): (<h1>No result found</h1>)}
                                </Col>
                                
                            </Row>
                        </Container>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default List;