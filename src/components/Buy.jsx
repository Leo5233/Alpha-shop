// import CartItems from '../assets/Cart'
import { cartContext, cardItems } from '../assets/CartContext'
import { useState, useContext } from 'react'
import { sumContext } from "./step/formContext"

export default function Buy(){  
  const [nowCartItems, setNowCartItems] = useState(cardItems)
  const {totalSum, setTotalSum} = useContext(sumContext)
  //click +/- button & change the product quantity
  return (
    <>
      <cartContext.Provider value={nowCartItems}>
    <section className="cart-container col col-lg-5 col-sm-12">
      <h3 className="cart-title">購物籃</h3>
      <section className="product-list col col-12" data-total-price="0">
        {/*generate all products from Items*/}
        
          <Products />
       
      </section>

      <section className="cart-info shipping col col-12">
        <div className="text">運費</div>
          <div className="delivery-price">免費</div>
      </section>
      <section className="cart-info col col-12">
        <div className="text">小計</div>
          <div className="total">$<TotalSum /></div>
      </section>
      </section>
      </cartContext.Provider>
      </>
  )

  function Products() {
    //generate all products from Items
    const Items = useContext(cartContext)
    const listItems = Items.map(item => {
      return (
        <div key={item.id} className="product-container col col-12" data-count={item.quantity} data-price={item.price}>
          <div className="product-img">
            <img className="img-container" src={item.img} />
          </div>
          <div className="product-name">{item.name}</div>
          <div className="product-control-container">
            <div className="product-control">
              <img onClick={handleClickMinus} data-id={item.id} className="minus-btn" src="../../public/icons/minus.png" alt="minus-image" />
              <span className="product-count">{item.quantity}</span>
              <img onClick={handleClickPlus} data-id={item.id} className="plus-btn" src="../../public/icons/plus.png" alt="plus-image" />

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
  
  //change cart items quantity when clicking +
  function handleClickPlus(e) {
    const id = e.target.dataset.id
    const tempCart = nowCartItems.map(item => {
      if (item.id === id && e.target.className === 'plus-btn') {
          return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
    setNowCartItems(tempCart)
  }
  //change cart items quantity when clicking -
  function handleClickMinus(e) {
    const id = e.target.dataset.id
    const tempCart = nowCartItems.map(item => {
      if (item.id === id) {
       if (e.target.className === 'minus-btn' && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 }
        } else {
          return item
        }
      } else {
        return item
      }
    })
    setNowCartItems(tempCart)
  }

  //count total cost of all products
  function TotalSum() {
    const Items = useContext(cartContext)
    const total = Items.reduce(
      function (nextItem, thisItem) {
        return nextItem.price * nextItem.quantity + thisItem.price * thisItem.quantity
      }
    )
    setTotalSum(total)
    return total
  }
}