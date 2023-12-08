import React from "react";
import MyNav from "./MyNav";
import Hero from "./Hero";
import Footer from "./Footer";

function HomePage2() {
  return (
    <div>
      <div className="StoreBG">
        <MyNav />
        <div className="storeHero">
          <Hero title="something" subtitle="something" btns={false} />
        </div>

        <div className="PurchaseBox container">
          <div className="TopText1">$15/m</div>
          <div className="row gy-0 mb-5 p-2">
            <div className="col-lg-4 PurchaseVPN">
              <h4>Resi VPN</h4>
              <p>
                Static residential IP's directly from ISPs now owned by you for
                as long as you desire.
              </p>
              <div className="text-center">
                <button className="btn btn-primary btn-lg">Purchase</button>
              </div>
            </div>
            <div className="col-lg-4 Datacenter">
              <div className="d-flex justify-content-center justify-content-lg-end">
                <p className="HostingPrice">Hosting</p>
              </div>
              <h4>Datacenter</h4>
              <p>
                Although we provide a residential service here, everything is
                hosted on dedicated servers in our carefully selected
                Datacenters with high speed 10GBPS ports.
              </p>
            </div>
            <div className="col-lg-4 Datacenter">
              <div className="d-flex justify-content-center justify-content-lg-end">
                <p className="HostingPrice">Unique</p>
              </div>
              <h4>No shared IPS.</h4>
              <p>
                The IP you receive when connecting to one of our servers is
                unique to you and you only.
              </p>
            </div>
          </div>

          <div className="UptimeBox">
            <div className="row">
              <div className="col-6 col-lg-4 UptimeP">
                <p>Uptime 99%</p>
                <p>10 GBPs</p>
                <p>24/7 Support</p>
                <p>Unique IP</p>
              </div>
              <div className="col-6 col-lg-3 CheckIcons">
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#fff"
                    className="bi bi-check-lg"
                    viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                  </svg>
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#fff"
                    className="bi bi-check-lg"
                    viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                  </svg>
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#fff"
                    className="bi bi-check-lg"
                    viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                  </svg>
                </p>
                <p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="#fff"
                    className="bi bi-check-lg"
                    viewBox="0 0 16 16">
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022" />
                  </svg>
                </p>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>

        {/* subscription area  */}
        <div className="subscription container">
          <h3 className="d-none d-lg-block">
            Your monthly VPN <br /> subscription includes
          </h3>
          <h3 className="d-lg-none">Your monthly VPN subscription includes</h3>
          <div className="row gy-5 gx-4">
            <div className="col-md-6 col-lg-4">
              <div className="SubsBox">
                <h3>Resi VPN</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="SubsBox">
                <h3>Resi VPN</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="SubsBox">
                <h3>Resi VPN</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="d-none d-lg-block col-lg-2"></div>
            <div className="col-md-6 col-lg-4 mt-lg-5">
              <div className="SubsBox">
                <h3>Resi VPN</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mt-lg-5">
              <div className="SubsBox">
                <h3>Resi VPN</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        {/* subscription area  */}

        <div className="Setup container">
          <h2 className="text-white w-100 text-center mb-5">Quick Satup</h2>
          <div className="row gy-5 gx-4">
            <div className="col-md-6 col-lg-4">
              <div className="SubsBox">
                <h3>Resi VPN</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="SubsBox">
                <h3>Resi VPN</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="SubsBox">
                <h3>Resi VPN</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Area   */}
        <Footer />
        {/* Footer Area   */}

        <div className="StoreDownPadding"></div>
      </div>
    </div>
  );
}

export default HomePage2;
