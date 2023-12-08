import Sidebar from "../component/dashboard/Sidebar";
import Navbar from "../component/dashboard/navbar";

const Dashboard = ({ sidebar, setSidebar }) => {
  return (
    <div className={sidebar ? "dashboard show" : "dashboard"}>
      <Sidebar />
      <div className="dashboard__content">
        <Navbar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="wrapper d-flex flex-column d-lg-grid">
          <div className="side">
            <div className="card">
              <div className="title-area d-flex">
                <div className="iconbox">
                  <svg className="icon">
                    <use xlinkHref="/public/icons.svg#icon-local_grocery_store"></use>
                  </svg>
                </div>
                <h3 className="card__heading">Generate IP</h3>
              </div>
              <select name="region" id="region">
                <option value="1">Choose a region</option>
                <option value="1">Choose a region</option>
                <option value="1">Choose a region</option>
              </select>
              <div className="bottom-area">
                <button className="btn btn-primary">Generate IP</button>
                <p className="text">
                  After your first IP, its $3.0 per IP. <br /> One IP comes with
                  your subscription.
                </p>
              </div>
            </div>

            <div className="card">
              <div className="title-area d-flex mb-4">
                <div className="iconbox">
                  <svg className="icon">
                    <use xlinkHref="/public/icons.svg#icon-history"></use>
                  </svg>
                </div>
                <h3 className="card__heading">Previous IP Adresses</h3>
              </div>
              <div className="text-box d-flex align-items-center justify-content-between flex-wrap mb-2">
                <p className="text">192.168.0.0.1</p>
                <button className="btn btn-primary">Activate</button>
              </div>
              <div className="text-box d-flex align-items-center justify-content-between flex-wrap mb-2">
                <p className="text">192.168.0.0.1</p>
                <button className="btn btn-primary">Activate</button>
              </div>
              <div className="text-box d-flex align-items-center justify-content-between flex-wrap mb-2">
                <p className="text">192.168.0.0.1</p>
                <button className="btn btn-primary">Activate</button>
              </div>
              <div className="text-box d-flex align-items-center justify-content-between flex-wrap mb-2">
                <p className="text">192.168.0.0.1</p>
                <button className="btn btn-primary">Activate</button>
              </div>
              <div className="text-box d-flex align-items-center justify-content-between flex-wrap mb-2">
                <p className="text">192.168.0.0.1</p>
                <button className="btn btn-primary">Activate</button>
              </div>
              <div className="text-box d-flex align-items-center justify-content-between flex-wrap ">
                <p className="text">192.168.0.0.1</p>
                <button className="btn btn-primary">Activate</button>
              </div>
              {/* <div className="balence">$100,000</div> */}
              {/* <div className="bottom-area">
              <button className="btn btn-primary">Add</button>
            </div> */}
            </div>

            <div className="card">
              <div className="title-area d-flex mb-3">
                <div className="iconbox">
                  <svg className="icon">
                    <use xlinkHref="/public/icons.svg#icon-news"></use>
                  </svg>
                </div>
                <h3 className="card__heading">News</h3>
              </div>
              <div className="content-box">
                <h4 className="text-primary">US</h4>
                <h4 className="text">
                  Currently only released NA VPN Ashburn VA.{" "}
                </h4>
              </div>
            </div>
          </div>
          <div className="side">
            <div className="card">
              <div className="title-area d-flex">
                <div className="iconbox">
                  <svg className="icon">
                    <use xlinkHref="/public/icons.svg#icon-moneybag"></use>
                  </svg>
                </div>
                <h3 className="card__heading">Balence</h3>
              </div>
              <div className="balence">$100,000</div>
              <div className="bottom-area">
                <button className="btn btn-primary">Add</button>
              </div>
            </div>

            <div className="card">
              <div className="title-area d-flex mb-3">
                <div className="iconbox">
                  <svg className="icon">
                    <use xlinkHref="/public/icons.svg#icon-local_grocery_store"></use>
                  </svg>
                </div>
                <h3 className="card__heading">Status</h3>
              </div>
              <div className="content-box">
                <div className="box d-flex justify-content-between align-items-center">
                  <h3>Subscription</h3>
                  <h3 className="value">Inactive</h3>
                </div>
                <div className="box d-flex justify-content-between align-items-center">
                  <h3>IP</h3>
                  <h3 className="value">None</h3>
                </div>
                <div className="box d-flex justify-content-between align-items-center">
                  <h3>Server</h3>
                  <h3 className="value">None</h3>
                </div>
              </div>
              <div className="bottom-area">
                <p className="text text-white">
                  Your subscription is not activated yet.
                </p>
                <button className="btn btn-primary">Purchase ($15)</button>
              </div>
            </div>

            <div className="card">
              <div className="title-area d-flex">
                <div className="iconbox">
                  <svg className="icon">
                    <use xlinkHref="/public/icons.svg#icon-locked"></use>
                  </svg>
                </div>
                <h3 className="card__heading">Request Password</h3>
              </div>

              <div className="bottom-area">
                <button className="btn btn-primary">Generate IP</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
