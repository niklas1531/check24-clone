import { useState } from 'react'
import Close from '../images/close.png'
const LoginModal = ({ changeShowLogin }) => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)
    const [login, setLogin] = useState(false)

    const changeLogin = () => {
        setLogin(!login)
    }

    const handleSubmit = () => {

    }
    return (
        <div className="loginmodal">
            <button className="close-button" onClick={changeShowLogin}>
                <img src={Close} alt='Close Icon' />
            </button>
                    <h2>{!login ? "Create Account" : "Log In"}</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            required={true}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="password"
                            required={true}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {!login && <input
                            type="password"
                            id="password-check"
                            name="password-check"
                            placeholder="confirm password"
                            required={true}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />}

                        <input type='submit' value={!login ? "Create Account" : "Log In"} />
                        <p>{error}</p>
                        <hr />
                        <p>{!login ? "Already have an account" : "Create Account"}</p> <button onClick={changeLogin}>{!login ? "Log In" : "Create"}</button>
                    </form>
              
            
        </div>)
}

export default LoginModal