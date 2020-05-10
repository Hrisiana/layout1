import React from 'react';
import Button from './button';
 
const Button = props => {
    return(
        <div className="d-flex">
             <button type="button" className="btn btn-outline-primary card-button">Sign in</button>
             <button type="button" className="btn btn-primary card-button">Register</button>
   </div>
    )

}
export default Button;