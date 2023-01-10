import React from "react";
const Ss = () => {
  const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;
  const onChange = (key) => {
    console.log(key);
  };

  const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div class="dropdown">
      <button
        onClick={() => {
          myFunction();
        }}
        class="dropbtn"
      >
        Dropdown
      </button>
      <div id="myDropdown" class="dropdown-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>

    // <div defaultActiveKey={["1"]} onChange={onChange}>
    //   <div header="This is panel header 1" key="1">
    //     <p>{text}</p>
    //   </div>
    //   <div header="This is panel header 2" key="2">
    //     <p>{text}</p>
    //   </div>
    //   <div header="This is panel header 3" key="3">
    //     <p>{text}</p>
    //   </div>
    // </div>
  );
};

export default Ss;
