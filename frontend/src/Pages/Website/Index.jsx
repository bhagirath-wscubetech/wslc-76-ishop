import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import Header from '../../Components/Website/Header';
import BestSeller from '../../Components/Website/BestSeller';
import "../../style.css";
import "../../responsive.css";
export default function Index() {
  return (
    <div className="main-container top-container">
      <div className="container-fluid">
        <div className="row">
          <div className="left-top">
            EN
            <i className="fa fa-caret-down" aria-hidden="true" />
            &nbsp;&nbsp;<span>$</span>&nbsp;
            <i className="fa fa-caret-down" aria-hidden="true" />
          </div>
          <div className="right-top">
            <img src="images/profile_icon.svg" alt="" />
            <span>My Profile</span>&nbsp;&nbsp;
            <img src="images/bag_icon.svg" alt="" />
            <span>2 Items</span>
            <span>$998</span>
            &nbsp;&nbsp;
            <img src="images/search_icon.svg" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="ishop-img">
            <img src="images/iSHOP Logo.svg" alt="image" />
            <div className="close">
              <i className="fa fa-bars" aria-hidden="true" id="bar" />
            </div>
          </div>
          <div className="menu" id="main-menu">
            <div>
              <a href="index.html">Home</a>
            </div>
            <div>
              <a href="index2.html">Store</a>
            </div>
            <div>
              <a href="iphone.html">iphone</a>
            </div>
            <div>
              <a href="ipad.html">ipad</a>
            </div>
            <div>
              <a href="macbook.html">macbook</a>
            </div>
            <div>
              <a href="index3.html">accesories</a>
            </div>
            <div className="close" id="close-menu">
              <i className="fa fa-times" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="row">
          <img src="images/2_corousel.png" alt="" />
        </div>
        <BestSeller />
        <div className="row">
          <div className="lord">
            <p>LOAD MORE</p>
          </div>
        </div>
        <div className="row">
          <div className="left-title">
            <p id="phone">iPhone 6 Plus</p>
            <p>
              performance and design Taken <br />
              right to the edge.
            </p>
            <div className="shop-now">SHOP NOW</div>
          </div>
          <div className="right-logo">
            <img src="images/iphone_6_plus.png" alt="" />
          </div>
        </div>
        <div className="row">
          <div className="child">
            <div className="box-icon">
              <img src="images/shipping.svg" alt="" style={{ color: "#ff6875" }} />
            </div>
            <div className="box-head">
              <h3>FREE SHIPPING</h3>
            </div>
            <div className="box-lorem">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                obcaecati id accusamus dicta harum qui non porro Lorem ipsum dolor
                sit amet consectetur
              </p>
            </div>
          </div>
          <div className="child">
            <div className="box-icon">
              <img src="images/refund.svg" alt="" style={{ color: "#ff6875" }} />
            </div>
            <div className="box-head">
              <h3>100% REFUND</h3>
            </div>
            <div className="box-lorem">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                obcaecati id accusamus dicta harum qui non porro Lorem ipsum dolor
                sit amet consectetur
              </p>
            </div>
          </div>
          <div className="child">
            <div className="box-icon">
              <img src="images/support.svg" alt="" style={{ color: "#ff6875" }} />
            </div>
            <div className="box-head">
              <h3>SUPPORT 24/7</h3>
            </div>
            <div className="box-lorem">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                obcaecati id accusamus dicta harum qui non porro Lorem ipsum dolor
                sit amet consectetur
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="heading">
            <h3>FEATURED PRODUCTS</h3>
          </div>
          <div className="parent">
            <div className="cells">
              <div className="left-item">
                <img src="images/beats_solo_2.png" alt="" />
              </div>
              <div className="right-info">
                <b>Beats Solo 2 On Ear Headphones - Black</b>
                <div className="rate">
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#c1c8ce" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span style={{ color: "#ff4858" }}>$499</span>
                  <span
                    style={{ color: "#c1c8ce", textDecoration: "line-through" }}
                  >
                    $599
                  </span>
                </div>
              </div>
            </div>
            <div className="cells">
              <div className="left-item">
                <img src="images/H-squared.png" alt="" />
              </div>
              <div className="right-info">
                <b>H-Squared tvTray</b>
                <div className="rate">
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#c1c8ce" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span style={{ color: "#ff4858" }}>$499</span>
                  <span
                    style={{ color: "#c1c8ce", textDecoration: "line-through" }}
                  >
                    $599
                  </span>
                </div>
              </div>
            </div>
            <div className="cells">
              <div className="left-item">
                <img src="images/Netatmo_rain.png" alt="" />
              </div>
              <div className="right-info">
                <b>Netatmo Rain Gauge</b>
                <div className="rate">
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#ffc600" }}
                    aria-hidden="true"
                  />
                  <i
                    className="fa fa-star"
                    style={{ color: "#c1c8ce" }}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <span style={{ color: "#ff4858" }}>$499</span>
                  <span
                    style={{ color: "#c1c8ce", textDecoration: "line-through" }}
                  >
                    $599
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="lo-go">
              <img src="images/ishop.svg" alt="" />
            </div>
            <div className="-ipsum">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="follow-us">
              <b>follow Us</b>
            </div>
            <div className="-ipsum">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever.
              </p>
              <br />
              <div className="logos">
                <img src="images/facebook.svg" alt="" />
                &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                <img src="images/twitter.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="contact-us">
              <b>Contact Us</b>
            </div>
            <div className="-ipsum">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever.Since the 1500s, when an unknown printer.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2 footer">
            <div className="footer-heading">
              <b>Infomation</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Infomation </a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Policy Terms &amp;Conditions </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 footer">
            <div className="footer-heading">
              <b>Service</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Infomation </a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Policy Terms &amp;Conditions </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 footer">
            <div className="footer-heading">
              <b>Extras</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Infomation </a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Policy Terms &amp;Conditions </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 footer">
            <div className="footer-heading">
              <b>My Account</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Infomation </a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Policy Terms &amp;Conditions </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 footer">
            <div className="footer-heading">
              <b>Userful Links</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Infomation </a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Policy Terms &amp;Conditions </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-2 footer">
            <div className="footer-heading">
              <b>Our Offers</b>
            </div>
            <div className="footer-list">
              <ul>
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Infomation </a>
                </li>
                <li>
                  <a href="">Privacy</a>
                </li>
                <li>
                  <a href="">Policy Terms &amp;Conditions </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>

  )
}
