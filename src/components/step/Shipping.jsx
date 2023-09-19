export default function Shipping(){
  return (
    <htmlForm className="col col-12 " data-phase="shipping">
      <h3 className="htmlForm-title">運送方式</h3>
      <section className="htmlForm-body col col-12">
        <div className="delivery active">
          <div className="radio-box-border">
            <label className="radio-group col col-12" data-price="0">          </label>
            <input id="shipping-standard" type="radio" name="shipping" checked /> 
          </div>
          <div className="radio-info">          
            <div className="col col-12 shipping-text">
              <div className="text">標準運送</div>
              <div className="price">免費</div>
            </div>
            <div className="period col col-12">約 3~7 個工作天</div>
          </div>
        </div>

        <div className="delivery">
          <div className="radio-box-border">
            <label className="radio-group col col-12" data-price="0500">          </label>
            <input id="shipping-dhl" type="radio" name="shipping" checked />
          </div>
          <div className="radio-info">
            <div className="col col-12 shipping-text">
              <div className="text">DHL 貨運</div>
              <div className="price">$500</div>
            </div>
            <div className="period col col-12">48 小時內送達</div>
          </div>
        </div>
      </section>
    </htmlForm>
  );
}