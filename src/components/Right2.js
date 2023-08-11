import React from "react";
import ChanceOfRain from "./more/ChanceOfRain";
import FeelsLike from "./more/FeelsLike";
import Humidity from "./more/Humidity";
import UVIndex from "./more/UVIndex";
import Wind from "./more/Wind";
import Precipitation from "./more/Precipitation";

const Right2 = () => {
  return (
    <div className="right-side px-4 py-2 ">
      <div className="container m-2 ">
        <div className="row  align-items-center">
          <div className="col-12 p-0 text-start">
            <div className="container  ">
              <div className="row  align-items-center">
                <div className="col-12 p-0">
                  <h6>More details of today's weather</h6>
                </div>
              </div>
            </div>
            <div className="container   p-0 my-3 ">
              <div className="row p-3 grid gap-0 column-gap-3 row-gap-3 d-flex justify-content-around align-items-center">
                <div className="g-col-4 p-2  right-22 shadow-lg shadow">
                  <Humidity />
                </div>
                <div className="g-col-4 p-2  right-22 shadow-lg shadow">
                  <UVIndex />
                </div>
                <div className="g-col-4 p-2  right-22 shadow-lg shadow">
                  <Precipitation />
                </div>

                <div className="g-col-4 p-2  right-22 shadow-lg shadow">
                  <FeelsLike />
                </div>
                <div className="g-col-4 p-2  right-22 shadow-lg shadow">
                  <Wind />
                </div>
                <div className="g-col-4 p-2  right-22 shadow-lg shadow">
                  <ChanceOfRain />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Right2;
