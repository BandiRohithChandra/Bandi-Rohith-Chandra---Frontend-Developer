import { Row, Col, Container } from 'reactstrap';
import './index.css';

const RoadmapSection = () => {
    return (
        <Container fluid className='roadmap-container'>
            <Row>
                <Col sm={12}>
                    <h1 className='roadmap-heading'>Roadmap</h1>
                </Col>
            </Row>

           
            <Row className='roadmap-phase-layout'>
                <Col sm={12} md={6} className='phase-column'>
                    <div className='phase-one-container'>
                        <button type='button' className='phase-one'>Phase 1</button>
                        <h1 className='phase-heading'>Kicking Off</h1>
                        {["Launch of EthAi: Officially", "Development of Core AI Agents", "User Onboarding Campaign", "Community Engagement Initiatives"].map((item, index) => (
                            <div className='roadmap-details' key={index}>
                                <img src="https://i.imgur.com/ij91d7N.png" alt="tick-mark" className='tick-mark' />
                                <p className='description'>{item}</p>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col sm={12} md={6} className='phase-column'>
                    <div className='phase-one-image'>
                        <img src="https://i.imgur.com/BMbROav.png" alt="phase-1" className='phase-img' />
                    </div>
                </Col>
            </Row>

           
            <Row className='roadmap-phase-layout'>
                <Col sm={12} md={6} className='phase-column'>
                    <div className='phase-two-container'>
                        <button type='button' className='phase-two'>Phase 2</button>
                        <h1 className='phase-heading'>Bigger Insights</h1>
                        {["Introduction of Advanced AI Agents", "Strategic Partnerships", "User Interface Optimization", "Comprehensive Marketing Campaign"].map((item, index) => (
                            <div className='insight-details' key={index}>
                                <img src="https://i.imgur.com/ij91d7N.png" alt="tick-mark" className='tick-mark' />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col sm={12} md={6} className='phase-column'>
                    <div className='phase-two-image'>
                        <img src="https://i.imgur.com/elpRrat.png" alt="phase-2" className='phase-img' />
                    </div>
                </Col>
            </Row>

           
            <Row className='roadmap-phase-layout'>
                <Col sm={12} md={6} className='phase-column'>
                    <div className='phase-three-container'>
                        <button type='button' className='phase-three'>Phase 3</button>
                        <h1 className='phase-heading'>Full Power</h1>
                        {["Launch of EthAi: Officially", "Development of Core AI Agents", "User Onboarding Campaign", "Community Engagement Initiatives"].map((item, index) => (
                            <div className='full-power-details' key={index}>
                                <img src="https://i.imgur.com/ij91d7N.png" alt="tick-mark" className='tick-mark' />
                                <p>{item}</p>
                            </div>
                        ))}
                    </div>
                </Col>
                <Col sm={12} md={6} className='phase-column'>
                    <div className='phase-three-image'>
                        <img src="https://i.imgur.com/Ee3KfxQ.png" alt="phase-3" className='phase-img' />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default RoadmapSection;
