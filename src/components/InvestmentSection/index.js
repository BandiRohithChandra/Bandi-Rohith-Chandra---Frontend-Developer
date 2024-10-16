import Header from '../Header'
import { useSpring, animated } from '@react-spring/web'
import { Row, Col} from 'reactstrap'
import './index.css'

const InvestmentSection = () => {
    const headingStyles = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1000 },
    });

    const descriptionStyles = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1200 },
    });

    const buttonStyles = useSpring({
        from: { opacity: 0, transform: 'translateY(20px)' },
        to: { opacity: 1, transform: 'translateY(0)' },
        config: { duration: 1400 },
    });

    return (
        <div className='main-container'>
            <Header /> 
            <div className='investment-container'>
                <animated.div style={headingStyles}>
                    <Row>
                        <Col sm= {12}>
                        <h1 className='main-heading'>
                            When Innovation <br /> Meets <span className='investment'>Investment</span>
                        </h1>
                        </Col>
                    </Row>
                </animated.div>

                <animated.p style={descriptionStyles} className='description'>
                    <Row>
                        <Col sm = {12}>
                            Empowering Trading Through Advanced Technology
                        </Col>
                    </Row>
                    
                </animated.p>

                <animated.button style={buttonStyles} type="button" className='open-dapp-button'>
                    <Row>
                        <Col sm = {12}>
                            Open dApp
                        </Col>
                    </Row>
                    
                </animated.button>
            </div>
        </div>
    );
};

export default InvestmentSection;
