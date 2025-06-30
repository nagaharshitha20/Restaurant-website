import React, { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dropdown = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

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

  return (
    <div
      ref={dropdownRef}
      style={{ position: 'relative', display: 'inline-block', marginTop: '16px' }}
    >
      <span
        onClick={() => setOpen(!open)}
        style={{
          cursor: 'pointer',
          fontFamily: 'Franklin Gothic Medium',
          color: 'black',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {label} <span style={{ marginLeft: 4 }}><RiArrowDropDownLine /></span>
      </span>
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'rgb(240, 238, 238)',
            color:'black',
            
            minWidth: '140px',
            boxShadow: '5px 5px 8px rgba(0, 0, 0, 0.15)',
            zIndex: 10,
            padding: '8px 0',
            borderRadius: '4px',
          }}
        >
          {options.map((opt, i) => (
            <div
              key={i}
              style={{
                padding: '8px 16px',
                cursor: 'pointer',
                
              }}
              onClick={() => setOpen(false)}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
