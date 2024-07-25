import React from "react";
import "./Sidebar.css";
import Fliptext from "../FlipText/Fliptext";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="social-menu">
        <div className="sidebar-first-section">
          <div className="social-title">
            <p>Social</p>
          </div>
          <ul>
            <li>
              <a href="">
                {" "}
                <Fliptext>LinkedIn</Fliptext>
              </a>
            </li>
            <li>
              <a href=""><Fliptext>Twitter</Fliptext></a>
            </li>
            <li>
              <a href=""><Fliptext>Pintrest</Fliptext></a>
            </li>
            <li>
              <a href=""><Fliptext>Youtube</Fliptext></a>
            </li>
            <li>
              <a href=""><Fliptext>Whatsapp</Fliptext></a>
            </li>
            <li>
              <a href=""><Fliptext>Telegram</Fliptext></a>
            </li>
          </ul>
        </div>
        <div className="sidebar-second-section">
          <div className="pages-title">
            <p>Menu</p>
          </div>
          <ul>
            <li>
              <a href="/"><Fliptext>Home</Fliptext></a>
            </li>
            <li>
              <a href="/services"><Fliptext>Services</Fliptext></a>
            </li>
            <li>
              <a href="/blogs"><Fliptext>Blogs</Fliptext></a>
            </li>
            <li>
              <a href="/about"><Fliptext>About</Fliptext></a>
            </li>
            <li>
              <a href="/contact"><Fliptext>Contact</Fliptext></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="get-in-touch">
        <p>Get in touch</p>
        <div>
          <a href=""><Fliptext>example@gmail.com</Fliptext></a>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
