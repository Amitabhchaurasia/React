import React, { useState } from 'react';

export default function Switch() {
  const [isMoon, setIsMoon] = useState(true);

  function changeIcon() {
    let iconElement = document.querySelector('i');

    // Check if 'fa-moon' class is present
    if (iconElement.classList.contains('fa-moon')) {
      document.body.style.backgroundColor = "white";
    }else{
        document.body.style.backgroundColor = "#242424";

    }

    setIsMoon((prevIsMoon) => !prevIsMoon);
  }

  return (
    <div className="div">
      <button onClick={changeIcon}>
        <i className={`fa-regular ${isMoon ? 'fa-moon' : 'fa-sun'}`}></i>
      </button>
    </div>
  );
}
