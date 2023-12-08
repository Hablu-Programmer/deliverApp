import MyNav from "./MyNav";
import Hero from "./Hero";
import Footer from "./Footer";

const companiesData = [
  "./icon.png",
  "./icon.png",
  "./icon.png",
  "./icon.png",
  "./icon.png",
  "./icon.png",
  "./icon.png",
  "./icon.png",
  "./icon.png",
  "./icon.png",
  "./icon.png",
  "./icon.png",
];

function HomePage() {
  return (
    <>
      <div className="HomePageBG">
        
        <div className="SideBarImg">
          <MyNav />
          <Hero />

          <div className="HeroImg container mx-auto">
            <img
              src="./LINUSLANDINGPAGE.png"
              alt=""
              className="img-fluid mx-auto d-block"
            />
          </div>

          {/* Companies area  */}
          <div className="CompaniesHeading mb-5">
            <div className="Companies container mx-auto">
              <p className="text-center ">
                A trusted partner for
                <span className="text-light"> 2,000+</span> <br />
                companies globally.
              </p>

              <div className="row gy-5">
                {companiesData.map((img, i) => {
                  return (
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={i}>
                      <img
                        src={img}
                        alt=""
                        className="img-fluid mx-auto d-block"
                      />
                    </div>
                  );
                })}
                {/* <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div> */}
              </div>

              {/* <div className="row mt-5">
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
                <div className="col-md-2">
                  <img
                    src="./icon.png"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </div> */}
            </div>
          </div>
          {/* Companies area  */}

          {/* web scraping  */}
          <div className="WebScraping container mx-auto">
            <div className="HeroArea">
              <h3 className="text-center text-light">
                Web scraping solutions powering projects of any scale.
              </h3>
              <p className="">
                From various types of proxies or Scraper APIs to advanced
                solutions unblocking any website, experience the power of
                industry-leading our products.
              </p>
            </div>

            <div className="BoxArea">
              <div className="row gy-5">
                <div className="col-12 col-lg-7">
                  <div className="StepOneBox">
                    <img
                      src="./man.png"
                      alt=""
                      className="img-fluid mx-auto d-block mt-4"
                    />
                    <h4>Step into the shadows of online anonymity.</h4>
                    <p>
                      With our state-of-the-art service utilizing IKEv2
                      protocol. Your privacy is our priority, and IKEv2 stands
                      as the guardian of your digital identity. Employing robust
                      encryption, IKEv2 ensures that your online activities
                      remain hidden from prying eyes.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-5">
                  <div className="StepOneBox2">
                    <img
                      src="./icon2.png"
                      alt=""
                      className="img-fluid mx-auto d-block "
                    />
                    <h4>
                      Unlock the power of connectivity across multiple locations
                      with our exclusive service.
                    </h4>
                    <p>
                      We provide a private IPv4 address for each customer,
                      ensuring a personalized and secure online experience.
                      Experience the freedom of a private online space tailored
                      to you, no matter where you are.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="StepOneBox3">
                    <img
                      src="./icon3.png"
                      alt=""
                      className="img-fluid mx-auto d-block mt-4"
                    />
                    <h4>
                      Dive into a world of unparalleled speed and reliability.
                    </h4>
                    <p>
                      With our dedicated servers equipped with robust 10GB
                      ports. Experience the internet like never before as you
                      harness the power of our exclusive infrastructure. Our
                      servers, guarantee optimal performance and stability,
                      ensuring seamless connectivity for your online ventures.
                      With lightning-fast 10GB ports, we redefine the standards
                      of high-speed data transfer, providing you with an
                      unrivaled online experience. Elevate your digital journey
                      with our cutting-edge technology - where speed meets
                      stability, and innovation knows no bounds.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="StepOneBox3">
                    <img
                      src="./icon4.png"
                      alt=""
                      className="img-fluid mx-auto d-block "
                    />
                    <h4>Embark on your digital journey with confidence.</h4>
                    <p>
                      Knowing that our competitive and affordable prices make
                      top-tier services accessible to all. We believe in
                      providing value without compromise, ensuring that quality
                      doesn't come with a hefty price tag. Experience excellence
                      without breaking the bank as we redefine affordability in
                      the realm of cutting-edge solutions. Your satisfaction is
                      our priority, and we're committed to delivering
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* web scraping  */}

          {/* pricing box  */}
          <div className="container PricingAreas overflow-x-hidden">
            <div>
              <div className="pricing-list">
                <div className="PricingBox">
                  <div className="TopText">Unique</div>
                  <h4>No shared IPS.</h4>
                  <p>
                    The IP you receive when connecting to one of our servers is
                    unique to you and you only.
                  </p>
                </div>
                <div className="PricingBox">
                  <div className="TopText">$15/m</div>
                  <h4>Resi VPN</h4>
                  <p>
                    Static residential IP's directly from ISPs now owned by you
                    for as long as you desire.
                  </p>

                  <div className="ListBox">
                    <p className="Activetext">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="black"
                        className="bi bi-check bg-primary rounded me-2"
                        viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      Active <span className="TextEffect">Support</span>
                    </p>

                    <p className="Activetext">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="black"
                        className="bi bi-check bg-primary rounded me-2"
                        viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      private <span className="TextEffect">IP Adress</span>
                    </p>

                    <p className="Activetext">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="black"
                        className="bi bi-check bg-primary rounded me-2"
                        viewBox="0 0 16 16">
                        <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                      </svg>
                      Swap IP <span className="TextEffect">With Ease</span>
                    </p>
                  </div>
                </div>
                <div className="PricingBox">
                  <div className="TopText">Hosting</div>
                  <h4>Datacenter</h4>
                  <p>
                    Although we provide a residential service here, everything
                    is hosted on dedicated servers in our carefully selected
                    Datacenters with high speed 10GBPS ports.
                  </p>
                </div>
                {/* <div className="col-12 col-lg-4"></div>
                <div className="col-12 col-lg-4"></div>
                <div className="col-12 col-lg-4"></div> */}
              </div>
            </div>

            <div className="text-center mt-5">
              <button className="btn btn-primary btn-lg">Check More</button>
            </div>
          </div>
          {/* pricing box  */}

          {/* Footer  */}
          <div className="MyFooterPadding">
          <Footer />
          </div>
          {/* Footer  */}

          {/* <div className="DownBG"></div> */}
        </div>
          <div className="paddingBottom">

          </div>
      </div>
    </>
  );
}

export default HomePage;
