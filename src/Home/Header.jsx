import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Menu, Row, Col, Icon, Popover } from "antd";

const searchEngine = "Google";

const menuItem = [
  { name: "HOME", link: "home" },
  { name: "PRICING", link: "pricing" },
  { name: "BLOG", link: "docs/spec" },
  { name: "CONTACT US", link: "docs/react" },
  { name: "WEB DEMO", link: "docs/pattern" },
  { name: "MOBILE APP", link: "docs/resource" },
];

export default class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool,
  };
  state = {
    menuVisible: false,
  };
  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  };
  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  };

  handleSelectFilter = (value, option) => {
    const optionValue = option.props["data-label"];
    return (
      optionValue === searchEngine ||
      optionValue.indexOf(value.toLowerCase()) > -1
    );
  };

  render() {
    const { isFirstScreen, isMoblie } = this.props;
    const { menuVisible } = this.state;
    const headerClassName = classNames({
      clearfix: true,
      "home-nav-white": !isFirstScreen,
    });

    return (
      <header id="header" className={headerClassName}>
        <Row>
          <Col lg={4} md={5} sm={12} xs={12}>
            <a id="logo">
              <img
                alt="logo"
                src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"
              />
              <span>WEB Unique</span>
            </a>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            {console.log(isMoblie)}
            {!isMoblie ? (
              <Menu
                mode={isMoblie ? "inline" : "horizontal"}
                defaultSelectedKeys={["home"]}
                id="nav"
                key="nav"
              >
                {menuItem.map((item) => (
                  <Menu.Item key={item.name}>{item.name}</Menu.Item>
                ))}
              </Menu>
            ) : null}
          </Col>
          <Col lg={0} md={0} sm={12} xs={12}>
            <Popover
              overlayClassName="popover-menu"
              placement="bottomRight"
              content={
                <div className="menu-link">
                  {menuItem.map((item) => (
                    <a key={item.name}>{item.name}</a>
                  ))}
                </div>
              }
              trigger="click"
              visible={menuVisible}
              arrowPointAtCenter
              onVisibleChange={this.onMenuVisibleChange}
            >
              <Icon
                className="nav-phone-icon"
                type="menu"
                onClick={this.handleShowMenu}
              />
            </Popover>
          </Col>
        </Row>
      </header>
    );
  }
}
