import './login.css'
import { motion } from 'motion/react';

const Login = () => {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <div className="app-container">
                <h1 className='login-header'>Signin to your PopX Account</h1>
                <p className='login-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <div className='form-element-first'>
                    <div className="input-wrapper">
                        <label htmlFor="Full Name"><span className='form-label'>Email Address</span></label>
                        <input type="text" placeholder='Enter email address'/>
                    </div>
                </div>
                <div className='form-element'>
                    <div className="input-wrapper">
                        <label htmlFor="Phone Number"><span className='form-label'>Password</span></label>
                        <input type="text" placeholder='Enter password'/>
                    </div>
                </div>
                <a className='btn login-btn' href='/profile'><p>Login</p></a>
            </div>
        </motion.div>
    )
}

export default Login;