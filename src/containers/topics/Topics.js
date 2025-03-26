import React from "react";
import "./Topics.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Topics(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div style={{direction: 'rtl', fontFamily: 'rubik-regular'}} className="greet-main" id="greeting">
        <div className="greeting-main" >
        <div className="greeting-image-div">
            {/* <FeelingProud theme={theme} /> */}
          </div>
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                תחומי עיסוק
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                   {greeting.nickname} 
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
            </div>
          </div>

        </div>
      </div>
    </Fade>
  );
}
