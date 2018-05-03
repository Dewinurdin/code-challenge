import React from 'react';
import './Form.css';

const Form = props => (
    <div className="text-center">
        <h1 className="h3 mb-3 font-weight-normal"><strong>Login</strong></h1>
        <br />
        <br/>
        
            <form className="form">
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">User ID</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name="userId" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter User ID"
                            value={props.userId}
                            onChange={props.handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password" 
                            placeholder="Password"
                            value={props.password}
                            onChange={props.handleInputChange}
                            required
                        />
                    </div>
                    <br />

                    <button 
                        type="submit" 
                        className="btn btn-primary"
                        onClick={props.handleFormSubmit}
                    >
                    Submit
                    </button>
            
            </form>
    </div>

);

export default Form;