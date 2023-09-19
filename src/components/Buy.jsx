import CartItems from '../assets/Cart'

function Products({ Items }) {
  const listItems = Items.map(item => {
    return (
      <div key={item.id} className="product-container col col-12" data-count={item.quantity} data-price={item.price}>
        <div className="product-img">
          <img className="img-container" src={item.img} />
        </div>
        <div className="product-name">{item.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <object data="../../public/icons/minus.png" type="image/svg+xml" />
            <span className="product-count">{item.quantity}</span>
            <object data="../../public/icons/plus.png" type="image/svg+xml" />
          </div>
        </div>
        <div className="price">${item.price}</div>
      </div>
    )
  })

  return (
    <>
      {listItems}
    </>
  )
}

function TotalSum({Items}){
  const total = Items.reduce(
    function(nextItem, thisItem){
      return nextItem.price * nextItem.quantity + thisItem.price * thisItem.quantity
    }
  )
  return total
}

export default function Buy(){  
  return (
    <>
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        <Products Items={CartItems}/>
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
        <div>免費</div>
        <div className="price"></div>
      </section>
      <section className="cart-info total col col-12">
        <div className="text">小計</div>
          <div>$<TotalSum Items={CartItems} /></div>
        <div className="price"></div>
      </section>
      </section>
      </>
  )
}