import { Link } from "react-router-dom";

function Header({username}) {
    return (
        <header className="header">
            <h2 className="header-logo">
                TTRPG <br></br>
                <span className="indent-1">Virtual <br></br></span>
                <span className="indent-2">Store</span>
            </h2>
            {/* <Link className="header-username" to="/homepage">
                {username}
            </Link>  */}
            <h3 className="header-username">{username}</h3>
        </header>
    )
}

export default Header;
