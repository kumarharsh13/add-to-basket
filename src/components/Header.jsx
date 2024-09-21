import React from "react";
import "../styles/item.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping} from "@fortawesome/free-solid-svg-icons";

function Header({ toHandleCartToggle }) {

  return (
    <div className="header">
      <h1>🧺 Add To Basket</h1>
      <div className="btn-mobile-nav">
        <FontAwesomeIcon
          className="icon-mobile-nav"
          name="menu-outline"
          icon={faCartShopping}
          style={{ color: "#6b4600" }}
          onClick={() => {
            toHandleCartToggle();
          }}
        />
      </div>
    </div>
  );
}

export default Header;
