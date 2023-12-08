import Sidebar from "../component/dashboard/Sidebar";
import Navbar from "../component/dashboard/navbar";

const Settings = () => {
  return (
    <div className="dashboard settings-page">
      <Sidebar />
      <div className="dashboard__content">
        <Navbar />
        <div className="wrapper d-flex flex-column d-lg-grid">
          <div className="card">
            <div className="title-area d-flex">
              <div className="iconbox">
                <svg className="icon">
                  <use xlinkHref="/public/icons.svg#icon-locked"></use>
                </svg>
              </div>
              <h3 className="card__heading">Reset Password</h3>
            </div>
            <form
              action="#"
              className="form mt-5 h-100 d-flex flex-column justify-content-between">
              <div className="input-groups d-flex flex-column gap-3">
                <input type="email" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <input
                  type="password"
                  name="confirm-password"
                  placeholder="Confirm-Password"
                />
              </div>
              <div className="btns d-flex justify-content-end gap-2 mt-5">
                <button className="btn btn-primary d-flex align-items-center gap-2">
                  2FA
                  <svg className="icon">
                    <use xlinkHref="/public/icons.svg#icon-export"></use>
                  </svg>
                </button>
                <button className="btn btn-primary">Reset</button>
              </div>
            </form>
          </div>
          <div className="card">
            <div className="title-area d-flex">
              <div className="iconbox">
                <svg className="icon">
                  <use xlinkHref="/public/icons.svg#icon-locked"></use>
                </svg>
              </div>
              <h3 className="card__heading">Two-Factor Authentication</h3>
            </div>
            <div className="d-flex flex-column align-items-center gap-3">
              <img src="/public/QR.png" alt="" className="qr-img mt-4" />
              <p className="text text-white">Sample Code</p>
              <p className="text">Sample Code</p>
            </div>
            <div className="btns d-flex justify-content-end mt-4">
              <button className="btn btn-primary">Active</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
