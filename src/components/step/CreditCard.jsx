export default function CreditCard({step}){
  let creditCardclass = ''
  if (step !== 3){
    creditCardclass = 'd-none'
  }
  return (
    <htmlForm className={creditCardclass} data-phase="credit-card">
      <h3 className="htmlForm-title">付款資訊</h3>
      <section className="htmlForm-body col col-12">
        <div className="col col-12 input-group-row">
          <div className="input-group card-name input-w-lg-4 input-w-sm-full">
            <div className="input-label">持卡人姓名</div>
            <input type="text" placeholder="John Doe" id="card-name" />
          </div>
        </div>

        <div className="col col-12 input-group-row">
          <div className="input-group card-number input-w-lg-4 input-w-sm-full">
            <div className="input-label">卡號</div>
            <input type="text" placeholder="1111 2222 3333 4444" id="card-number" />
          </div>
        </div>

        <div className="col col-12 input-group-row">
          <div className="input-group expire input-w-lg-3 input-w-sm-s3">
            <div className="input-label">有效期限</div>
            <input type="text" placeholder="MM/YY" />
          </div>
          <div className="input-group ccv input-w-lg-3 input-w-sm-s3">
            <div className="input-label">CVC / CCV</div>
            <input type="text" placeholder="123" />
          </div>
        </div>

      </section>
    </htmlForm>
  );
}