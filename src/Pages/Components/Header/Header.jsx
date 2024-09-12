import Left from "./Left/Left";
import ListIcon from "./ListIcon";
import Right from "./Right/Right";
import { useEffect, useState } from "react";

export default function Header() {
  // Change background color for the header depended on the window scrolling .
  const [bgColor, setBgColor] = useState("transparent");
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBgColor("#fff");
    } else {
      setBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="header-section" style={{ backgroundColor: bgColor }}>
      <div className="container d-flex justify-content-between align-items-center gap-2">
        <Left />
        <Right />
        <ListIcon />
      </div>
    </div>
  );
}
