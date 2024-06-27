import React from "react";
import CommonCounter from "./CommonCounter";
import Image from "next/image";
import shape04 from "@/assets/images/shape/shape_04.svg";
import shape05 from "@/assets/images/shape/shape_05.svg";

const CounterTwo = () => {
  return (
    <div>
      <div className="counter-section-one fancy-bg">
        <div className="container">
          <div className="inner-container">
            <CommonCounter />
          </div>
          {/* /.inner-container */}
        </div>
        <Image
          src={shape04}
          height={150}
          // width={150}
          alt="shape design image"
          className="shapes shape-one"
        />
        <Image
          src={shape05}
          height={120}
          // width={150}
          alt="shape design image"
          className="shapes shape-two"
        />
      </div>
      {/* /.counter-section-one */}
    </div>
  );
};

export default CounterTwo;
