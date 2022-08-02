import "./Hero.css";
import logo from "../../vendor/img/FlyLogo.png";
import kanji from "../../vendor/img/Kanji.png";
import { Container } from "react-bootstrap/";

function Hero() {
    return (
        <section data-test="hero-section" className="hero-section">
            <Container>
                <div className="hero-logo">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
                <p className="hero-paragraph">A TEC COMPANY</p>
                <div className="hero-kanji">
                    <img src={kanji} alt="Logo" className="kanji" />
                </div>
            </Container>
        </section>
    );
}


export default Hero;
