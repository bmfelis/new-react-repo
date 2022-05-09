import React from 'react'
import { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null,
        }
    }

    onDishSelect(dishId){
        this.setState({selectedDish: dishId})
    }

    render(){
        return(
            <div>
                <Header/>
                <Menu dishes={this.state.dishes}
                selectedDish={this.state.selectedDish} 
                onClick={(dishId)=> this.onDishSelect(dishId)} />
                <Footer/>
            </div>
        );
    }
}
export default Main;