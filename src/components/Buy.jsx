import CartItems from '../assets/Cart'
//import static data
let tempCartItems = CartItems

function Products({ Items }) {
  //generate all products from Items
  const listItems = Items.map(item => {
    return (
      <div key={item.id} className="product-container col col-12" data-count={item.quantity} data-price={item.price}>
        <div className="product-img">
          <img className="img-container" src={item.img} />
        </div>
        <div className="product-name">{item.name}</div>
        <div className="product-control-container">
          <div className="product-control">
            <img onClick={handleClick} data-id={item.id} className="minus-btn"  src="../../public/icons/minus.png" alt="minus-image" />
            <span className="product-count">{item.quantity}</span> 
            <img onClick={handleClick} data-id={item.id} className="plus-btn" src="../../public/icons/plus.png" alt="plus-image" />

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

//click +/- button & change the product quantity
function handleClick(event){
  let [quantity, num, id] = ['', 0, 0]
  if (event.target.className === 'plus-btn'){
    quantity = event.target.previousElementSibling 
    num = Number(quantity.innerText) + 1 
    quantity.innerText = num
  } else if (event.target.className === 'minus-btn'){
    quantity = event.target.nextElementSibling
    if (Number(quantity.innerText) > 0 ){
      num = Number(quantity.innerText) - 1 
    }
    quantity.innerText = num
  }
  id = event.target.dataset.id

  //count total price again
  tempCartItems[id - 1].quantity = num
  const price = document.querySelector('.total')
  price.innerText = tempCartItems.reduce(
    function (nextItem, thisItem) {
      return nextItem.price * nextItem.quantity + thisItem.price * thisItem.quantity
    }
  )
}

//count total cost of all products
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
          {/*generate all products from Items*/}
        <Products Items={CartItems}/>
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
          <div className="delivery-price">免費</div>
      </section>
      <section className="cart-info col col-12">
        <div className="text">小計</div>
          <div className="total">$<TotalSum Items={CartItems} /></div>
      </section>
      </section>
      </>
  )
}