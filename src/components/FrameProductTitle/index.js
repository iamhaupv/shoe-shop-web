import React from "react";
import "./FrameProductTitle.css";
export default function FrameProductTitle(props) {
  return (
    <>
      {/* container__frame */}
      <div className="container__frame">
        {/* container__frame__content */}
        <div className="container__frame__content">
          {/* header */}
          <div className="header">
            {/* title */}
            <span className="title">{props.text}</span>
          </div>
          {/* list__products */}
          <div className="list__products">asdflkjaslfkjaslk</div>
        </div>
      </div>
    </>
  );
}
