import React from 'react';

const SubmitButton = props => (
    
    <button 
        type="submit" 
        className="btn btn-primary"
        onClick={props.onSubmit}
    >
    Submit
    </button>

);

export default SubmitButton;