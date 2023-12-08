import Navbar from "../component/dashboard/navbar";
import Sidebar from "../component/dashboard/Sidebar";

const News = () => {
  return (
    <div className="dashboard billing-page">
      <Sidebar />
      <div className="dashboard__content">
        <Navbar />
        <div className="wrapper">
          <div className="card">
            <div className="title-area d-flex">
              <div className="iconbox">
                <svg className="icon">
                  <use xlinkHref="/public/icons.svg#icon-dollar"></use>
                </svg>
              </div>
              <h3 className="card__heading">Generate IP</h3>
            </div>

            <div className="cards d-flex flex-column gap-4 mt-5 pb-5">
              <div className="card">
                <div className="content-box">
                  <h4 className="text-primary">US</h4>
                  <h4 className="text">
                    Currently only released NA VPN Ashburn VA.{" "}
                  </h4>
                </div>
              </div>
              <div className="card">
                <div className="content-box">
                  <h4 className="text-primary">US</h4>
                  <h4 className="text">
                    Currently only released NA VPN Ashburn VA.{" "}
                  </h4>
                </div>
              </div>
              <div className="card">
                <div className="content-box">
                  <h4 className="text-primary">US</h4>
                  <h4 className="text">
                    Currently only released NA VPN Ashburn VA.{" "}
                  </h4>
                </div>
              </div>
              <div className="card">
                <div className="content-box">
                  <h4 className="text-primary">US</h4>
                  <h4 className="text">
                    Currently only released NA VPN Ashburn VA.{" "}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
