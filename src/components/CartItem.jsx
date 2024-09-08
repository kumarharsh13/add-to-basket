import React from 'react'
import '../styles/item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus, faCircleMinus, faTrash } from '@fortawesome/free-solid-svg-icons';

function CartItem() {
  return (
    <div className="cart-item">
			{/* <table>
				<tr>
					<td><img src="/images/Pathar.jpg" alt="stone" /></td>
					<td>Stone</td>
				</tr>
				<tr>
					<td><span><button>-</button> 2 <button>+</button></span></td>
					<td>$100</td>
				</tr>
			</table> */}
			<div className="cart-item-detail">
				<img src="/images/Pathar.jpg" alt="stone" />
				<div className="cart-item-cost-detail">
					<h4>Stone</h4>
					<span><button><FontAwesomeIcon icon={faTrash} style={{color: "#12971b",}} /></button></span>
					<h4>$100</h4>
					<div className='cart-item-qty'><button><FontAwesomeIcon icon={faCircleMinus} style={{color: "#2cb835",}} /></button><span>2</span><button><FontAwesomeIcon icon={faCirclePlus} style={{color: "#2cb835",}} /></button></div>
				</div>
			</div>
		</div>
  )
}

export default CartItem