import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ label, ...options }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (path) => {
    setOpen(false);
    navigate(path);
  };

  const optionList = Object.values(options); 

  return (
    <div
      ref={dropdownRef}
      style={{
        position: "relative",
        display: "inline-block",
        // marginTop: "16px",
      }}
    >
    <span
  onClick={() => setOpen(!open)}
  style={{
    cursor: "pointer",
    fontFamily: "Franklin Gothic Medium",
    color: "black",
    display: "flex",
    alignItems: "center",
    transition: "color 0.3s ease",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.color = '#e89537ff')}
  onMouseLeave={(e) => (e.currentTarget.style.color = "black")}
>
  {label}
  <span style={{ marginLeft: 4 }}>
    <RiArrowDropDownLine />
  </span>
</span>


      {open && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "rgb(240, 238, 238)",
            color: "black",
            minWidth: "140px",
            boxShadow: "5px 5px 8px rgba(0, 0, 0, 0.15)",
            zIndex: 10,
            // padding: "8px 0",
            borderRadius: "4px",
          }}
        >
          {optionList.map((opt, i) => (
  <div
    key={i}
    style={{
      padding: "8px 16px",
      cursor: "pointer",
      transition: "background-color 0.2s ease, color 0.2s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#00A149";
      e.currentTarget.style.color = "white";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "rgb(240, 238, 238)";
      e.currentTarget.style.color = "black";
    }}
    onClick={() => handleOptionClick(opt.path)}
  >
    {opt.label}
  </div>
))}

        </div>
      )}
    </div>
  );
};

export default Dropdown;
