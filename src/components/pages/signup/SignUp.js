import React, { useState } from 'react'
import '../../../App.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

const SignUp = () => {
    const [isSubmitted, setIsSubmitting] = useState(false)

    function submitForm() {
        setIsSubmitting(true);
    }
    return (
        <>
        <div className="form-container">
            <span className="close-btn">x</span>
            {/* <div className="form-content-left">
                <img src="../../../img-8.jpg" alt="spacrship" 
                className="form-img"/>
            </div> */}
            {!isSubmitted ? <FormSignup submitForm= {submitForm} /> : 
            (<FormSuccess />)}
        </div>
    </>
    
    )}

    export default SignUp;

