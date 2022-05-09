import logo from './logo.svg';
import './App.css';
import { Navbar,NavbarBrand } from 'reactstrap';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import { DISHES } from '../src/shared/dishes';
import Main from './components/MainComponent';
import BrowserRouter from 'react-router-dom/BrowserRouter';
class App extends Component{
    
    render(){
        return(
            <BrowserRouter>
            <div className="App">
                <Main />
            </div>
        </BrowserRouter>

        );
    }
    
    
}

export default App;
