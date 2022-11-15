import Check24 from '../images/check24-logo.png'
import Logo from '../images/user.png'
import { HashLink } from 'react-router-hash-link';
const Nav = ({changeShowLogin}) => {
    return (<nav className='nav'>
<HashLink to='/'><img src={Check24} className='brand' alt='brand'/></HashLink>
<h3>GenDev Holiday Challenge Niklas Minth</h3>

<button onClick={changeShowLogin}><img src={Logo} className='logo' alt='logo'/></button>
    </nav>)
}

export default Nav