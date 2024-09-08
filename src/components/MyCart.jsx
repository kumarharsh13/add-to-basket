import React from 'react'
import '../styles/item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function MyCart() {
  return (
    <div className='my-cart'>
			<h2>My Cart</h2>
			<h2><FontAwesomeIcon icon={faCartShopping} style={{color: "#25982c",}} /></h2>
		</div>
  )
}

export default MyCart