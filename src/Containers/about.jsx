import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SmSection from '../Components/smSection';
import PicSection from '../Components/picSection';
import './Styles/about.css';


const About = () => (
  <div>
    <div className="container">
      <h1>ABOUT US!</h1>
      <p>Wander Outdoor was founded in 2016 with the aim of providing an easier way for people to safely get outside. With the current generation’s outgoing personalities and desire for adventure, there are more and more people venturing into the outdoors. We want to create a way to help them do so. Whether you have your perfect trip in mind, are visiting a new area, or want someone to help you with your local goals, Wander is here to help you Wander On!</p>
    </div>
    <SmSection
      divClasses="OVdiv"
      h2Classes="OVh2"
      heading="Our Vision"
      hrClasses="OVhr"
      pClasses="OVp"
      text="Our vision at Wander Outdoor is to help explorers who are seeking a personalized, guided adventure quickly find the right guide."
    />
    <PicSection
      heading="Modernizing The Industry"
      text="Our company seeks to point the industry in a more modern direction. Wander&#39;s services are catered to both the explorers and guides, allowing for a truly unique and fulfilling experience for customers, and more capability for the guides. Under the current model, explorers choose from a list of trips offered by whatever company they stumble upon on Google. Our company will flip the model upside down and put the power into the hands of the customers."
      picSide="left"
      imgSrc="https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/18921856_10158866046745387_387248477087241180_n.jpg?_nc_cat=0&oh=009d294143240e004a02b9eda6cee3f7&oe=5BECA6C2"
    />
    <SmSection
      divClasses="OPdiv"
      h2Classes="OPh2"
      heading="Our Product"
      hrClasses="OPhr"
      pClasses="OPp"
      text="Our product, the Wander app and website, serves as a singular platform across multiple guides and guiding companies. This allows explorers to compare guides and guiding companies while verifying their legitimacy. Completely mobile and easy to use, the platform connects outdoor guides with potential clients."
    />
    <PicSection
      heading="How It Works"
      text="With Wander, you will have access to countless guides employed by verified guiding companies. This allows YOU to choose your guide based on his or her qualifications and rating, rather than being assigned whichever guide happens to be working that day. Since the guide is the one who influences how rewarding the experience is, you are more likely to have a great trip! The companies are also rated based on the average ratings of their guides, so you can easily see which companies are offering the best services."
      picSide="right"
      imgSrc="https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/18921856_10158866046745387_387248477087241180_n.jpg?_nc_cat=0&oh=009d294143240e004a02b9eda6cee3f7&oe=5BECA6C2"
    />
    <PicSection
      heading="We Do The Work So You Don't Have To"
      text="Wander Outdoor works closely with local, reputable guiding companies to ensure that the guides are certified, permitted, and insured. Freelance and full-time guides working under a company&#39;s operating permits can easily find work through Wander and still work on their own schedule as their own bosses. Wander gives guides the chance to build their personal brands and portfolios, providing the guiding industry with the opportunity to develop it’s own unique personality. Additionally, this gives guides a way to book trips on their own using guideID, a unique ID code that customers can use to request a specific guide. This boosts trips for the guiding company and allows a relationship to be built between guide and explorer. The guiding companies get market exposure through their guides, so it is in their best interests to employ high-quality, personable guides and training techniques to create the highest satisfaction ratings."
      picSide="left"
      imgSrc="https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/18921856_10158866046745387_387248477087241180_n.jpg?_nc_cat=0&oh=009d294143240e004a02b9eda6cee3f7&oe=5BECA6C2"
    />
    <div className="container">
      <h2>OUR VISION</h2>
      <p>Our vision at Wander Outdoor is to help explorers who are seeking a personalized, guided adventure quickly find the right guide.</p>
    </div>
    <div className="container">
      <h2>OUR PRODUCT</h2>
      <p>Our product, the Wander app and website, serves as a singular platform across multiple guides and guiding companies. This allows explorers to compare guides and guiding companies while verifying their legitimacy. Completely mobile and easy to use, the platform connects outdoor guides with potential clients.</p>
    </div>
    <div className="container">
      <h2>MODERNIZING THE INDUSTRY</h2>
      <p>Our company seeks to point the industry in a more modern direction. Wander&#39;s services are catered to both the explorers and guides, allowing for a truly unique and fulfilling experience for customers, and more capability for the guides. Under the current model, explorers choose from a list of trips offered by whatever company they stumble upon on Google. Our company will flip the model upside down and put the power into the hands of the customers.</p>
    </div>
    <div className="container">
      <h2>HOW IT WORKS</h2>
      <p>With Wander, you will have access to countless guides employed by verified guiding companies. This allows YOU to choose your guide based on his or her qualifications and rating, rather than being assigned whichever guide happens to be working that day. Since the guide is the one who influences how rewarding the experience is, you are more likely to have a great trip! The companies are also rated based on the average ratings of their guides, so you can easily see which companies are offering the best services.</p>
    </div>
    <div className="container">
      <h2>WE DO THE WORK SO YOU DON'T HAVE TO</h2>
      <p>Wander Outdoor works closely with local, reputable guiding companies to ensure that the guides are certified, permitted, and insured. Freelance and full-time guides working under a company&#39;s operating permits can easily find work through Wander and still work on their own schedule as their own bosses. Wander gives guides the chance to build their personal brands and portfolios, providing the guiding industry with the opportunity to develop it’s own unique personality. Additionally, this gives guides a way to book trips on their own using guideID, a unique ID code that customers can use to request a specific guide. This boosts trips for the guiding company and allows a relationship to be built between guide and explorer. The guiding companies get market exposure through their guides, so it is in their best interests to employ high-quality, personable guides and training techniques to create the highest satisfaction ratings.</p>
    </div>
    <div className="container">
      <h2>MEET THE TEAM</h2>
      <Row>
        <Col>
          <div>
            <img />
            <h4>Name</h4>
            <p>Bio</p>
          </div>
        </Col>
        <Col>
          <div>
            <img />
            <h4>Name</h4>
            <p>Bio</p>
          </div>
        </Col>
        <Col>
          <div>
            <img />
            <h4>Name</h4>
            <p>Bio</p>
          </div>
        </Col>
      </Row>
    </div>
    <div className="container">
      <h2>FULL TEXT JUST IN CASE - REMOVE FOR PRODUCTION</h2>
      <p>
        Our vision at Wander Outdoor is to help explorers who are seeking a personalized, guided adventure quickly find the right guide. Our product, the Wander app and website, serves as a singular platform across multiple guides and guiding companies. This allows explorers to compare guides and guiding companies while verifying their legitimacy. Completely mobile and easy to use, the platform connects outdoor guides with potential clients.
      </p>
      <p>
        Our company seeks to point the industry in a more modern direction. Wander&#39;s services are catered to both the explorers and guides, allowing for a truly unique and fulfilling experience for customers, and more capability for the guides. Under the current model, explorers choose from a list of trips offered by whatever company they stumble upon on Google. Our company will flip the model upside down and put the power into the hands of the customers. With Wander, you will have access to countless guides employed by verified guiding companies. This allows YOU to choose your guide based on his or her qualifications and rating, rather than being assigned whichever guide happens to be working that day. Since the guide is the one who influences how rewarding the experience is, you are more likely to have a great trip! The companies are also rated based on the average ratings of their guides, so you can easily see which companies are offering the best services.
      </p>
      <p>
        Wander Outdoor works closely with local, reputable guiding companies to ensure that the guides are certified, permitted, and insured. Freelance and full-time guides working under a company&#39;s operating permits can easily find work through Wander and still work on their own schedule as their own bosses. Wander gives guides the chance to build their personal brands and portfolios, providing the guiding industry with the opportunity to develop it’s own unique personality. Additionally, this gives guides a way to book trips on their own using guideID, a unique ID code that customers can use to request a specific guide. This boosts trips for the guiding company and allows a relationship to be built between guide and explorer. The guiding companies get market exposure through their guides, so it is in their best interests to employ high-quality, personable guides and training techniques to create the highest satisfaction ratings.
      </p>
      <p>
        Wander Outdoor was founded in 2016 with the aim of providing an easier way for people to safely get outside. With the current generation’s outgoing personalities and desire for adventure, there are more and more people venturing into the outdoors. We want to create a way to help them do so. Whether you have your perfect trip in mind, are visiting a new area, or want someone to help you with your local goals, Wander is here to help you Wander On!
      </p>
    </div>
  </div>
);

export default About;
