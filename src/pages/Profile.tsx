import './profile.css';
import { motion } from 'motion/react';

const Profile = () => {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <div className='app-container'>
                <div className='profile-header'>
                    <p>Account Settings</p>
                </div>
                <div className='profile-details'>
                    <div className='profile-photo-container'>
                        <img src="Ellipse114.png" alt="" className='profile-photo'/>
                        <div className='camera-icon'>
                            <img src='Group1585@2x.png'/>
                        </div>
                    </div>
                    <div className='profile-info'>
                        <p className='profile-name'>Marry Doe</p>
                        <p className='profile-email'>Marry@Gmail.Com</p>
                    </div>
                </div>
                <div className='profile-blurb'>
                    <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
                </div>
                <div className="horizontal_dotted_line first"></div>
                <div className="horizontal_dotted_line last"></div>
            </div>
        </motion.div>
    )
}

export default Profile;