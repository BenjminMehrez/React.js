import CartWidget from "./CarWidget";



const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-sm">
                <a className="navbar-brand" href="#">
                    React Benjamin
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                Ropa 
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Zapatillas
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Liquidacion
                            </a>
                        </li>
                        <li className="nav-item">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;