import React, { useState } from "react";
import "./Discount.scss";
import discountImg from "../../../assets/headerImages/discount.svg";
import { useSendRequestCouponMutation } from "../../../api/productApi";
import CheckoutForm from "../../../UI/reused/checkoutForm/CheckoutForm";

function Discount() {
  const [sendingDiscount, setSendingDiscount] = useState(false);
  const [sendDisount] = useSendRequestCouponMutation();
  return (
    <div className="discount__container">
      <div className="discount__container_box">
        <h1>5% off on the first order</h1>
        <div className="form__box">
          <img src={discountImg} alt="" />
          {!sendingDiscount ? (
            <CheckoutForm
              setSendingDiscount={setSendingDiscount}
              sendDiscount={sendDisount}
              classInput="input"
              classBtn="btn"
              textBtn="Get a discount"
            />
          ) : (
            <div className="container__send">
              <p className="text__send">
                Congratulations!!! You have received a discount on all products!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Discount;
