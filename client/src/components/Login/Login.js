import React from 'react';
import axios from 'axios';
import Form from '../Form/Form';
import ProductList from '../Item/ProductList';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            isLoggedIn: false
        }
    };

    handleInputChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    handleFormSubmit = (event) => {
        event.preventDefault();
        axios({
            url: '/login',
            method: 'POST',
            data: this.state
        })
        .then((response) => {              
            this.setState({
                  userId: this.state.userId,
                  password: this.state.password, 
                  isLoggedIn: true                  
              });         
            console.log("Response: ", response.data); 
                         
        })
        .catch((error) => console.log("Axios Login Error: ", error.response.data ))
    };


    render() {
        console.log("Login State: ", this.state);

        const isLoggedIn = this.state;

        if (isLoggedIn){
            return  <ProductList userId={this.state.userId} />;
        }

        return (

            <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                username={this.state.username}
                password={this.state.password}
            />
           
               

           

        );
    }
}

export default Login;