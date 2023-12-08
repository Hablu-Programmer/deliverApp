import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper d-flex flex-column d-lg-grid h-100">
        <div className="login__content d-flex flex-column align-items-center">
          <img src="/public/rokect.png" alt="" className="logo" />
          <div className="container HeroArea">
            <h1 className="text-light text-center ">
              Step into the world
              <span className="TextEffect"> of privacy and</span>
              <br />
              security{" "}
              <span className="TextEffect"> with our Residential VPN.</span>
            </h1>
          </div>
          <div className="HeroImg">
            <img
              src="./LINUSLANDINGPAGE.png"
              alt=""
              className="img-fluid mx-auto d-block"
            />
          </div>
        </div>
        <form className="login__form">
          <div className="title-area d-flex align-items-center gap-3 mb-4">
            <img src="/public/login-icon.png" alt="" />
            <h3 className="text-white">Login</h3>
          </div>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <div className="differnt-login d-flex flex-column align-items-end">
            <a href="#" className="text">
              Forgot your password?
            </a>
            <a href="#" className="text">
              Not a member? Sign up
            </a>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <ReCAPTCHA sitekey={"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} />
          </div>
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-primary">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
