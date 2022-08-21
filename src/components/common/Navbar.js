import React from "react";
import "../../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";

import { IconFlagTR, IconFlagDE, IconFlagUS } from "material-ui-flags";

function Navbar(props) {

  return (
    <div className="header py-0" id="navbar">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__option">
        <span className="header__optionLineOne">
          Deliver to, {props.username}
        </span>
        <span className="header__optionLineTwo">
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          {props.address} {props.zip_code}
        </span>
      </div>
      <div className="header__search">
        <div class="input-group-prepend">
          <select id="inputState" class="form-control">
            <option selected>All</option>
            <option></option>
          </select>
        </div>
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div>
          <IconButton>
            <IconFlagUS />
          </IconButton>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Hello, {props.username}</span>
          <span className="header__optionLineTwo">Account & Lists</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount"></span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;