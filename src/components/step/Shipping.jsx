export default function Shipping({step}){
  let shippingclass = "htmlForm"
  if (step !== 2) {
    shippingclass = 'd-none'
  }
  return (
    <div className={shippingclass}>
      <htmlForm className="col col-12" data-phase="shipping">
        <h3 className="htmlForm-title">運送方式</h3>
        <section className="htmlForm-body col col-12">
          <div className="delivery delivery1 " id="delivery1">
            <div className="radio-box-border">
              <label className="radio-group col col-12" data-price="0">          </label>
              <input id="shipping-standard" type="radio" name="shipping" /> 
            </div>
            <div className="radio-info">          
              <div className="col col-12 shipping-text">
                <label htmlFor="shipping-standard">
                  <div className="text">標準運送</div>
                  <div className="price">免費</div>
                </label>
              </div>
              <div className="period col col-12">約 3~7 個工作天</div>
            </div>
          </div>

          <div className="delivery" id="delivery2">
            <div className="radio-box-border">
              <label className="radio-group col col-12" data-price="0500">          </label>
              <input id="shipping-dhl" type="radio" name="shipping" />
            </div>
            <div className="radio-info">
              <div className="col col-12 shipping-text">
                <label htmlFor="shipping-dhl">
                  <div className="text">DHL 貨運</div>
                  <div className="price">$500</div>
                </label>
              </div>
              <div className="period col col-12">48 小時內送達</div>
            </div>
          </div>
        </section>
      </htmlForm>
    </div>
  );
}

const radioContainer1 = document.querySelector('#delivery1')
const radioContainer2 = document.querySelector('#delivery2')
radioContainer1.addEventListener('click', e=>{
  const radio1 = document.querySelector("#shipping-standard")
  radio1.checked = true
  radioContainer1.classList.add('selected')
  radioContainer2.classList.remove('selected')
})
radioContainer2.addEventListener('click', e => {
  const radio2 = document.querySelector("#shipping-dhl")
  radio2.checked = true
  radioContainer2.classList.add('selected')
  radioContainer1.classList.remove('selected')
})
