export default function Step(){
  return (
    <div className="step-container">
      <div className="step-controller">
        <div className="previous"><img src="../public/icons/left-arrow.svg" />上一步</div>
        <div className="next">下一步<img src="../public/icons/right-arrow.svg" /></div>
      </div>
      <div className="pay">
        <button className="pay-btn" disabled>確認下單</button>
      </div>
    </div>
  );
}