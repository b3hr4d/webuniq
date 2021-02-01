import React from "react";
import TweenOne from "rc-tween-one";
import ScrollOverPack from "rc-scroll-anim/lib/ScrollOverPack";
import QueueAnim from "rc-queue-anim";

export default function Page4() {
  return (
    <ScrollOverPack id="page4" className="content-wrapper page">
      <QueueAnim
        className="text-wrapper-bottom"
        key="text"
        leaveReverse
        type="bottom"
      >
        <h2 key="h2">Product Highlights</h2>
        <p key="p">
          Our team is ready to share the knowledge and the experience with our
          customers and partners. MobiDAX skilled staff, tailors our training
          specifically to your team, as expert developers guide you to become
          the PROs. Or let us be the extension of your team, customize and
          maintain your software.
        </p>
      </QueueAnim>
      <TweenOne
        key="image"
        className="image4 bottom-wrapper"
        animation={{
          y: 0,
          opacity: 1,
          duration: 550,
          delay: 150,
          ease: "easeOutQuad",
        }}
        style={{ transform: "translateY(50px)", opacity: 0 }}
      />
    </ScrollOverPack>
  );
}
