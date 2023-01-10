import React, { useState, useRef } from "react";

const TryCatchValidation = () => {
  const [pswrdVal, setPswrdVal] = useState();

  const inputRef = useRef();
  function Validate(params) {
    const pTag = document.getElementById("validationID");
    pTag.innerHTML = "";

    try {
      let x = document.getElementById("InputIdx").value;
      if (x === "") {
        throw "Input is empty!";
      } else if (x < 5) {
        throw "Input is less than 5!";
      } else if (x > 10) {
        throw "Input is greater than 10!";
      }
    } catch (error) {
      pTag.innerHTML = error;
    }
  }

  const emailValid = (e) => {
    let value = e.target.value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pEmailTag = document.getElementById("validationEmailID");
    pEmailTag.innerHTML = "";
    try {
      if (!regex.test(value)) {
        throw "Enter valid email!";
      }
    } catch (error) {
      pEmailTag.innerHTML = error;
    }
  };

  const passwordValid = (e) => {
    let value = e.target.value;

    let newVal = value.replace(/ /g, "");
    console.log("newVal", newVal);
    setPswrdVal(newVal);
    // sdf
  };

  const onButtonClick = () => {
    console.log("inputRef", inputRef.current.value);
    // inputRef.current.focus();
    inputRef.current.value = "Hi sandeep ji";
  };

  return (
    <div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10px",
        }}
      >
        Custom validation using try catch
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10%",
        }}
      >
        <input id="InputIdx" onChange={() => Validate()} />
        <button
        // onClick={() => Validate()
        // }
        >
          Dabbo
        </button>
      </div>
      <p
        id="validationID"
        style={{
          color: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10%",
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <input id="InputEmailIdx" onChange={(e) => emailValid(e)} />
          <button
            // onClick={() => Validate()
            // }
            type="submit"
          >
            Submit Email
          </button>
        </form>
      </div>
      <p
        id="validationEmailID"
        style={{
          color: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10%",
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            id="InputPasswordIdx"
            onChange={(e) => passwordValid(e)}
            value={pswrdVal}
          />
          <button
            // onClick={() => Validate()
            // }
            type="submit"
          >
            Submit Email
          </button>
        </form>
      </div>
      <p
        id="validationPasswordID"
        style={{
          color: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "10%",
        }}
      >
        <input ref={inputRef} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
      <p
        id="validationPasswordID"
        style={{
          color: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></p>
    </div>
  );
};

export default TryCatchValidation;
