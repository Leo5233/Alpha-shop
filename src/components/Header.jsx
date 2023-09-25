

export default function Header(){
return (
  <header className="site-header">
    <div className="header-container mx-auto">
      {/* <!-- navbar-toggle --> */}
      <label htmlFor="navbar-toggle" className="burger-container">
        {/* <img src="../public/icons/toggle.svg" width="30px" height="30px" /> */}
        <div className="hamburger"></div>
      </label>
      <input id="navbar-toggle" className="navbar-toggle d-none" type="checkbox" />
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
        {/* <!-- logo --> */}
        <div className="nav-icon cursor-point">
          <a className="header-logo-container" href="#">
            <object data="../../public/icons/logo.png" type="image/svg+xml" />
          </a>
        </div>
        <ul className="nav-list site-action-list">
          {/* <!-- search --> */}
          <li className="nav-item">
            <div className="nav-icon cursor-point">
              <object data="../../public/icons/search.png" type="image/svg+xml" />
            </div>
          </li>
          {/* <!-- cart --> */}
          <li className="nav-item">
            <div className="nav-icon cursor-point">
              <object data="../../public/icons/cart.png" type="image/svg+xml" />
            </div>
          </li>
          <li id="theme-toggle" className="nav-item">
            {/* <!-- moon --> */}
            <div className="nav-icon cursor-point">
              <object data="../../public/icons/moon.png" type="image/svg+xml" />
            </div>
          </li>
        </ul>
      </nav>


    </div>
  </header>

);
}