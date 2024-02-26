import "./style.css";
const Footer = () => {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="footer_link">
          <h4>Popular Courses</h4>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>Blockchain</li>
            <li>Artificial Intelligence</li>
            <li>Data Science</li>
          </ul>
        </div>
        <div className="footer_link">
          <h4>Quick Links</h4>
          <ul>
            <li>Career</li>
            <li>About Us</li>
            <li>Terms &amp; Service</li>
            <li>Industrial Partners</li>
            <li>Blogs</li>
          </ul>
        </div>
        <div className="footer_link">
          <h4>Features</h4>
          <ul>
            <li>Live Classes</li>
            <li>Recorded Videos</li>
            <li>Jobs &amp; Opportunities</li>
            <li>Task &amp; Review</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer_link">
          <h4>Resources</h4>
          <ul>
            <li>Recorded Videos</li>
            <li>PDF Downloaded</li>
            <li>Jobs &amp; Opportunities</li>
            <li>Task &amp; Review</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer_link">
          <h4>Contact Us</h4>
          <div className="contact_info">
            <ul>
              <li>
                <i className="fa-solid fa-phone" /> +977-2345678
              </li>
              <li>
                <i className="fa-regular fa-envelope" /> abc@gmail.com
              </li>
            </ul>
          </div>
          <div className="social_icons">
            <ul>
              <li>
                <i className="fa-brands fa-facebook-f" />
              </li>
              <li>
                <i className="fa-brands fa-instagram" />
              </li>
              <li>
                <i className="fa-brands fa-youtube" />
              </li>
              <li>
                <i className="fa-brands fa-tiktok" />
              </li>
              <li>
                <i className="fa-brands fa-linkedin-in" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p>©2024.OIC Education. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
