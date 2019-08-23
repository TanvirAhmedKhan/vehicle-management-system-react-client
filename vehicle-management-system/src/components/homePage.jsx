import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import SearchBar from './searchBar';


class HomePage extends Component {
    render() { 
        return (
                <div>
                    <Header />
                    <SearchBar />
                    <div className="body-content">
                    </div>
                    <Footer />
                </div>
        );
    }
}
 
export default HomePage;


   