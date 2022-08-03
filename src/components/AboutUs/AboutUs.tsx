import { Container } from "react-bootstrap/";
import "./AboutUs.css"

function AboutUs() {
    return (
        <section className="about-us">
            <Container>
                    <div className="about-us-info">
                        <h1 className="title">Now it’s time to fly coding</h1>
                        <p className="paragraph">We create competitive advantage through accelerated technology innovation. We provide the tools, talent, and processes needed to accelerate your path to market leadership.</p>
                        <button className="buttom">tell me more</button>
                    </div>
            </Container>
        </section>
    );
}

export default AboutUs;