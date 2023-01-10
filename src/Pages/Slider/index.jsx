import React from "react";

const Slider = () => {
  var slideIndex = 1;
  showDivs(slideIndex);

  const plusDivs = (n) => {
    console.log("n1", n);
    showDivs((slideIndex += n));
  };

  const currentDiv = (n) => {
    console.log("n2", n);
    showDivs((slideIndex = n));
  };

  const showDivs = (n) => {
    console.log("n3", n);
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " w3-white";
  };
  return (
    <div>
      <div>
        <h2>Slideshow Indicators</h2>
        <p>
          An example of using buttons to indicate how many slides there are in
          the slideshow, and which slide the user is currently viewing.
        </p>
      </div>

      <div style={{ maxWidth: "800px" }}>
        <img
          alt=""
          src="https://tse3.mm.bing.net/th?id=OIP.b_p_sWbzu1ZVQsbYwGGKJgHaE8&pid=Api&P=0&w=244&h=163"
          style={{ width: "100%" }}
        />
        <img alt="" src="img_snow_wide.jpg" style={{ width: "100%" }} />
        <img alt="" src="img_mountains_wide.jpg" style={{ width: "100%" }} />
        <div style={{ width: "100%" }}>
          <div
            className="w3-left w3-hover-text-khaki"
            onClick={() => plusDivs(-1)}
          >
            &#10094;
          </div>
          <div
            className="w3-right w3-hover-text-khaki"
            onClick={() => plusDivs(1)}
          >
            &#10095;
          </div>
          <span
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
            onClick={() => currentDiv(1)}
          ></span>
          <span
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
            onClick={() => currentDiv(2)}
          ></span>
          <span
            className="w3-badge demo w3-border w3-transparent w3-hover-white"
            onClick={() => currentDiv(3)}
          ></span>
        </div>
      </div>
    </div>
  );
};

export default Slider;
