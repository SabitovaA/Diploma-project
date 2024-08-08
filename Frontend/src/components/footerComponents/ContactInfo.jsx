import React from "react";
import "./ContactInfo.scss";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";

function ContactInfo() {
  return (
    <div className="info__container">
      <h2>Contact</h2>
      <div className="info">
        <div className="info__box">
          <p>Phone</p>
          <a href="">+49 999 999 99 99</a>
        </div>
        <div className="info__box">
          <p>Sotials</p>
          <div className="icons">
            <a href="">
              <RiInstagramFill className="icon" />
            </a>
            <a href="">
              <RiWhatsappFill className="icon" />
            </a>
          </div>
        </div>
        <div className="info__box">
          <p>Address</p>
          <a href="">Linkstraße 2,8 OG, 10 785,Berlin,Deutschland</a>
        </div>
        <div className="info__box">
          <p>Working Hours</p>
          <a href="">24 hours a day</a>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
