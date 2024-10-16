import { Row, Col } from 'reactstrap';
import './index.css';

const ExploreSection = () => {
    return (
        <div className='main-container'>
            <div className='explore-section-container'>
                <Row>
                    <Col sm={12}>
                        <div className='header-container'>
                            <h1 className='main-heading'>Frequently Asked Questions</h1>
                        </div>
                    </Col>
                </Row>

                <div className='questions-container'>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <div className='layout-section'>
                                <img src="https://i.imgur.com/1R3RgMx.png" className='plus' alt="plus" />
                                <p>What is EthAi?</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className='layout-section'>
                                <img src="https://i.imgur.com/1R3RgMx.png" className='plus' alt="plus" />
                                <p>How can EthAi help me as a Trader?</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className='layout-section'>
                                <img src="https://i.imgur.com/1R3RgMx.png" className='plus' alt="plus" />
                                <p>Who can use EthAi?</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className='layout-section'>
                                <img src="https://i.imgur.com/1R3RgMx.png" className='plus' alt="plus" />
                                <p>How does EthAi track smart money flow?</p>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={4}>
                            <div className='layout-section'>
                                <img src="https://i.imgur.com/1R3RgMx.png" className='plus' alt="plus" />
                                <p>How does EthAi ensure data security?</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

            <div className='explore-our-app-section'>
                <Row>
                    <Col sm={12}>
                        <h1 className='explore-section-heading'>Explore Our <span className='span-element'>dApp</span></h1>
                        <p className='explore-section-description'>
                            EthAi is an AI-powered dApp designed to help traders make smarter, data-driven decisions.
                            By tracking smart money flows, monitoring key wallets, and providing real-time market
                            insights, EthAi empowers users to stay ahead of trends. The platform offers intuitive AI
                            features for asset recommendations, market analysis, and personalized crypto Q&A,
                            making it the ultimate tool for both novice and experienced traders.
                        </p>
                        <div>
                            <button type="button" className='open-dApp'>Open dApp</button>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ExploreSection;
