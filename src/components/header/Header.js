import React, { useState } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const Header =({theme})=> {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const onMouseEnter = (event, color) => {
    const el = event.target;
    el.style.backgroundColor = color;
  };
  
  const onMouseOut = (event) => {
    const el = event.target;
    el.style.backgroundColor = "transparent";
  };
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
                <div style={{alignItems: 'center'}}>
        <img
          src={require(`../../assets/images/mainNoy.png`)}
          alt=""
          width='100%'
          style={{ top: 0, zIndex: 0}}
        />
        </div>
        <SeoHeader />
        <div style={{zIndex: 120, position: 'absolute', top: 0, width: '100%'}}>
          <header style={{direction: 'rtl'}} className="header">
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
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: 'white' }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  ניסיון
                </NavLink>
              </li>
            
                          <li
        className="dropdown"
        onMouseEnter={handleDropdownToggle}
      >
        <NavLink
          to="#"
          tag={Link}
          style={{ color: 'white' }}

        >
          תוחמי התמחות
        </NavLink>

        {/* Dropdown content */}
        {isDropdownOpen && (
          <ul className="dropdown-content" style={{ position: 'absolute', display:'flex', flexDirection: 'column',}}>
            <li>
              <NavLink
                to="/item1"
                tag={Link}
                activeStyle={{ fontWeight: 'bold' }}
                style={{ color: 'white',  }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
                יפוי כוח מתמשך
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/item2"
                tag={Link}
                activeStyle={{ fontWeight: 'bold' }}
                style={{ color: 'white',  }}
                onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                onMouseOut={(event) => onMouseOut(event)}
              >
              מקרקעין
              </NavLink>
            </li>
            <li style={{}}>
                <NavLink
                  to="/item3"
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
                  to="/item4"
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
                  to="/item5"
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
                  to="/item6"
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
              <span className="logo-name" style={{ color: 'white', fontSize: 30 }}>
                {greeting.logo_name}
              </span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>

          </header>
        </div>
      </Fade>
    );
  }
export default Header;
