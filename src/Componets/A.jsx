import React from "react";
import HOC from "./HOC";

const A = (propsFromHoc) => {
  const { count, handleIncrement, name, batch } = propsFromHoc;
  // console.log(propsFromHoc);
  return (
    <div>
      <h2>{count}</h2>
      <p>Batch : {batch}</p>
      <button onClick={handleIncrement}> {name}</button>
    </div>
  );
};
export default HOC(A, 5);
