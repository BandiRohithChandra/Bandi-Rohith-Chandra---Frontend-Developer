import { Row, Col, Container } from 'reactstrap';
import './index.css';

const TokenomicsSection = () => {
    return (
        <Container fluid className='tokenomics-container'>
            <Row>
                <Col sm={12}>
                    <h1 className='tokenomics-heading'>Tokenomics</h1>
                </Col>
            </Row>

            <Row className='layout-section'>
                <Col sm={12} md={6}>
                    <div className='donut-image-container'>
                        <img src="https://i.imgur.com/VdCyOXx.png" alt="donut" className='donut' />
                    </div>
                </Col>

                <Col sm={12} md={6}>
                    <div className='tokenomics-list-container'>
                        <h2>Token Information</h2>
                        <p>Name: <span>EthAi</span></p>
                        <p>Token Name: <span>$EthAi</span></p>
                        <p>Token Standard: <span>ERC20</span></p>
                        <p>Blockchain: <span>Ethereum</span></p>
                        <p>Total Supply: <span>100 Million</span></p>
                        <p>Tax: <span>5%/5%</span></p>
                    </div>
                    <div className='tokenomics-list-container'>
                        <h2>Distribution</h2>
                        <p>Team: <span>35%</span></p>
                        <p>Marketing: <span>5%</span></p>
                        <p>Liquidity Pool: <span>90%</span></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default TokenomicsSection;
