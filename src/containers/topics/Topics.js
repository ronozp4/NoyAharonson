import React from "react";
import "./Topics.css";
import { greeting, businessAreasData } from "../../portfolio";
import { useLocation } from 'react-router-dom'


export default function Topics(props) {
  const theme = props.theme;
  const location = useLocation();
  return (
      <div style={{direction: 'rtl', fontFamily: 'rubik-regular'}} className="greet-main" id="greeting">
        <div className="greeting-main" >
        <div className="greeting-image-div">
        <img
                  src={require(`../../assets/images/aboutnoy.jpg`)}
                  alt=""
                  style={{  borderRadius: '50%',
                    objectFit: 'cover'}}
                />
          </div>
          <div className="greeting-text-div">

            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                תחומי התמחות
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                   {businessAreasData[location.pathname].title} 
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
  );
}
