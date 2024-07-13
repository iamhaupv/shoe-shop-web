import React, { useEffect, useState } from "react";
import HeaderNavBar from "./HeaderNavBar";
import HeaderContainer from "./HeaderContainer";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`${isSticky ? "sticky top-0 z-50" : ""}`} style={{ background: "#f94c2f" }}>
      <HeaderNavBar />
      <HeaderContainer />
    </div>
  );
}
