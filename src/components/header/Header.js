import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const Header =({theme, showImage})=> {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  console.log('showImage',showImage);
  
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const onMouseEnter = (event, color) => {
    const el = event.target;
    console.log('el',el);
    el.style.backgroundColor = color;
  };
  
  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "rgba(0, 0, 0,.4)";
  };
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
       <div style={{alignItems: 'center'}}>
        {showImage ?<img
          src={require(`../../assets/images/mainNoy.png`)}
          alt=""
          width='100%'
          style={{ top: 0, zIndex: 0}}
        />:<div style={{height: 50}}/>}
        </div>
        <SeoHeader />
        <div className="menu-container">
          <header style={{direction: 'rtl'}} className="header">
          <input onClick={()=> setIsDropdownOpen(false)} className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
          <ul className="menu" style={{ backgroundColor:'transparent' }}>
            <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: 'white' }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  צור קשר
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: 'white' }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  השכלה
                </NavLink>
              </li>
                          <li
        className="dropdown"
        onMouseEnter={(event) => {
          handleDropdownToggle()
          onMouseEnter(event, theme.highlight)}}
          onMouseOut={(event) => onMouseOut(event)}
      >
        <NavLink
          to="/expertise"
          tag={Link}
          onClick={handleDropdownToggle}
          style={{ color: 'white',zIndex: 999 }}

        >
          תוחמי התמחות
        </NavLink>

        {/* Dropdown content */}
        {isDropdownOpen && (
          <ul className="dropdown-content" style={{ position: 'absolute', display:'flex', flexDirection: 'column',}}>
            <li>
              <NavLink
                to="/expertise/enduring-power"
                tag={Link}
                activeStyle={{ fontWeight: 'bold' }}
                style={{ color: 'white',zIndex: 999  }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                יפוי כוח מתמשך
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/expertise/real-estate"
                tag={Link}
                activeStyle={{ fontWeight: 'bold',zIndex: 999 }}
                style={{ color: 'white'  }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
              מקרקעין
              </NavLink>
            </li>
            <li style={{}}>
                <NavLink
                  to="/expertise/family"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold",  }}
                  style={{ color: 'white' }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  משפחה
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/expertise/drafting-agreements"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: 'white' }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  ניסוח הסכמים
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/expertise/national-insurance"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: 'white' }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                ביטוח לאומי
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/expertise/drafting-agreements"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: 'white' }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  ניסוח הסכמים
                </NavLink>
              </li>
          </ul>
        )}
              </li>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: 'white' }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  ראשי
                </NavLink>
              </li>
            </ul>
            <NavLink to={link} tag={Link} className="logo">
              {/* <span className="logo-name" style={{ color: 'white', fontSize: 30 }}>
                {greeting.logo_name}
              </span> */}
            </NavLink>


          </header>
        </div>
      </Fade>
    );
  }
export default Header;
