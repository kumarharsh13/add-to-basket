import React from 'react'
import '../styles/item.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faX  } from '@fortawesome/free-solid-svg-icons';

function MyCart({toHandleCartToggle}) {
  return (
    <div className='my-cart'>
      <div className='my-cart-heading'>
        <h2>My Cart <FontAwesomeIcon icon={faCartShopping} style={{color: "#6b4600",}} /></h2>
      </div>
      <div className="btn-mobile-nav">
        <FontAwesomeIcon
            className="icon-mobile-nav"
            name="close-outline"
            icon={faX}
            style={{ color: "#6b4600" }}
            onClick={() => {
              toHandleCartToggle();
            }}
          />
      </div>
		</div>
  )
}

export default MyCart