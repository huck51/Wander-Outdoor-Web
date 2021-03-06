import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import PicSection from '../Components/picSection';
import TeamGuy from '../Components/teamGuy';
import './Styles/about.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenWidth: window.innerWidth,
    };
  }


  render() {
    return (
      <div>
        <div className="openingSection">
          <div className="mainContainer" />
        </div>
        <PicSection
          colClass="ourVisionCol"
          heading="Our Vision"
          hrClass="ourVisionHr"
          text="Our vision at Wander Outdoor is to help explorers who are seeking a personalized, guided adventure quickly find the right guide."
          textClass="modIndText"
        />
        <div className="picSecOne" />
        <PicSection
          colClass="modIndCol"
          heading="Modernizing The Industry"
          hrClass="modIndHr"
          text="Our company seeks to point the industry in a more modern direction. Wander&#39;s services are catered to both the explorers and guides, allowing for a truly unique and fulfilling experience for customers, and more capability for the guides. Under the current model, explorers choose from a list of trips offered by whatever company they stumble upon on Google. Our company will flip the model upside down and put the power into the hands of the customers."
          textClass="modIndText"
        />
        <div className="picSecTwo" />
        <PicSection
          colClass="modIndCol"
          heading="Our Product"
          hrClass="modIndHr"
          text="Our product, the Wander app and website, serves as a singular platform across multiple guides and guiding companies. This allows explorers to compare guides and guiding companies while verifying their legitimacy. Completely mobile and easy to use, the platform connects outdoor guides with potential clients."
          textClass="modIndText"
        />
        <div className="picSecThree" />
        <PicSection
          colClass="howitwerksCol"
          heading="How It Works"
          hrClass="howitwerksHr"
          text="With Wander, you will have access to countless guides employed by verified guiding companies. This allows YOU to choose your guide based on his or her qualifications and rating, rather than being assigned whichever guide happens to be working that day. Since the guide is the one who influences how rewarding the experience is, you are more likely to have a great trip! The companies are also rated based on the average ratings of their guides, so you can easily see which companies are offering the best services."
          textClass="howitwerksText"
        />
        <div className="picSecFour" />
        <PicSection
          colClass="weDoWorkCol"
          heading="We Do The Work So You Don't Have To"
          hrClass="weDoWorkHr"
          text="Wander Outdoor works closely with local, reputable guiding companies to ensure that the guides are certified, permitted, and insured. Freelance and full-time guides working under a company&#39;s operating permits can easily find work through Wander and still work on their own schedule as their own bosses. Wander gives guides the chance to build their personal brands and portfolios, providing the guiding industry with the opportunity to develop it’s own unique personality. Additionally, this gives guides a way to book trips on their own using only thier name. This boosts trips for the guiding company and allows a relationship to be built between guide and explorer. The guiding companies get market exposure through their guides, so it is in their best interests to employ high-quality, personable guides and training techniques to create the highest satisfaction ratings."
          textClass="weDoWorkText"
        />
        <div className="picSecFive" />
        <div className="container">
          <h2>Meet The Team</h2>
          <hr className="teamHr" />
        </div>
        <Row className="teamRow">
          <Col xs={12} sm={12} md={4} lg={4}>
            <TeamGuy
              bio="Stefan Stahl grew up biking, skiing, climbing and hiking in Boulder Colorado. His main goals in life are to be in the outdoors as much as possible and Wander is the embodiment of this mentality."
              imgSrc="https://static.wixstatic.com/media/630e8e_c4088d71746248daad5ac3014f35ac20~mv2.jpg/v1/fill/w_230,h_228,al_c,q_80,usm_0.66_1.00_0.01/630e8e_c4088d71746248daad5ac3014f35ac20~mv2.webp"
              jobTitle="Co-Founder & CFO"
              name="Stefan Stahl"
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <TeamGuy
              bio="Heidi Bailey is originally from Upstate NY where she grew up alpine ski racing, rowing and mountain biking. She loves the outdoors and interacting with fellow enthusiasts. Go Wander!"
              imgSrc="https://static.wixstatic.com/media/630e8e_f6ffcc379dfb44bcb9dfeb0ad8ee02bc~mv2.jpg/v1/fill/w_230,h_228,al_c,q_80,usm_0.66_1.00_0.01/630e8e_f6ffcc379dfb44bcb9dfeb0ad8ee02bc~mv2.webp"
              jobTitle="Co-Founder & Head of Marketing"
              name="Heidi Bailey"
            />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <TeamGuy
              bio="Evan grew up in Minnesota where he developed a love for the outdoors at an early age. If he's not coding, he is probably out hunting, fishing, wakesurfing, or mountain biking."
              imgSrc="https://static.wixstatic.com/media/630e8e_8ff622e542f5439591af58032438d95c~mv2.jpg/v1/fill/w_230,h_228,al_c,q_80,usm_0.66_1.00_0.01/630e8e_8ff622e542f5439591af58032438d95c~mv2.webp"
              jobTitle="Software Engineer"
              name="Evan Allen"
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default About;
