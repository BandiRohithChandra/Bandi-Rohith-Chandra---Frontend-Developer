import { Container, Row, Col } from 'reactstrap';
import './index.css';

const AboutSection = () => {
    return (
        <Container fluid>
            <div className='about-container'>
                <Row className='text-center'>
                    <Col sm={12}>
                        <h1 className='about-heading'>About EthAi</h1>
                        <p className='about-description'>
                            At EthAi, we’re all about making crypto trading easier and more intuitive. We provide tools <br />
                            that help traders keep up with all new market trends, track top traders’ movements.
                        </p>
                        <button type="button" className='about-button'>Read more</button>
                    </Col>
                </Row>

                <div className='precautions-container'>
                    <div className='upper-section'>
                        <Row>
                            <Col sm={12} md={6} lg={5} className='d-flex align-items-stretch'>
                                <div className='precaution-section'>
                                    <img src="https://i.imgur.com/7KlKu3h.png" alt="stay-ahead" className='precaution-logo' />
                                    <h1 className='precaution-heading'>Stay Ahead</h1>
                                    <p className='precaution-description'>No more guesswork—get clear, trustable insights.</p>
                                </div>
                            </Col>

                            <Col sm={12} md={6} lg={5} className='d-flex align-items-stretch'>
                                <div className='precaution-section'>
                                    <img src="https://i.imgur.com/rHubi1b.png" alt="know-your-assets" className='precaution-logo' />
                                    <h1 className='precaution-heading'>Know Your Assets</h1>
                                    <p className='precaution-description'>Always stay on top of how your investments are performing.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className='lower-section'>
                        <Row>
                            <Col sm={12} md={6} lg={6} className='d-flex align-items-stretch'>
                                <div className='precaution-section'>
                                    <img src="https://i.imgur.com/Id8P19E.png" alt="simple-not-overwhelming" className='precaution-logo' />
                                    <h1 className='precaution-heading'>Simple, Not Overwhelming</h1>
                                    <p className='precaution-description'>Our tools are designed to make complex market analysis easy to understand and act on.</p>
                                </div>
                            </Col>

                            <Col sm={12} md={6} lg={6} className='d-flex align-items-stretch'>
                                <div className='precaution-section'>
                                    <img src="https://i.imgur.com/Id8P19E.png" alt="future-proof" className='precaution-logo' />
                                    <h1 className='precaution-heading'>Future-Proof</h1>
                                    <p className='precaution-description'>We’re constantly improving, adding new features to help you make the most informed decisions possible.</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AboutSection;
