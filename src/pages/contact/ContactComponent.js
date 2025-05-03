import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import ContactForm from "../../containers/contactMe/ContactForm"

const ContactData = contactPageData.contactSection;
class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <div style={{display: "flex", justifyContent: "center", zIndex: 111}}>
        <Header theme={theme} />
        </div>
        <div className="basic-contact">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <ContactForm />
              <div className="contact-heading-text-div">
                <p style={{fontSize: 30}}>
                  נוי אהרונסון
                </p>
                <p style={{fontSize: 20, fontWeight: 500}}>
                נייד: 050-4210029
                </p>
                <p style={{fontSize: 20, fontWeight: 500}}>noyaharonson@gmail.com :מייל 
                </p>
                <br />
                <SocialMedia theme={theme} />
              </div>
            </div>
         </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
