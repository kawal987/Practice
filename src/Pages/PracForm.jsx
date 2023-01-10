import React, { useState } from "react";

const PracForm = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs?.username || ""}
            onChange={handleChange}
          />
          <br />
        </label>
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={inputs?.age || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter your address:
          <input
            type="text"
            name="address"
            value={inputs?.address || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter your city:
          <select
            name="city"
            id="city"
            value={inputs?.city || ""}
            onChange={handleChange}
            defaultValue=""
          >
            <option value="none">select an option</option>
            <option value="amritsar">Amritsar</option>
            <option value="Jalandhar">Jalandhar</option>
            <option value="Ludhiana">Ludhiana</option>
          </select>
        </label>
        <input type="submit" />
      </form>
    </>
  );
};

export default PracForm;
