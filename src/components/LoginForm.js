import React , {useState, useEffect} from 'react'
import validation from './validation';
import { useHistory } from "react-router-dom";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const LoginForm = ({submitForm}) => {
    const history = useHistory(); 

    
    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });

    }

    const handleFormSubmit = (event) => {
        console.log(event)
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    }, [errors]);

    const [ resp, changeResponse ] = useState(null);
    const [ username, changeUsername ] =  useState('');
    const [ password, changePassword ] =  useState('');
    const [error, setError] = useState('');
    const [errorExists, setErrorExists] = useState(false);


    function onSubmit(e) {
        e.preventDefault();
        window.API.user_login(username, password).then(res => {
            console.log(res)
            if(!res.error){
                window.API.setCookie('public_token', res.public_token)
                window.location = '/profile'
                changeResponse(res)
            }else{
                alert(res.error)
            }
        })
      }
  

    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                <h2 className="title">Welcome Back</h2>
                </div>
                {errorExists && <div className="error">{error}</div>}
                <form className="form-wrapper" onSubmit={onSubmit}>
                    <div className="name">
                        <label className="label">Username</label>
                        <input 
                            className="input" 
                            type="text" 
                            name="username" 
                            value={username} 
                            onChange={(e) => changeUsername(e.target.value)} 
                            />
                            {errors.username && <p className="error">{errors.username}</p>}
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input 
                            className="input" 
                            type="password" 
                            name="password" 
                            value={password} 
                            onChange={(e) => changePassword(e.target.value)} 
                            
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    <div>
                        <button type className="submit">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;