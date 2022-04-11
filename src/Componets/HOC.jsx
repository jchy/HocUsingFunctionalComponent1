import React, { useState } from "react";

const HOC = (WrappedComponent, entity) => {
  // console.log(WrappedComponent);
  const HOC = (propsFromApp) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
      setCount(count + entity);
    };
    return (
      <div>
        <WrappedComponent
          count={count}
          handleIncrement={handleIncrement}
          {...propsFromApp}
        />
      </div>
    );
  };
  return HOC;
};
export default HOC;

//  <Wrapppedcomponent {...props}>
