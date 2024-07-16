import React from "react";

export default function ContentHeader() {
  return (
    <div
      className="flex justify-center"
      style={{
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
        lineHeight: 1.2,
      }}
    >
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
