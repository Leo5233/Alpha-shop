export default function Header(){
return (
  <header className="site-header">
    <div className="header-container mx-auto">
      {/* <!-- navbar-toggle --> */}
      <input id="navbar-toggle" className="navbar-toggle d-none" type="checkbox" />
      <label htmlFor="navbar-toggle" className="burger-container">
        <img src="../public/icons/toggle.svg" width="30px" height="30px" />
      </label>

      {/* <!-- navbar-menu --> */}
      <nav className="navbar-menu">
        <ul className="nav-list site-menu-list mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">男款</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">女款</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">最新消息</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">客製商品</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">聯絡我們</a>
          </li>
        </ul>
        <ul className="nav-list site-action-list">
          {/* <!-- search --> */}
          <li className="nav-item">
            <svg className="nav-icon cursor-point">
              <object data="../public/icons/search.svg" type="image/svg+xml" />
            </svg>
          </li>
          {/* <!-- cart --> */}
          <li className="nav-item">
            <svg className="nav-icon cursor-point">
              <object data="../public/icons/cart.svg" type="image/svg+xml" />
            </svg>
          </li>
          <li id="theme-toggle" className="nav-item">
            {/* <!-- moon --> */}
            <svg className="nav-icon cursor-point">
              <object data="../public/icons/moon.svg" type="image/svg+xml" />
            </svg>
            {/* <!-- sun --> */}
            <svg className="nav-icon cursor-point">
              <object data="../public/icons/sun.svg" type="image/svg+xml" />
            </svg>
          </li>
        </ul>
      </nav>

      {/* <!-- logo --> */}
      <a className="header-logo-container" href="#">
        <svg className="icon-logo cursor-point">
          <object data="../public/icons/logo.svg" type="image/svg+xml" />
        </svg>
      </a>
    </div>
  </header>

);
}