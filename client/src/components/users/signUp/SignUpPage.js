import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import client from '../../../utils/client.js';

import Header from '../header/Header.js';
import UserForm from '../login/UserForm.js';

function SignUpPage() {
    const [user, setUser] = useState({});
  
    let navigate = useNavigate();
  
    const login = () => {
      navigate('../', { replace: true });
    };
  
    const registerUser = event => {
      event.preventDefault();
      client
        .post('/user', user, false)
        .then(() => login())
  
        .catch(err => {
          console.error(err.response);
        });
    };
  
    const handleChange = event => {
      event.preventDefault();
      const { value, name } = event.target;
  
      setUser({
        ...user,
        [name]: value,
      });
    };

    return (
        <>
            <Header />
            <main className='users-main'>
                <h1>
                    TTRPG <br></br>
                    <span className="indent-1">Virtual <br></br></span>
                    <span className="indent-2">Store</span>
                </h1>
                <h3>Sign up:</h3>
                <UserForm handleChange={handleChange} handleSubmit={registerUser} />
                <p>
                    Already registered? 
                </p>
                <Link id="user-registration-link" to="/">
                    log in here
                </Link>
            </main>
        </>
    )
}

export default SignUpPage;