function Hero({ title = "", subtitle = "", btns = "true" }) {
  return (
    <div>
      {/* Hero area  */}
      <div className="container HeroArea">
        <h1 className="text-light text-center d-none d-lg-block">
          Step into the world
          <span className="TextEffect"> of privacy and </span>
          <br />
          security{" "}
          <span className="TextEffect"> with our Residential VPN.</span>
        </h1>
        <h1 className="text-light text-center d-lg-none">
          Step into the world
          <span className="TextEffect"> of privacy and </span>
          security{" "}
          <span className="TextEffect"> with our Residential VPN.</span>
        </h1>
        <p className="text-center HeroP">
          A cutting-edge virtual private network that takes your internet
          experience to the next level. By routing your online activities
          through residential IP addresses distinct from your actual location,
          assigned by internet service providers (ISP) in a specific area, we
          ensure a seamless blend of anonymity and connectivity.
        </p>

        {btns && (
          <div className="text-center mt-3">
            <button className="btn btn-primary me-3 ps-4 pe-4">Login</button>
            <button className="btn btn-primary me-3 ps-4 pe-4">Store</button>
          </div>
        )}
      </div>
      {/* Hero area  */}
    </div>
  );
}

export default Hero;
