import React from "react";

const Ads = () => {
  return (
    <div className="ads-restaurant-frame">
      <video
        className="ads-video"
        autoPlay={true}
        loop
        muted
        playsInline
        data-video-media=""
      >
        <source type="video/mp4" src="video/burak-ads.mp4" />
      </video>
    </div>
  );
};

export default Ads;
