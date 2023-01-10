import React from "react";

const Condition = () => {
  const arrayOfCity = [
    {
      id: 1,
      country: "Amritsar",
    },
    {
      id: 2,
      country: "Jalandhar",
    },
    {
      id: 3,
      country: "Ludhiana",
    },
    {
      id: 4,
      country: "Batala",
    },
    {
      id: 5,
      country: "tarn taran",
    },
  ];

  //   const getColor = (items) => {
  //     switch (items?.id) {
  //       case 1:
  //         return "red";

  //       case 2:
  //         return "blue";

  //       case 3:
  //         return "pink";

  //       case 4:
  //         return "orange";

  //       case 5:
  //         return "yellow";

  //       default:
  //         return "black";
  //     }
  //   };

  const getColor = (items) => {
    if (items?.id === 1) {
      return "red";
    } else if (items?.id === 2) {
      return "blue";
    } else if (items?.id === 3) {
      return "pink";
    } else if (items?.id === 4) {
      return "orange";
    } else if (items?.id === 5) {
      return "yellow";
    } else {
      return "black";
    }
  };

  return (
    <div>
      {arrayOfCity?.map((items) => (
        <div style={{ color: getColor(items) }}>{items.country}</div>
      ))}
    </div>
  );
};

export default Condition;
