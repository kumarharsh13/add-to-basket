import React from 'react'
import '../styles/item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Item() {
  return (
    <div className='item'>
			<div className="item-image">
				<img src="/images/Pathar.jpg" alt="stone" />
			</div>
			<div className="item-details">
				<h3>Stone</h3>
				<p>Paani me pathr</p>
				<p><b>Raing:</b> 5 <FontAwesomeIcon icon={faStar} style={{color: "#2CB835",}} /></p>
				<div className='price-cart'>
					<h4>$120</h4>
					<button>Add to Cart</button>
				</div>
			</div>
    </div>
  )
}

export default Item