import React from "react";
import "./style.css";
const Submitted = () => {
  return (
    <div className="w3-container">
      <h2>W3.CSS Animated Modal</h2>
      <p>
        Zoom in the modal with the w3-animate-zoom class, or slide in the modal
        from a specific direction using the w3-animate-top, w3-animate-bottom,
        w3-animate-left or w3-animate-right class:
      </p>
      <button
        onClick={() => document.getElementById("id01")}
        className="w3-button w3-black"
      >
        Open Animated Modal
      </button>

      <div id="id01" className="w3-modal">
        <div className="w3-modal-content w3-animate-top w3-card-4">
          <header className="w3-container w3-teal">
            <span
              onClick={() => document.getElementById("id01")}
              className="w3-button w3-display-topright"
            >
              &times;
            </span>
            <h2>Modal Header</h2>
          </header>
          <div className="w3-container">
            <p>Some text..</p>
            <p>Some text..</p>
          </div>
          <footer className="w3-container w3-teal">
            <p>Modal Footer</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
