import React from "react";

export default function ContentHeader() {
  return (
    <div className="flex justify-center">
      {/* danh muc */}
      <div
        className="flex justify-center items-center"
        style={{
          width: "1200px",
          height: "60.8px",
          padding: "0px 20px",
          background: "#ffffff",
          marginTop: "15px",
        }}
      >
        <div
          style={{
            width: "1140px",
            height: "19.2px",
            margin: "0px 20px 0px 0px",
            color: "#0000008A",
            fontSize: "16px",
          }}
        >
          DANH MỤC
        </div>
      </div>
    </div>
  );
}
