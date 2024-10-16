import { useSpring, animated } from '@react-spring/web';
import './index.css';
import { Row, Col } from 'reactstrap';

const Header = () => {
    const styles = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateX(0)' },
        config: { duration: 1000 },
    });

    return (
        <div className='header-container'>
            <animated.div style={styles} className='animated-box'>
                <Row className='align-items-center'>
                    <Col xs={6} sm={3}>
                        <div className='logo'>
                            <img src="https://i.imgur.com/VWyzo1h.png" alt='logo' />
                        </div>
                    </Col>
                    <Col xs={6} sm={6}>
                        <ul className='logo-details-container'>
                            <li className='description-list'>Features</li>
                            <li className='description-list'>Why Us</li>
                            <li className='description-list'>Tokenomics</li>
                            <li className='description-list'>Roadmap</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={3} className='text-right'>
                        <div className='button-container'>
                            <button type="button" className='login-button'>Log in</button>
                            <button type='button' className='whitepaper-button'>Whitepaper</button>
                        </div>
                    </Col>
                </Row>
            </animated.div>
        </div>
    );
}

export default Header;
