import React from "react";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Icon, Button } from "antd";
import QueueAnim from "rc-queue-anim";

export default function Page2() {
  return (
    <ScrollOverPack id="page2" className="content-wrapper page">
      <QueueAnim
        className="text-wrapper left-text"
        key="text"
        duration={450}
        type="bottom"
        leaveReverse
      >
        <h2 key="h2">Features</h2>
        <p key="p" style={{ maxWidth: 260 }}>
          Front-end Ul is easily customized with your Logo and Colors
        </p>
        <div key="button">
          <a>
            <Button type="primary" size="large">
              PRICING
              <Icon type="right" />
            </Button>
          </a>
        </div>
      </QueueAnim>
      <TweenOne
        key="image"
        className="image2 image-wrapper"
        animation={{ x: 0, opacity: 1, ease: "easeOutQuad" }}
        style={{ transform: "translateX(100px)", opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
