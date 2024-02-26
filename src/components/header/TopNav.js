import "./style.css";
const TopNav = () => {
  return (
    <nav className="top_bar">
      <div className="container">
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
    </nav>
  );
};

export default TopNav;
