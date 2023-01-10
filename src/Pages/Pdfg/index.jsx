import React from "react";
import "./style.css";
const PdfSave = () => {
  const selectOption = ["rrrrr", "ttttt", "kkkkk", "llllll"];

  return (
    <div>
      <select
        style={{ width: "200px" }}
        className="select"
        // value={selectValue}
        // onChange={(e: any) => {
        // setSelectValue(e.target.value);
        // }}
      >
        {selectOption.map((item) => (
          <option className="option" value={item}>
            {item}
          </option>
        ))}
      </select>{" "}
    </div>
  );
};

export default PdfSave;
