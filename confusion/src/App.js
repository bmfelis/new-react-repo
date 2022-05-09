import logo from './logo.svg';
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from '../src/shared/dishes';
import Main from './components/MainComponent';

class App extends Component{

    render(){
        return(
            <div className="App">
                <Main/>
            </div>
        );
    }
    
    
}

export default App;
