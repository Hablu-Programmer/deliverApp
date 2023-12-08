import Navbar from "../component/dashboard/navbar";
import Sidebar from "../component/dashboard/Sidebar";

const Billing = () => {
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
            <div className="cards d-flex flex-column flex-lg-row gap-4 mt-5 pb-5">
              <div className="card w-100 py-5">
                <div className="title-area d-flex flex-column align-items-center">
                  <img src="/stripe.png" alt="" className="mb-4" />
                  <p className="text mb-4">Insert amount</p>
                  <button className="btn btn-primary">Pay with Card</button>
                </div>
              </div>
              <div className="card w-100 py-5">
                <div className="title-area d-flex flex-column align-items-center">
                  <img src="/cryptomus.png" alt="" className="mb-4" />
                  <p className="text mb-4">Insert amount</p>
                  <button className="btn btn-primary">Pay with Crypto</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
