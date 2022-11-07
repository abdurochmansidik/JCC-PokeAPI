const Footer = () => {
    return (
        <div>
            {/* Footer Start Start */}
            <footer className="d-flex flex-wrap justify-content-between align-items-center pb-4 pt-4 border-top" style={{backgroundColor : "#FFC107"}}>
                <div className="container">
                <div className="row">
                    <div className="col-md-8 justify-content-center justify-content-md-start d-flex">
                    <span className="mb-3 mb-md-0 fw-semibold text-white">&copy; 2022 - Pokemon API | All rights reserved.</span>
                    </div>
                    <ul className="nav col-md-4 justify-content-center justify-content-md-end list-unstyled d-flex">
                    <li className="ms-3">
                    <span className="mb-3 mb-md-0 fw-semibold text-white">PokeAPI</span>
                    </li>
                    </ul>
                </div>
                </div>
            </footer>
            {/* Footer Start End */}
        </div>
    )
}

export default Footer;