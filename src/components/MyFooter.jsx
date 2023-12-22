import React from 'react';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
      <div className="row text-center mt-5">
        <div className="col-6 offset-3">
          <div className="row">
            <div className="col col-12 text-start mb-2">
              <IoLogoFacebook className='text-secondary me-2'/>
              <IoLogoInstagram className='text-secondary me-2'/>
              <IoLogoTwitter className="text-secondary me-2"/>
              <IoLogoYoutube className="text-secondary me-2"/>
            </div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4 text-start">
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Audio and Subtitles
                    </a>
                  </p>
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Media Center
                    </a>
                  </p>
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Privacy
                    </a>
                  </p>
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Contact us
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Audio Description
                    </a>
                  </p>
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Investor Relations
                    </a>
                  </p>
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Legal Notices
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Help Center
                    </a>
                  </p>
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Jobs
                    </a>
                  </p>
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Cookie Preferences
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col col-12 footer-links">
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Gift Cards
                    </a>
                  </p>
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Terms of Use
                    </a>
                  </p>
                  <p>
                    <a className='text-secondary text-decoration-none' href="#" alt="footer link">
                      Corporate Information
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-start">
            <div className="col col-12 text-left mb-2">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0 mt-3 text-secondary border-secondary"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row text-start">
            <div className="col col-12 text-left mb-2 mt-2 copyright text-secondary">
              © 1997-2022 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
