import { Row, Col } from 'reactstrap';
import './index.css';

const FeaturesSection = () => {
    return (
        <div className='features-container'>
            <Row>
                <Col sm={12}>
                    <h1 style={{ color: '#ffffff', textAlign: 'center' }}>Our Features</h1>
                </Col>
            </Row>
            <div className='upper-section'>
                <Row>
                    <Col md={3}>
                        <div className='trade-container h-100'>
                            <div className='rectangle-one'>
                                <div className='rectangle-two'></div>
                            </div>
                            <div className='img-wrapper mb-5'>
                            <img src="https://i.imgur.com/7xlDL3e.png" alt='image' />

                            </div>
                            <h1 className='trade-heading mb-4'>Trade Optimizer</h1>
                            <p className='trade-description'>Find the right moments to buy or sell, with personalized trade suggestions designed to help you make the most of every opportunity.</p>
                        </div>
                    </Col>

                    <Col md={6}>
                        <div className='market-container mb-4'>
                            <h2 className='market-heading text-start mb-4'>Market Insight</h2>
                            <p className='market-description'>Stay ahead of the market. Get real-time updates on market trends, track top traders' movements, and spot signals from key influencers.</p>
                        </div>
                        <div className='empty-container'>
                        </div>
                    </Col>

                    <Col md={3}>
                        <div className='risk-guard-container h-100'>
                            <img src="https://i.imgur.com/2v6oN8J.png" alt="risk-guard" className='risk-guard-image' />
                            <h2 className='risk-heading my-4'>Risk Guard</h2>
                            <p className='risk-description'>Get alerts on market swings and potential risks before they impact your portfolio. This agent helps you navigate volatility and stay prepared for anything.</p>
                        </div>
                    </Col>
                </Row>
            </div>
            
            <div className='lower-section'>
                <Row>
                    <Col md={6} sm={12}>
                        <div className='portfolio-container'>
                            <h2 className='portfolio-heading'>Portfolio Sync</h2>
                            <p className='portfolio-description'>Easily manage your portfolio. You'll always know what you own, how it's performing, and where it’s headed.</p>
                        </div>
                    </Col>

                    <Col md={6} sm={12}>
                        <div className='scout-container'>
                            <h2 className='scout-heading'>Opportunity Scout</h2>
                            <p className='scout-description'>Find exciting new projects, events, and tokens that others might be missing. Identifying promising opportunities early, so you never miss out on the next big thing.</p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default FeaturesSection;
