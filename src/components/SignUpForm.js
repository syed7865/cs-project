import React , {useState, useEffect} from 'react'
import validation from './validation';
import { useHistory } from "react-router-dom";


const SignUpForm = ({submitForm}) => {


    const [values, setValues] = useState({
        username: "",
        email: "",
        password1: "",
        password2: ""
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }
    }, [errors]);

  const history = useHistory();

  var resp_msg = '';

  const [ resp, changeResponse ] = useState(null);
  const [ username, changeUsername ] =  useState('');
  const [ email, changeEmail ] =  useState('');
  const [ password1, changePassword ] =  useState('');
  const [ password2, changePassword1 ] =  useState('');

  function onSubmit(e) {
     e.preventDefault();
    window.API.user_register(username, email, password1, password2).then(res => {
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
                <h2 className="title">Get Started</h2>
                </div>
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
                    <div className="email">
                        <label className="label">Email</label>
                        <input 
                            className="input" 
                            type="email" 
                            name="email" 
                            value={email}
                            onChange={(e) => changeEmail(e.target.value)}                            
                            />
                            {errors.email && <p className="error">{errors.email}</p>}

                            
                    </div>
                    <div className="password">
                        <label className="label">Password</label>
                        <input 
                            className="input" 
                            type="password" 
                            name="password" 
                            value={password1}
                            onChange={(e) => changePassword(e.target.value)}                           
                            />
                            {errors.password && <p className="error">{errors.password}</p>}
                    </div>
                    
                    <div className="password">
                        <label className="label">Confirm Password</label>
                        <input 
                            className="input" 
                            type="password" 
                            name="password2" 
                            value={password2}
                            onChange={(e) => changePassword1(e.target.value)}                         
                               />
                            {errors.password2 && <p className="error">{errors.password2}</p>}

                            
                    </div>
                    <div>                     
                        <button type className="submit">Sign Up</button>
                    </div>
                </form>
                <br></br>
                <p className='link1'>Already have an account? Log in</p>
            </div>
        </div>
  );
}

export default SignUpForm;