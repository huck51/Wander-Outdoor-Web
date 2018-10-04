import React from 'react';
import { Link } from 'react-router-dom';

const SubscriptionDetails = () => (
  <div className="container">
    <h1>Subscription Details</h1>
    <Link to={`/business-member/payments`} >
      <button>Upgrade to Business Membership</button>
    </Link>
  </div>
);

export default SubscriptionDetails;
