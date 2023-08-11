import React from "react";
import Right1 from "./Right1";
import Right2 from "./Right2";

const Right = () => {
  return (
    <div className="container cont-right text-center shadow-lg ">
      <div className="row  align-items-center">
        <div className="col-12 p-0">
          <Right1 />
        </div>
        <div className="col-12 p-0">
          <Right2 />
        </div>
      </div>
    </div>
  );
};

export default Right;
