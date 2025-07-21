import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-start">
          <div className="footer-start-left">
            <span id="nike-text">NIKE. <br/>JUST DO IT.</span>
          </div>
          <div className="right-top">
            <a href="#" className="return">RETURN TO TOP ^</a>
            <hr id="line2"/>
            <div className="footer-start-right">
              <div className="right-1">
                <ul>
                  <li id="heading">Resources</li>
                  <li>Find a Store</li>
                  <li>Become a Member</li>
                  <li>Running Shoe Finder</li>
                  <li>Product Advice</li>
                  <li>Send Us Feedback</li>
                </ul>
              </div>
              <div className="right-1">
                <ul>
                  <li id="heading">Help</li>
                  <li>Get Help</li>
                  <li>Order Status</li>
                  <li>Delivery</li>
                  <li>Returns</li>
                  <li>Payment Options</li>
                  <li>Contact Us</li>
                </ul>
              </div>
              <div className="right-1">
                <ul>
                  <li id="heading">Company</li>
                  <li>About Nike</li>
                  <li>News</li>
                  <li>Careers</li>
                  <li>Investors</li>
                  <li>Sustainability</li>
                  <li>Impact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <span id="footer-end">© 2025 Nike, Inc. All rights reserved</span>
      </div>
    </>
  );
};

export default Footer;
