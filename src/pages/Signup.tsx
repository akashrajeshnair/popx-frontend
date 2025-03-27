import './signup.css'
import { motion } from 'motion/react'

const Signup = () => {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <div className='app-container'>
                <h1 className='signup-header'>Create your PopX Account</h1>
                <div className='form-element-first'>
                    <div className="input-wrapper">
                        <label htmlFor="Full Name"><span className='form-label'>Full Name</span><span className='form-label-mandatory'>*</span></label>
                        <input type="text" value="Marry Doe"/>
                    </div>
                </div>
                <div className='form-element'>
                    <div className="input-wrapper">
                        <label htmlFor="Phone Number"><span className='form-label'>Phone Number</span><span className='form-label-mandatory'>*</span></label>
                        <input type="text" value="Marry Doe"/>
                    </div>
                </div>
                <div className='form-element'>
                    <div className="input-wrapper">
                        <label htmlFor="Email address"><span className='form-label'>Email Address</span><span className='form-label-mandatory'>*</span></label>
                        <input type="text" value="Marry Doe"/>
                    </div>
                </div>
                <div className='form-element'>
                    <div className="input-wrapper">
                        <label htmlFor="Password"><span className='form-label'>Password</span><span className='form-label-mandatory'>*</span></label>
                        <input type="password" value="Marry Doe"/>
                    </div>
                </div>
                <div className='form-element'>
                    <div className="input-wrapper">
                        <label htmlFor="Company Name"><span className='form-label'>Company Name</span></label>
                        <input type="text" value="Marry Doe"/>
                    </div>
                </div>
                <div className='form-radio'>
                    <p className='form-byline'>Are you an Agency?<span className='form-label-mandatory'>*</span></p>
                    <div className='radio-group'>
                        <label className='radio-container'>
                            <input type='radio' name='yes-no'></input>
                            <div className='custom-radio'></div>
                            <span className='label'>Yes</span> 
                        </label>
                        <label className='radio-container'>
                            <input type='radio' name='yes-no' checked={true} ></input>
                            <div className='custom-radio'></div>
                            <span className='label'>No</span>
                        </label>
                    </div>
                </div>
                <a className='btn signup-create' href='/profile'><p>Create Account</p></a>
            </div>
        </motion.div>
    )
}

export default Signup;