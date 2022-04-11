import React from "react";
import HOC from "./HOC";

const B = (propsFromHoc) => {
  const { count, handleIncrement, name, batch } = propsFromHoc;
  // console.log(propsFromHoc);
  return (
    <div>
      <h2>{count}</h2>
      <p>Batch : {batch}</p>
      <button onMouseOver={handleIncrement}> {name}</button>
    </div>
  );
};
export default HOC(B, 2);
