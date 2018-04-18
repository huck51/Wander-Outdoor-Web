import React, { Component } from 'react';
import './Styles/footer.css';


class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div>
          <a href="https://www.facebook.com/wanderoutdoor.co/" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
        <div>
          <a href="https://www.instagram.com/wanderoutdoorllc/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
        <div>
          <a href="https://www.wanderoutdoor.co/terms-and-conditions" target="_blank" rel="noopener noreferrer">Terms & Conditions</a>
        </div>
      </div>
    );
  }
}

export default Footer;
