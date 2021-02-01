import React from "react";
import DocumentTitle from "react-document-title";
import Header from "./Header";
import Banner from "./Banner";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import Footer from "./Footer";
import "./static/styles/style";
let timer;
class Home extends React.PureComponent {
  state = {
    isFirstScreen: true,
    isMobile: false,
  };

  componentDidMount() {
    console.log("mounted");
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    console.log("dismount");
    window.removeEventListener("resize", this.updateDimensions);
    this.setState = () => {
      return;
    };
  }

  updateDimensions = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      console.log(window.innerWidth <= 1000);
      this.setState({
        isMobile: window.innerWidth <= 1000,
      });
    }, 200);
  };
  onEnterChange = (mode) => {
    this.setState({
      isFirstScreen: mode === "enter",
    });
  };
  render() {
    return [
      <Header
        key="header"
        isFirstScreen={this.state.isFirstScreen}
        isMobile={this.state.isMobile}
      />,
      <Banner key="banner" onEnterChange={this.onEnterChange} />,
      <Page1 key="page1" isMobile={this.state.isMobile} />,
      <Page2 key="page2" />,
      <Page3 key="page3" isMobile={this.state.isMobile} />,
      <Page4 key="page4" />,
      <Footer key="footer" />,
      <DocumentTitle title="Web Unique" key="title" />,
    ];
  }
}
export default Home;
