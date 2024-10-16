import './index.css';

const FooterSection = () => {
    return (
        <div className='footer-container'>
            <div className='logo-icon-container'>
                <div>
                    <img src='https://i.imgur.com/RvK4IOR.png' alt="footer-logo" className='footer-logo' />
                </div>
                <div className='icons-container'>
                    <div>
                        <img src="https://i.imgur.com/8rYl2yN.png" alt="telegram" className="icons" />
                    </div>
                    <div>
                        <img src="https://i.imgur.com/aCzS6Xk.png" alt="instagram" className='icons' />
                    </div>
                    <div>
                        <img src="https://i.imgur.com/mbEyk7r.png" alt="group" className='icons' />
                    </div>
                    <div>
                        <img src="https://i.imgur.com/ttdEFzI.png" alt="facebook" className='icons' />
                    </div>
                    <div>
                        <img src="https://i.imgur.com/Ao7jQJ9.png" alt="discord" className='icons' />
                    </div>
                </div>
            </div>

            <div className='right-section-container'>
                <h1 className='right-section-heading'>
                    “Designed for traders of<br /> today, just like you."
                    What's your work email?
                    Get Started
                </h1>
                <div>
                    <input type='text' placeholder='What’s your work email?' className='input' />
                </div>
            </div>
        </div>
    );
}

export default FooterSection;
