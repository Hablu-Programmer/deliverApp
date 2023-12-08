function Footer() {
  return (
    <div>
      {/* footer area  */}
      <div className="FooterText container mx-auto">
        <img src="./rokect.png" alt="" className="img-fluid mx-auto d-block" />
        <p>
          Step into the world{" "}
          <span className="TextEffect">of privacy and </span>
          security with <span className="TextEffect">
            our Residential VPN.
          </span>{" "}
        </p>
      </div>

      <footer className="FooterArea">
        <div className="footer py-5">
          <div className="container">
            <div className="row align-items-center gy-3">
              <div className="col-12 col-lg-6">
                <div className="about-company">
                  <p className="text-white-50 d-flex justify-content-center">
                    <img
                      src="./rokect.png"
                      alt=""
                      className="img-fluid mx-auto me-2 d-block"
                    />
                    <span>
                      {" "}
                      Copyright © 2023 All Rights Reserved by ResiVPN{" "}
                    </span>
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="d-flex flex-column flex-sm-row gap-5 justify-content-center justify-content-lg-start">
                  <div className="footer-links links">
                    <h4 className="mt-lg-0 mt-sm-3">Legal</h4>
                    <ul className="m-0 p-0">
                      <li>
                        {" "}
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Terms Of Services</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-links links">
                    <h4 className="mt-lg-0 mt-sm-3">Social Media</h4>
                    <ul className="m-0 p-0">
                      <li>
                        {" "}
                        <a href="#">Discord</a>
                      </li>
                      <li>
                        <a href="#">Twiter</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* footer area  */}
    </div>
  );
}

export default Footer;
