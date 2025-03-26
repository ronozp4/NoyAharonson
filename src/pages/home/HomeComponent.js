import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import WhatsApp from "../../components/whatsApp/WhatsApp";
import ContactForm from "../../containers/contactMe/ContactForm"
class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />        
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Footer theme={this.props.theme} />
        <WhatsApp theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
        <ContactForm />
      </div>
    );
  }
}

export default Home;
