import Logo from '../../asset/img/logo.png'
// import { Link } from 'react-router-dom';

const Navbar = () => {    
    return (
        <div>
            {/* Navigasi Start */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
                    <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        </ul>
                        <a className="navbar-brand mx-auto" href="/"><img src={Logo} width="40" alt=""/></a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">About</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
            {/* Navigasi End */}
        </div>
    )
}

export default Navbar;