import React from "react";
import Left1 from "./Left1";
import Left2 from "./Left2";
const Left = () => {
  return (
    <div className="container cont-left text-center shadow-sm ">
      <div className="row  align-items-center">
        <div className="col-12 p-0">
          <Left1 />
        </div>
        <div className="col-12 p-0">
          <Left2 />
        </div>
      </div>
    </div>
  );
};

export default Left;
