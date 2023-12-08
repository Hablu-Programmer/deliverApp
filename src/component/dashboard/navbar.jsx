const Navbar = ({ sidebar, setSidebar }) => {
  return (
    <div className="nav d-flex justify-content-between">
      <div className="d-flex align-items-center gap-2">
        <button
          className="btn btn-primary btn-sidebar d-lg-none"
          onClick={() => setSidebar(!sidebar)}>
          {sidebar ? (
            <svg className="icon">
              <use xlinkHref="/public/icons.svg#icon-arrow-left1"></use>
            </svg>
          ) : (
            <svg className="icon">
              <use xlinkHref="/public/icons.svg#icon-arrow-right"></use>
            </svg>
          )}
        </button>
        <h2 className="heading mb-0">Dashboard</h2>
      </div>
      <div className="btn-area">
        <span>Refresh</span>
        <button className="refresh-btn d-flex align-items-center">
          <svg className="icon">
            <use xlinkHref="/public/icons.svg#icon-loop2"></use>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
