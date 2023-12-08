import { Link, useLocation } from "react-router-dom";

const navData = [
  {
    id: 1,
    title: "Dashboard",
    url: "/dashboard",
    icon: "home",
  },
  {
    id: 2,
    title: "News",
    url: "/news",
    icon: "volume",
  },
  {
    id: 3,
    title: "Settings",
    url: "/settings",
    icon: "settings",
  },
  {
    id: 4,
    title: "Billing",
    url: "/billing",
    icon: "dollar",
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <Link href="/" className="logo d-block">
        <img src="/public/logo.png" alt="" />
      </Link>
      <ul className="sidebar__list">
        {navData.map((item) => {
          const { id, title, url, icon } = item;
          return (
            <li key={id}>
              <Link
                to={url}
                className={
                  location.pathname == url
                    ? "sidebar__link active"
                    : "sidebar__link"
                }>
                <svg className="icon">
                  <use xlinkHref={`/public/icons.svg#icon-${icon}`}></use>
                </svg>
                <span>{title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="bottom-area">
        <div className="report">
          <p className="text text-center mb-2">Something is wrong?</p>
          <button className="btn btn-primary">Report</button>
        </div>
        <div className="profile d-flex align-items-center">
          <figure className="profile__img">
            <img src="/public/profile.png" alt="" />
          </figure>
          <span className="name text-white">Dremfy dremfy</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
