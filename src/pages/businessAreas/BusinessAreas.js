import React, { Component } from "react";
import Header from "../../components/header/Header";
import Topics from "../../containers/topics/Topics";
import TopButton from "../../components/topButton/TopButton";
import WhatsApp from "../../components/whatsApp/WhatsApp";
class BusinessAreas extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Topics theme={this.props.theme} />
        <WhatsApp theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default BusinessAreas;
