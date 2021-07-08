import React from "react";
import { useCssHandles } from "vtex.css-handles";
import "./WishListButton.styles.css";

const CSS_HANDLES = ["wishListButtonContainer", "wishListButtonText"];

const WishListButton = ({ AddListenBtn }) => {
  const handles = useCssHandles(CSS_HANDLES);

  const handleClick = () => {
    const wishListButton = document.querySelector(
      `.${handles.wishListButtonContainer} .vtex-button`
    );

    wishListButton && wishListButton.click();
  };
  return (
    <div onClick={handleClick} className={`${handles.wishListButtonContainer}`}>
      <AddListenBtn />
      <div className={`${handles.wishListButtonText}`}>Add to WishList</div>
    </div>
  );
};

export default WishListButton;
