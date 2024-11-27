import { Link, NavLink, useNavigate } from 'react-router';


export const Navbar = (props) => {
    // console.log(props)
    const navigate = useNavigate()
    const onLogout = () => {
        //console.log('Logout')
        navigate('/login', { replace: true })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                BRANDS
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className= { ({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link' }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className= { ({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link' }
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className= { ({isActive}) => isActive ? 'nav-item nav-link active' : 'nav-item nav-link' }
                        to="/search"
                    >
                        Search
                    </NavLink>
                    
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>
                        Gustavo
                    </span>
                    <button 
                    className='nav-item nav-link btn'
                    onClick={onLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}