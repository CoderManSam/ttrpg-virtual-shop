import { Link } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import client from '../../../utils/client.js';

import Header from '../header/Header.js';
import UserForm from './UserForm.js';

function LoginPage() {
    const [user, setUser] = useState({});
    let navigate = useNavigate();

    const loginUser = event => {
        event.preventDefault();
        client
          .post('/login', user)
          .then(res => {
            localStorage.setItem(
              process.env.REACT_APP_USER_TOKEN,
              res.data.data.token
            );
    
            navigate('../../home/dmPage.js', {
              replace: true,
            });
          })
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
            <h3>Login:</h3>
            <UserForm handleChange={handleChange} handleSubmit={loginUser} />
            <p>
                Not registered yet? 
            </p>
            <Link id="user-registration-link" to="/signup">
                sign up here
            </Link>
          </main>
        </>
    )
}

export default LoginPage;