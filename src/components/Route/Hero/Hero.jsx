import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/originals/69/3f/8b/693f8b66531187fc337778515587ac0c.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[50px] text-[#000000] font-[600] capitalize`}
        >
          Elevate Your Style With Our Latest Collections.
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000]">
          Step into our men's clothing store and embark on a journey of style
          and sophistication. From impeccably tailored suits to laid-back casual
          wear, we offer a curated selection that caters to every facet of the
          modern man's lifestyle.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-8`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
