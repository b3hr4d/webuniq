import React from "react";
import { Row, Col } from "antd";

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>Web Unique</h2>
              <div>
                <a
                  target="_blank "
                  href="https://github.com/ant-design/ant-design"
                >
                  GitHub
                </a>
              </div>
              <div>
                <a href="http://pro.ant.design">Web Unique Pro</a>
              </div>
              <div>
                <a href="http://mobile.ant.design">Web Unique Mobile</a>
              </div>
              <div>
                <a href="http://ng.ant.design">NG-ZORRO</a>
                <span> - </span>
                Web Unique of Angular
              </div>
              <div>
                <a
                  target="_blank "
                  href="https://github.com/websemantics/awesome-ant-design"
                >
                  Awesome Web Unique
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>App</h2>
              <div>
                <a href="http://scaffold.ant.design">Scaffolds</a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/dvajs/dva"
                >
                  dva
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://motion.ant.design"
                >
                  WebUnique
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://library.ant.design/"
                >
                  WebUnique Library
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://ux.ant.design"
                >
                  WebUnique UX
                </a>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                <img
                  className="title-icon"
                  src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                  alt=""
                />
                webuniq
              </h2>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://antv.alipay.com/"
                >
                  WebUnique
                </a>
                <span> - </span>
                Applications
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://eggjs.org/"
                >
                  Egg
                </a>
                <span> - </span>
                Node
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={4} sm={24} />
        <Col lg={20} sm={24}>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              Webuniq
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © 2021</span>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
