import { NavLink, Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <Link to={"/"} className="header__logo">
          <img src="/logo.svg" alt="logo" />
        </Link>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink
                className="header__nav-link"
                to={"/"}
                aria-label="home"
              ></NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                className="header__nav-link"
                to={"/Movies"}
                aria-label="movies"
              ></NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                className="header__nav-link"
                to={"/TVSeries"}
                aria-label="tv series"
              ></NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                className="header__nav-link"
                to={"/Bookmarks"}
                aria-label="bookmarks"
              ></NavLink>
            </li>
          </ul>
        </nav>
        {/* CREATE SOME PROFILE COMPONENT LATER ON */}
        <>
          <img
            className="header__avatar"
            src="/image-avatar.png"
            alt="avatar"
          />
        </>
      </header>
      <main className="app">
        <Outlet />
      </main>
    </>
  );
};

export default Header;
