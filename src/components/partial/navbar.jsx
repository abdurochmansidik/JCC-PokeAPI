import Logo1 from '../../asset/img/logo1.png'
import Logo2 from '../../asset/img/logo2.png'
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
                        <a className="navbar-brand mx-auto" href="/"><img src={Logo2} width="40" alt=""/></a>
                        </li>
                        </ul>
                        <a className="navbar-brand mx-auto" href="/"><img src={Logo1} width="80" alt=""/></a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold">
                        <li className="nav-item">
                        <a className="navbar-brand mx-auto" href="/"><img src={Logo2} width="40" alt=""/></a>
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