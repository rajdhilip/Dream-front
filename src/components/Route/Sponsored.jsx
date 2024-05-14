import React from "react";
import styles from "../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} hidden sm:block bg-white py-0 px-5 mb-8 cursor-pointer rounded-xl`}
    >
      {/* <div className="flex justify-between w-full">
        <div className="flex items-start mt-4">
          <img
            src="https://logowik.com/content/uploads/images/270_polo_assn_logo.jpg"
            alt=""
            style={{ width: "200px", objectFit: "contain" }}
          />
        </div>
        <div className="flex items-start mt-16">
          <img
            src="https://i.pinimg.com/736x/9f/6f/08/9f6f08d9ca171e43ea8412ea4d67fa69.jpg"
            style={{ width: "200px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start mt-12">
          <img
            src="data:image/png;base64,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"
            style={{ width: "200px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start mt-6">
          <img
            src="https://yt3.googleusercontent.com/k6PuePE0iigmugaaWu3dO89BsWvATAQv3rD3nEY5lu78bgzupAPS0zFaF1K5nuGgXQl_ukmXVA=s900-c-k-c0x00ffffff-no-rj"
            style={{ width: "150px", objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="flex items-start">
          <img
            src="https://economictimes.indiatimes.com/thumb/msid-79592273,width-1200,height-1200,resizemode-4,imgsize-69427/titled-design-2020-12-06t161107-974.jpg?from=mdr"
            style={{ width: "200px", objectFit: "contain" }}
            alt=""
          />
        </div>
      </div> */}
    </div>
  );
};

export default Sponsored;
