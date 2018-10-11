import React from 'react';
import { Link } from 'react-router-dom';

const SubscriptionDetails = () => (
  <div className="container">
    <h1>Subscription Details</h1>
    <p>For your $80 monthly subscription, you’re getting access to the largest central database of explorers seeking guides. This means that instead of undirected marketing, every dollar you spend with Wander is reaching the right people. At the beginning of every month if your payment is confirmed, you will gain full access to the site. Fill your profile with guides, trips, activities and photos. Users can search your content directly for guides, trips. Ratings are handled through the platform and with a positive rating, you’ll have a greater chance of being selected! While navigating our site, if the user expresses interest in a particular guide or trip, they are redirected through your standard booking avenues so the user feels comfortable knowing their money is going to who they think it is. The amount of money it costs your company to subscribe to Wander is equivalent to about one fourth of a guided day trip, so if we send one trip your way this month, your company has a positive ROI. If you’re still not convinced, we give you the first month charge free as a trial to prove to you we can be a positive source of income for your company.</p>
    <Link to={`/business-member/payments`} >
      <button>Upgrade to Business Membership</button>
    </Link>
  </div>
);

export default SubscriptionDetails;
