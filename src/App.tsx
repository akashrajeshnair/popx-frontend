import './App.css'

import { motion } from 'motion/react'

function App() {
  return (
      <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
      >    
        <div className='app-container'>
          <div className='app-content'>
            <h1 className='home-header'>Welcome to PopX</h1>
            <h2 className='home-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h2>
            <a className='btn home-create' href='/signup'><p>Create Account</p></a>
            <a className='btn home-login' href='/login'><p>Already Registered? Login</p></a>
          </div>
        </div>
      </motion.div>
  )
}

export default App
