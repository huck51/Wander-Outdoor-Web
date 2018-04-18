import React, { Component } from 'react';
import './Styles/footer.css';


class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div>
          <a href="https://www.facebook.com/wanderoutdoor.co/" target="_blank">Facebook</a>
        </div>
        <div>
          <a href="https://www.instagram.com/wanderoutdoorllc/" target="_blank">Instagram</a>
        </div>
      </div>
    );
  }
}

export default Footer;
