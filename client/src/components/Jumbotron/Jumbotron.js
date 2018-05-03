import React from 'react';
import jumbotronImage from '../../images/jumbotron.jpg';

// const backgroundJumbotronImage = {
//     "backgroundImage": "../../images/jumbotron.jpg"
//   }

const Jumbotron = () => (

    <div className="jumbotron jumbotron-fluid" >
        <div className="container" logo={jumbotronImage} >
            <h1 className="display-4">Product Management Page</h1>
        </div>
    </div>
    
);

export default Jumbotron;