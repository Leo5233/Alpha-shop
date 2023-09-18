// import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Address from './components/step/Address'
import Shipping from './components/step/Shipping'
import CreditCard from './components/step/CreditCard'
import Step from './components/step/Step'
import Progress from './components/step/Progress'
import MainFrame from './components/MainFrame'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>

      {/* <Header /> */}
      <Header />

      <MainFrame>
        {/* <!-- register --> */}
        <section className="register-container col col-lg-6 col-sm-12" data-phase="1" data-total-price="0">
          {/* <!-- register-title --> */}
          <h2 className="register-title col col-12">結帳</h2>

          {/* 1.<!-- register-progress --> */}
          <Progress />
          {/* <!-- register-htmlForm --> */}
          <section className="htmlForm-container col col-12">
            {/* 2.<!-- address phase --> */}
            <Address />
            {/* 3. <!-- shipping phase --> */}
            <Shipping />
            {/* 4.<!-- credit-card phase --> */}
            <CreditCard />
            {/* 5.<!-- choose phase --> */}
            <Step />
          </section>
        </section>

        {/* <!-- cart --> */}
        <section className="cart-container col col-lg-5 col-sm-12">
          <h3 className="cart-title">購物籃</h3>

          <section className="product-list col col-12" data-total-price="0">
            <div className="product-container col col-12" data-count="0" data-price="3999">
              <div className="product-img">
                <img className="img-container" src="../public/images/product-1.jpg" />
              </div>
              <div className="product-name">破壞補丁修身牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                    <object data="../../public/icons/minus.png" type="image/svg+xml" />
                    <span className="product-count">1</span>  
                    <object data="../../public/icons/plus.png" type="image/svg+xml" />
                </div>
              </div>
              <div className="price">$3,999</div>
            </div>

            <div className="product-container col col-12" data-count="1" data-price="3999">
              <div className="product-img">
                <img className="img-container" src="../public/images/product-2.jpg" />
              </div>
              <div className="product-name">刷色直筒牛仔褲</div>
              <div className="product-control-container">
                <div className="product-control">
                  <object data="../../public/icons/minus.png" type="image/svg+xml" />
                  <span className="product-count">1</span>
                  <object data="../../public/icons/plus.png" type="image/svg+xml" />
                </div>
              </div>
              <div className="price">$1,299</div>
            </div>
          </section>

          <section className="cart-info shipping col col-12">
            <div className="text">運費</div>
            <div>免費</div>
            <div className="price"></div>
          </section>
          <section className="cart-info total col col-12">
            <div className="text">小計</div>
            <div>$5,298</div>
            <div className="price"></div>
          </section>
        </section>
      </MainFrame>

      {/* <!-- footer --> */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo-container">
              <object data="../../public/icons/logo.png" type="image/svg+xml" />
          </div>
          <section className="footer-section">
            <h2 className="section-title">客戶服務</h2>
            <div className="section-content">
              <a className="page-link" href="#">運送說明</a><br />
              <a className="page-link" href="#">退換貨相關</a><br />
              <a className="page-link" href="#">付款資訊</a><br />
              <a className="page-link" href="#">FAQ</a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">關於我們</h2>
            <div className="section-content">
              <a className="page-link" href="#">品牌故事</a><br />
              <a className="page-link" href="#">媒體聯繫</a><br />
              <a className="page-link" href="#">Press kit</a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">資訊</h2>
            <div className="section-content">
              <a className="page-link" href="#">隱私權政策</a><br />
              <a className="page-link" href="#">Cookie</a><br />
              <a className="page-link" href="#">GDPR</a>
            </div>
          </section>
          <section className="footer-section">
            <h2 className="section-title">追蹤 ALPHA Shop</h2>
            <div className="section-content">
              <div className="tel-info">+886 02123-45678</div>
              <div className="social-icon-group">
                  <object data="../../public/icons/facebook.png" type="image/svg+xml" />
                  <object data="../../public/icons/instagram.png" type="image/svg+xml" />
                  <object data="../../public/icons/whatapp.png" type="image/svg+xml" />
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  )
}

export default App
