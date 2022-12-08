/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";

const Footer = () => {
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }
  const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className="footer-half sub-bg section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo">
                <a href="#0">
                  <img
                    className="footer-logo-nyte"
                    src={`${appData.darkLogo}`}
                    alt=""
                  />
                </a>
              </div>
              <div className="con-info custom-font">
                <ul>
                  <li>
                    <span>Email : </span> digital.nyte@gmail.com
                  </li>
                  <li>
                    <span>Address : </span>Dhaka, Bangladesh
                  </li>
                  <li>
                    <span>Phone : </span> (+880) 19731-96345
                  </li>
                  <li>
                    <span>Phone : </span> (+880) 19166-65058
                  </li>
                </ul>
              </div>
              <div className="social-icon">
                <a
                  href="https://www.facebook.com/nyte.digital"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h6 className="custom-font stit simple-btn">Follow Us</h6>
                </a>
                <div className="social">
                  <a
                    href="https://www.facebook.com/nyte.digital"
                    className="icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/nyte.digital/"
                    className="icon"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.behance.net/nytedigital"
                    className="icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © 2022, Developed and Designed by
            <a>&nbsp;NyteDigital</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
