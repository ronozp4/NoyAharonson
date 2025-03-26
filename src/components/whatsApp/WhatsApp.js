import React from "react";
import "./WhatsApp.css";
import styled from "styled-components";

export default function whatsApp({ theme }) {
  function openWhatsApp() {
    window.location.href = "whatsapp://send?text=היי&phone=+0533401350";

  }

  const IconWrapper = styled.span`
  i {
    background-color: '#00FF00';
  }
  &:hover i {
    background-color: '#00FF00';
  }
`;



  const onMouseEnter = (color, bgColor) => {
    /* For the button */
    const whatsApp = document.getElementById("whatsAppBtn");
    whatsApp.style.color = color;
    whatsApp.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow2");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    /* For the button */
    const whatsApp = document.getElementById("whatsAppBtn");
    whatsApp.style.color = color;
    whatsApp.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow2");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <div
      onClick={openWhatsApp}
      id="whatsAppBtn"
      style={{
        color: 'white',
        backgroundColor: '#00FF00',
      }}
      title="WhatsApp Message"
      onMouseEnter={() => onMouseEnter('#00FF00', 'white')}
      onMouseLeave={() => onMouseLeave('white','#00FF00')}
    >
            <IconWrapper>
              <i className={`fab fa-whatsapp`} id={'arrow2'}></i>
            </IconWrapper>
        
    </div>
  );
}
