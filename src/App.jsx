// import { useState } from 'react'
import './main.scss'
import MainFrame from './components/MainFrame'
import Header from './components/Header'
import Address from './components/step/Address'
import Shipping from './components/step/Shipping'
import CreditCard from './components/step/CreditCard'
import Step from './components/step/Step'
import Progress from './components/step/Progress'
import Buy from './components/Buy'
import Footer from './components/footer/Footer'
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
          {/* <!-- register-progress --> */}
          <Progress />
          {/* <!-- register-htmlForm --> */}
          <section className="htmlForm-container col col-12">
            {/* <!-- address phase --> */}
            <Address />
            {/*  <!-- shipping phase --> */}
            <Shipping />
            {/* <!-- credit-card phase --> */}
            <CreditCard />
            {/* <!-- choose phase --> */}
            <Step />
          </section>
        </section>
        {/* <!-- Cart & Items--> */}
        <Buy />
      </MainFrame>
      {/* <!-- footer --> */}
      <Footer />
    </>
  )
}

export default App
