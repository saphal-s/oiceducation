import React from "react";
import Hero from "../components/header/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      {/* course highlights start */}
      <div className="course_highlights">
        <div className="container">
          <div className="course_card">
            <h4>Full Stack Development</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              animi quibusdam quod voluptate. Magnam illum eius aspernatur ...
            </p>
            <button>read more</button>
          </div>
          <div className="course_card">
            <h4>Application Development</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              animi quibusdam quod voluptate. Magnam illum eius aspernatur ...
            </p>
            <button>read more</button>
          </div>
          <div className="course_card">
            <h4>Data Science</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              animi quibusdam quod voluptate. Magnam illum eius aspernatur ...
            </p>
            <button>read more</button>
          </div>
        </div>
      </div>
      {/* course highlights end */}
      {/* popular course stction start */}
      <div className="popular_course">
        <div className="head">
          <h2>Popular Course</h2>
        </div>
        <div className="container">
          <div className="course_card">
            <img src="./images/ai.jpg" alt="ai_image" />
            <h5>Artificial Intelligence</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
            <div className="author">
              <div className="author_image">
                <img src="./images/12.jpg" alt="" />
              </div>
              <div className="author_name">
                <p className="name">
                  Lorem Ipsum, <span>Author</span>
                </p>
              </div>
              <div className="price">
                <p>$100</p>
              </div>
            </div>
          </div>
          <div className="course_card">
            <img src="./images/ml.webp" alt="ai_image" />
            <h5>Machine Learning</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
            <div className="author">
              <div className="author_image">
                <img src="./images/12.jpg" alt="" />
              </div>
              <div className="author_name">
                <p className="name">
                  Lorem Ipsum, <span>Author</span>
                </p>
              </div>
              <div className="price">
                <p>$200</p>
              </div>
            </div>
          </div>
          <div className="course_card">
            <img src="./images/blockchain.webp" alt="ai_image" />
            <h5>Blockchain</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing...</p>
            <div className="author">
              <div className="author_image">
                <img src="./images/12.jpg" alt="" />
              </div>
              <div className="author_name">
                <p className="name">
                  Lorem Ipsum, <span>Author</span>
                </p>
              </div>
              <div className="price">
                <p>$100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* popular course stction end */}
      {/* mid section start */}
      <div className="mid_section">
        <div className="container">
          <div className="mid_text">
            <h1>Not Yet Satisfied with our Trend?</h1>
          </div>
          <div className="button">
            <button>Join Now</button>
          </div>
        </div>
      </div>
      {/* mid section  end */}
      {/* testimonial section start */}
      <div className="testimonial_section">
        <div className="head">
          <h2>What our students say</h2>
        </div>
        <div className="container">
          <div className="testimonial_card">
            <div className="testi_image">
              <img src="./images/12.jpg" alt="" />
            </div>
            <div className="testi_content">
              <p>
                <i className="fa-solid fa-quote-left" />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae error delectus dolorum blanditiis omnis porro itaque
                at, veniam vero repellendus reprehenderit ea nihil minus
                cupiditate quae ab quisquam veritatis animi.
                <i className="fa-solid fa-quote-right" />
              </p>
            </div>
            <div className="name_and_position">
              <h4>-Saphal Subedi</h4>
              <p>Web and Mobile Application Developer</p>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial section end */}
    </>
  );
};

export default Home;
